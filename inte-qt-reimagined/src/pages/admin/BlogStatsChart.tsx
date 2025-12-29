import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend, LineChart, Line, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, BarChart3, Calendar } from 'lucide-react';

interface BlogStatsChartProps {
  data: {
    month: string;
    blogs: number;
  }[];
}

const BlogStatsChart: React.FC<BlogStatsChartProps> = ({ data }) => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'area'>('bar');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-xl">
          <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {label}
          </p>
          <div className="space-y-1">
            <p className="text-blue-600 font-bold text-lg">
              {payload[0].value} {payload[0].value === 1 ? 'blog' : 'blogs'}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Monthly publications</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // Calculate statistics
  const totalBlogs = data.reduce((sum, item) => sum + item.blogs, 0);
  const averageBlogs = data.length > 0 ? Math.round(totalBlogs / data.length) : 0;
  const maxBlogs = data.length > 0 ? Math.max(...data.map(item => item.blogs)) : 0;
  const minBlogs = data.length > 0 ? Math.min(...data.map(item => item.blogs)) : 0;
  
  // Calculate trend
  const getTrend = () => {
    if (data.length < 2) return 0;
    const lastMonth = data[data.length - 1]?.blogs || 0;
    const prevMonth = data[data.length - 2]?.blogs || 0;
    if (prevMonth === 0) return 100;
    return Math.round(((lastMonth - prevMonth) / prevMonth) * 100);
  };

  const trend = getTrend();

  // Get gradient color for bars based on value
  const getBarColor = (value: number) => {
    const percentage = maxBlogs > 0 ? (value / maxBlogs) * 100 : 0;
    
    if (percentage > 80) return 'url(#highGradient)';
    if (percentage > 50) return 'url(#mediumGradient)';
    if (percentage > 20) return 'url(#lowGradient)';
    return 'url(#veryLowGradient)';
  };

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-100 rounded mb-4"></div>
          <div className="flex gap-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Blog Activity Analytics</h3>
          <p className="text-sm text-gray-500 mt-1">Monthly publication trends</p>
        </div>
        
        {/* Chart Type Selector */}
        <div className="flex items-center gap-3 mt-3 sm:mt-0">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setChartType('bar')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                chartType === 'bar' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Bars
            </button>
            <button
              onClick={() => setChartType('line')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                chartType === 'line' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Line
            </button>
            <button
              onClick={() => setChartType('area')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                chartType === 'area' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Area
            </button>
          </div>
          
          {/* Trend Indicator */}
          <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
            trend > 0 ? 'bg-green-50 text-green-700' : 
            trend < 0 ? 'bg-red-50 text-red-700' : 
            'bg-gray-50 text-gray-700'
          }`}>
            {trend > 0 ? (
              <TrendingUp className="h-4 w-4" />
            ) : trend < 0 ? (
              <TrendingDown className="h-4 w-4" />
            ) : (
              <BarChart3 className="h-4 w-4" />
            )}
            <span className="text-sm font-medium">
              {trend > 0 ? `+${trend}%` : `${trend}%`}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">{totalBlogs}</div>
          <div className="text-sm text-blue-600 font-medium">Total Blogs</div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">{averageBlogs}</div>
          <div className="text-sm text-green-600 font-medium">Monthly Avg</div>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">{maxBlogs}</div>
          <div className="text-sm text-purple-600 font-medium">Peak Month</div>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-900">{minBlogs}</div>
          <div className="text-sm text-yellow-600 font-medium">Lowest Month</div>
        </div>
      </div>

      {/* Chart Container */}
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          {data.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>No blog activity data available</p>
                <p className="text-sm mt-1">Create blogs to see analytics</p>
              </div>
            </div>
          ) : (
            <>
              {/* SVG Gradients for Bar Chart */}
              <defs>
                <linearGradient id="highGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity={0.9} />
                </linearGradient>
                <linearGradient id="mediumGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.9} />
                </linearGradient>
                <linearGradient id="lowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.9} />
                </linearGradient>
                <linearGradient id="veryLowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#BFDBFE" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity={0.9} />
                </linearGradient>
              </defs>

              {chartType === 'bar' && (
                <BarChart data={data}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="#E5E7EB" 
                    vertical={false}
                  />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6B7280"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    verticalAlign="top"
                    height={36}
                    formatter={() => (
                      <span className="text-gray-700 text-sm font-medium">Blogs Published</span>
                    )}
                  />
                  <Bar 
                    dataKey="blogs" 
                    name="Blogs Published"
                    radius={[6, 6, 0, 0]}
                    barSize={30}
                    animationDuration={1500}
                    animationBegin={0}
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={getBarColor(entry.blogs)}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    ))}
                  </Bar>
                </BarChart>
              )}

              {chartType === 'line' && (
                <LineChart data={data}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="#E5E7EB" 
                    vertical={false}
                  />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6B7280"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="blogs" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ stroke: '#3B82F6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#3B82F6' }}
                    name="Blogs Published"
                    animationDuration={1500}
                  />
                </LineChart>
              )}

              {chartType === 'area' && (
                <AreaChart data={data}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="#E5E7EB" 
                    vertical={false}
                  />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6B7280"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="blogs" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    fill="url(#highGradient)"
                    fillOpacity={0.3}
                    name="Blogs Published"
                    animationDuration={1500}
                  />
                </AreaChart>
              )}
            </>
          )}
        </ResponsiveContainer>
      </div>

      {/* Chart Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-gray-500">
            Showing {data.length} months of data
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">High Activity</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-300"></div>
              <span className="text-sm text-gray-600">Moderate Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStatsChart;