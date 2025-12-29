import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface CircularChartData {
  name: string;
  value: number;
  color: string;
}

interface CircularChartProps {
  data: CircularChartData[];
  title: string;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
}

const CircularChart: React.FC<CircularChartProps> = ({ 
  data, 
  title, 
  height = 300,
  innerRadius = 60,
  outerRadius = 100
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const percentage = total > 0 ? ((payload[0].value / total) * 100).toFixed(1) : '0';
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{payload[0].name}</p>
          <p className="text-gray-600">{payload[0].value.toLocaleString()}</p>
          <p className="text-sm text-gray-500">{percentage}%</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null; // Don't show label for very small slices

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-xs font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Filter out zero values for better display
  const filteredData = data.filter(item => item.value > 0);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      
      {filteredData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="text-gray-400 text-center">
            <div className="h-32 w-32 mx-auto rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center mb-4">
              <span className="text-gray-500">No data</span>
            </div>
            <p className="text-gray-500">No data available for this chart</p>
          </div>
        </div>
      ) : (
        <>
          <div style={{ width: '100%', height }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={filteredData}
                  cx="50%"
                  cy="50%"
                  innerRadius={innerRadius}
                  outerRadius={outerRadius}
                  paddingAngle={filteredData.length > 1 ? 2 : 0}
                  dataKey="value"
                  label={renderCustomizedLabel}
                  labelLine={false}
                  animationDuration={1000}
                  animationBegin={0}
                >
                  {filteredData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      stroke="#fff"
                      strokeWidth={2}
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ paddingTop: '20px' }}
                  formatter={(value) => (
                    <span className="text-gray-700 text-sm font-medium">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
            {filteredData.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="h-3 w-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                  <span className="text-xs text-gray-500 ml-1">
                    ({total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      
      <div className="mt-6 pt-4 border-t border-gray-100 text-center">
        <p className="text-2xl font-bold text-gray-900">{total.toLocaleString()}</p>
        <p className="text-sm text-gray-500">Total</p>
      </div>
    </div>
  );
};

export default CircularChart;