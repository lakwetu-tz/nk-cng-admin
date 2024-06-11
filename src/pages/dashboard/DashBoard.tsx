import React from 'react';
import { FiUsers, FiActivity, FiDatabase, FiDollarSign, FiClipboard, FiFolderMinus, FiFolderPlus, FiTrendingUp, FiTrendingDown } from 'react-icons/fi'; // Import required React Icons

// Define types
type Metric = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  value: number;
};

type MetricCardProps = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  value: number;
};

const MetricCard: React.FC<MetricCardProps> = ({ title, desc, icon: IconComponent, value }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <IconComponent className="w-10 h-10 text-green-500" /> {/* Render the icon component with indigo color */}
          <h4 className="text-gray-800 font-semibold">{title}</h4>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
        <div>
          <h4 className="text-4xl text-gray-800 font-semibold">{value}</h4>
          <p className="text-gray-600 text-sm">Total</p>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const metrics: Metric[] = [
    {
      title: "Total Loans Issued",
      desc: "Total number of loans issued",
      icon: FiDollarSign,
      value: 120,
    },
    {
      title: "Total Payments Received",
      desc: "Total amount of payments received",
      icon: FiTrendingUp,
      value: 50000,
    },
    {
      title: "Total Outstanding Loans",
      desc: "Total amount of outstanding loans",
      icon: FiTrendingDown,
      value: 75000,
    },
    {
      title: "Total Loans in Default",
      desc: "Number of loans currently in default",
      icon: FiFolderMinus,
      value: 5,
    },
    {
      title: "Default Rate",
      desc: "Percentage of loans in default",
      icon: FiClipboard,
      value: 4, // as a percentage
    },
    {
      title: "Active Loan Requests",
      desc: "Number of active loan requests",
      icon: FiActivity,
      value: 30,
    },
    {
      title: "Registered Users",
      desc: "Total number of registered users",
      icon: FiUsers,
      value: 450,
    },
    {
      title: "Total Revenue Generated",
      desc: "Total revenue generated from loans",
      icon: FiDatabase,
      value: 120000,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">Dashboard Metrics</h1>
          <p className="text-gray-600 mt-2">View statistical data about your loan management system.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {metrics.map((metric, idx) => (
            <MetricCard
              key={idx}
              title={metric.title}
              desc={metric.desc}
              icon={metric.icon}
              value={metric.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
