import { TrendingUp, Users, FileText, Clock, CheckCircle, XCircle } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: number;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value.toLocaleString()}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
      {trend !== undefined && (
        <div className="mt-4 flex items-center text-sm">
          <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
          <span className="text-green-600 font-medium">{trend}%</span>
          <span className="text-gray-500 ml-2">from last month</span>
        </div>
      )}
    </div>
  );
};

interface DashboardStatsProps {
  stats: {
    totalBlogs: number;
    pendingBlogs: number;
    approvedBlogs: number;
    rejectedBlogs: number;
    totalUsers: number;
    activeUsers: number;
    deletedUsers: number;
  };
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Total Blogs"
        value={stats.totalBlogs}
        icon={<FileText className="h-6 w-6 text-blue-600" />}
        color="bg-blue-50"
        trend={12}
      />
      <StatsCard
        title="Pending Review"
        value={stats.pendingBlogs}
        icon={<Clock className="h-6 w-6 text-yellow-600" />}
        color="bg-yellow-50"
        trend={8}
      />
      <StatsCard
        title="Approved"
        value={stats.approvedBlogs}
        icon={<CheckCircle className="h-6 w-6 text-green-600" />}
        color="bg-green-50"
        trend={15}
      />
      <StatsCard
        title="Total Users"
        value={stats.totalUsers}
        icon={<Users className="h-6 w-6 text-purple-600" />}
        color="bg-purple-50"
        trend={5}
      />
    </div>
  );
};

export default DashboardStats;