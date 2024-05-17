import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { report } from '../../assets/dummy';

// use apex chart library to creat six most beatifull chart that show loan report over different period

interface ChartCardProps {
  title: string;
  desc: string;
  options: ApexCharts.ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
}

interface ReportItem {
  title: string;
  desc: string;
  type: ApexChart['type'];
  categories: string[];
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexOptions;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, desc, options, series }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
      <Chart options={options} series={series} type={options.chart?.type as ApexChart['type']} height={300} />
    </div>
  );
};

const ReportPage = () => {
  const chartConfigs = report.map(chart => ({
    title: chart.title,
    desc: chart.desc,
    options: {
      chart: {
        type: chart.type as ApexChart['type'],
      },
      xaxis: {
        categories: chart.categories,
      },
      ...chart.options,
    },
    series: chart.series,
  }));
  return (
    <section className="py-16 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">Loan Report</h1>
          <p className="text-gray-600 mt-2">View statistical data about your reports.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {chartConfigs.map((config, idx) => (
            <ChartCard
              key={idx}
              title={config.title}
              desc={config.desc}
              options={config.options}
              series={config.series}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default ReportPage;