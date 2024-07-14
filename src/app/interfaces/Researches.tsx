import React from 'react';

const researches = [
  {
    id: 1,
    title: 'Climate Change and Its Impact',
    description: 'An in-depth study on the effects of climate change on various ecosystems and human societies.',
    link: '/researches/climate-change-impact.pdf'
  },
  {
    id: 2,
    title: 'Innovations in Renewable Energy',
    description: 'A comprehensive report on the latest advancements in renewable energy technologies.',
    link: '/researches/renewable-energy-innovations.pdf'
  },
  {
    id: 3,
    title: 'Sustainable Agriculture Practices',
    description: 'Research on sustainable agriculture practices to ensure food security and environmental protection.',
    link: '/researches/sustainable-agriculture-practices.pdf'
  },
  // Add more researches as needed
];

const Researches = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Published Researches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researches.map((research) => (
          <div key={research.id} className="dark-border-white border-2 shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{research.title}</h3>
            <p className=" mb-4">{research.description}</p>
            <a
              href={research.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700 transition-all duration-300"
            >
              View Research
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Researches;
