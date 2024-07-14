import React from 'react';

const reports = [
  {
    id: 1,
    title: 'Annual Report 2023',
    description: 'This is the annual report for the year 2023, detailing the activities and financial summary of the organization.',
    link: '/reports/annual-report-2023.pdf'
  },
  {
    id: 2,
    title: 'Financial Report Q1 2024',
    description: 'This report covers the financial performance of the organization for the first quarter of 2024.',
    link: '/reports/financial-report-q1-2024.pdf'
  },
  {
    id: 3,
    title: 'Impact Report 2022',
    description: 'The impact report for 2022 highlights the key achievements and the positive impact we have made.',
    link: '/reports/impact-report-2022.pdf'
  },  {
    id: 3,
    title: 'Impact Report 2022',
    description: 'The impact report for 2022 highlights the key achievements and the positive impact we have made.',
    link: '/reports/impact-report-2022.pdf'
  },  {
    id: 3,
    title: 'Impact Report 2022',
    description: 'The impact report for 2022 highlights the key achievements and the positive impact we have made.',
    link: '/reports/impact-report-2022.pdf'
  },
  {
    id: 3,
    title: 'Impact Report 2022',
    description: 'The impact report for 2022 highlights the key achievements and the positive impact we have made.',
    link: '/reports/impact-report-2022.pdf'
  },
  // Add more reports as needed
];

const Reports = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Published Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reports.map((report) => (
          <div key={report.id} className="shadow-lg rounded-xl p-6 border-2 dark-border-white ">
            <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
            <p className=" mb-4">{report.description}</p>
            <a
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700 transition-all duration-300"
            >
              View Report
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
