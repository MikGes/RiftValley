import { FaMapMarkerAlt, FaDollarSign, FaUsers, FaBuilding } from 'react-icons/fa';

export default function Stats() {
  const stats = [
    {
      icon: <FaMapMarkerAlt size={30} />,
      number: '9',
      description: 'COORDINATION OFFICES',
    },
    {
      icon: <FaDollarSign size={30} />,
      number: '12.5 M+',
      description: 'FUND MOBILIZED',
    },
    {
      icon: <FaUsers size={30} />,
      number: '2.0 M+',
      description: 'BENEFICIARIES (DIRECT+INDIRECT)',
    },
    {
      icon: <FaBuilding size={30} />,
      number: '30+',
      description: 'PARTNERS & DONORS',
    },
  ];

  return (
    <div className="flex flex-wrap justify-around  p-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center p-4 m-2  rounded-xl w-60 border-2 shadow-xl">
          <div className="text-cyan-500">{stat.icon}</div>
          <div className="text-3xl font-bold  mt-2">{stat.number}</div>
          <div className="text-center  mt-1">{stat.description}</div>
        </div>
      ))}
    </div>
  );
}
