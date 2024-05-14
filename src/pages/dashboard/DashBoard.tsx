import React from 'react';
import { FiUsers, FiActivity, FiDatabase, FiShoppingCart, FiDollarSign, FiCreditCard } from 'react-icons/fi'; // Import required React Icons

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
          <IconComponent className="w-10 h-10 text-indigo-500" /> {/* Render the icon component with indigo color */}
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
      title: "All Users",
      desc: "Total number of users",
      icon: FiUsers,
      value: 1000,
    },
    {
      title: "Active Users",
      desc: "Number of active users",
      icon: FiActivity,
      value: 700,
    },
    {
      title: "Database Size",
      desc: "Total size of the database",
      icon: FiDatabase,
      value: 500,
    },
    {
      title: "Cars Refill",
      desc: "Number of cars refilled",
      icon: FiShoppingCart,
      value: 300,
    },
    {
      title: "Refill Requests",
      desc: "Number of refill requests",
      icon: FiDollarSign,
      value: 150,
    },
    {
      title: "Total Revenue",
      desc: "Total revenue generated",
      icon: FiCreditCard,
      value: 5000,
    },
    {
      title: "Total Debt",
      desc: "Total debt accumulated",
      icon: FiCreditCard,
      value: 2000,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">Dashboard Metrics</h1>
          <p className="text-gray-600 mt-2">View statistical data about your dashboard.</p>
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
