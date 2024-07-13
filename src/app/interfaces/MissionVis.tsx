import { Button } from '@/components/ui/button';
import { FaDollarSign, FaUsers } from 'react-icons/fa';

export default function MissionVis() {
  const stats = [
    {
      name:"Vision",
      description: 'RCWDO aspires for a poverty free and thriving just society1 leaving no one behind.',
    },
    {
      icon: <FaDollarSign size={30} />,
      name: 'Mission',
      description: 'RCWDO works for robust and resilient community to ensure improved and sustainable livelihood whereby the rights of the poor and vulnerable groups of the societies are promoted and protected through their proactive engagement as owner & change agent.',
    },
    {
      icon: <FaUsers size={30} />,
      name:"Values",
      description: 'Integrity, Trust-Worthiness, Diversity, Community Participation and Partnership Development',
    },
   
  ];

  return (
    <div className="flex flex-wrap justify-around mt-4 ">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center p-4 m-2  rounded-xl w-[30%] border-2 shadow-xl">
          <div className="text-cyan-400 text-lg text-bold">{stat.name}</div>
          <div className="text-center  mt-1">{stat.description}</div>
          <Button variant="outline"  className='border-cyan-400 mt-4 rounded-xl hover:bg-cyan-400 transition-all duration-200'>Discover More</Button>
        </div>
      ))}
    </div>
  );
}
