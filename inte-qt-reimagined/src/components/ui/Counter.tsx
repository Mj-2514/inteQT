// src/components/ui/Counter.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const currentValue = startValue + (end - startValue) * easeOutQuart;
        
        if (decimals > 0) {
          setCount(parseFloat(currentValue.toFixed(decimals)));
        } else {
          setCount(Math.floor(currentValue));
        }
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          // Ensure final value is exactly the end value
          if (decimals > 0) {
            setCount(parseFloat(end.toFixed(decimals)));
          } else {
            setCount(end);
          }
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [inView, end, duration, decimals]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }
    return num.toLocaleString('en-US');
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default Counter;