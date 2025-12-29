import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface MonkeySVGRef {
  leftEye: SVGCircleElement | null;
  rightEye: SVGCircleElement | null;
  leftPupil: SVGCircleElement | null;
  rightPupil: SVGCircleElement | null;
  leftArm: SVGGElement | null;
  rightArm: SVGGElement | null;
  leftHand: SVGGElement | null;
  rightHand: SVGGElement | null;
  face: SVGGElement | null;
}

const MonkeySVG = forwardRef<MonkeySVGRef>((_, ref) => {
  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);
  const leftPupilRef = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);
  const leftArmRef = useRef<SVGGElement>(null);
  const rightArmRef = useRef<SVGGElement>(null);
  const leftHandRef = useRef<SVGGElement>(null);
  const rightHandRef = useRef<SVGGElement>(null);
  const faceRef = useRef<SVGGElement>(null);

  useImperativeHandle(ref, () => ({
    leftEye: leftEyeRef.current,
    rightEye: rightEyeRef.current,
    leftPupil: leftPupilRef.current,
    rightPupil: rightPupilRef.current,
    leftArm: leftArmRef.current,
    rightArm: rightArmRef.current,
    leftHand: leftHandRef.current,
    rightHand: rightHandRef.current,
    face: faceRef.current,
  }));

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      style={{ overflow: 'visible' }}
    >
      {/* Ears */}
      <circle cx="35" cy="100" r="30" fill="hsl(24, 40%, 25%)" />
      <circle cx="35" cy="100" r="18" fill="hsl(32, 45%, 70%)" />
      <circle cx="165" cy="100" r="30" fill="hsl(24, 40%, 25%)" />
      <circle cx="165" cy="100" r="18" fill="hsl(32, 45%, 70%)" />

      {/* Head */}
      <circle cx="100" cy="100" r="70" fill="hsl(24, 40%, 25%)" />

      {/* Face */}
      <g ref={faceRef}>
        <ellipse cx="100" cy="115" rx="50" ry="45" fill="hsl(32, 50%, 80%)" />

        {/* Eyes */}
        <circle ref={leftEyeRef} cx="75" cy="95" r="18" fill="white" />
        <circle ref={rightEyeRef} cx="125" cy="95" r="18" fill="white" />

        {/* Pupils */}
        <circle ref={leftPupilRef} cx="75" cy="95" r="8" fill="hsl(24, 30%, 15%)" />
        <circle ref={rightPupilRef} cx="125" cy="95" r="8" fill="hsl(24, 30%, 15%)" />

        {/* Eye highlights */}
        <circle cx="78" cy="92" r="3" fill="white" opacity="0.8" />
        <circle cx="128" cy="92" r="3" fill="white" opacity="0.8" />

        {/* Nose */}
        <ellipse cx="100" cy="125" rx="15" ry="12" fill="hsl(24, 30%, 30%)" />
        <ellipse cx="93" cy="123" rx="4" ry="5" fill="hsl(24, 25%, 20%)" />
        <ellipse cx="107" cy="123" rx="4" ry="5" fill="hsl(24, 25%, 20%)" />

        {/* Mouth */}
        <path
          d="M 85 145 Q 100 155 115 145"
          fill="none"
          stroke="hsl(24, 30%, 30%)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Eyebrows */}
        <path
          d="M 60 78 Q 75 72 90 78"
          fill="none"
          stroke="hsl(24, 40%, 25%)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 110 78 Q 125 72 140 78"
          fill="none"
          stroke="hsl(24, 40%, 25%)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* Arms */}
      <g ref={leftArmRef} style={{ transformOrigin: '20px 180px' }}>
        <path
          d="M 20 180 Q 30 150 50 130"
          fill="none"
          stroke="hsl(24, 40%, 25%)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Left Hand */}
        <g ref={leftHandRef} style={{ transformOrigin: '50px 130px' }}>
          <circle cx="50" cy="130" r="18" fill="hsl(24, 40%, 25%)" />
          {/* Fingers */}
          <ellipse cx="35" cy="115" rx="6" ry="12" fill="hsl(24, 40%, 25%)" />
          <ellipse cx="45" cy="110" rx="6" ry="14" fill="hsl(24, 40%, 25%)" />
          <ellipse cx="55" cy="108" rx="6" ry="15" fill="hsl(24, 40%, 25%)" />
          <ellipse cx="65" cy="112" rx="6" ry="13" fill="hsl(24, 40%, 25%)" />
        </g>
      </g>

      <g ref={rightArmRef} style={{ transformOrigin: '180px 180px' }}>
        <path
          d="M 180 180 Q 170 150 150 130"
          fill="none"
          stroke="hsl(24, 40%, 25%)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Right Hand */}
        <g ref={rightHandRef} style={{ transformOrigin: '150px 130px' }}>
          <circle cx="150" cy="130" r="18" fill="hsl(24, 40%, 25%)" />
          {/* Fingers */}
          <ellipse cx="135" cy="112" rx="6" ry="13" fill="hsl(24, 40%, 25%)" />
          <ellipse cx="145" cy="108" rx="6" ry="15" fill="hsl(24, 40%, 25%)" />
          <ellipse cx="155" cy="110" rx="6" ry="14" fill="hsl(24, 40%, 25%)" />
          <ellipse cx="165" cy="115" rx="6" ry="12" fill="hsl(24, 40%, 25%)" />
        </g>
      </g>
    </svg>
  );
});

MonkeySVG.displayName = 'MonkeySVG';

export default MonkeySVG;
