import Image from "next/image";

export default function Members() {
  const members = [
    {
      name: 'Berhanu Geleto',
      role: "Founder, Executive Director",
      image: "https://th.bing.com/th/id/OIP.BoqJ8tKGpWzJm8UbfGVbOwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: 'Tsegaye Koji',
      role: "Board Chairperson",
      image: "https://th.bing.com/th/id/OIP.BoqJ8tKGpWzJm8UbfGVbOwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: 'Abu Yadeta',
      role: "Board Vice-chairperson",
      image: "https://th.bing.com/th/id/OIP.BoqJ8tKGpWzJm8UbfGVbOwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: 'Getachew Jima',
      role: "Board member",
      image: "https://th.bing.com/th/id/OIP.BoqJ8tKGpWzJm8UbfGVbOwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: 'Regassa Aboma',
      role: "Board Member",
      image: "https://th.bing.com/th/id/OIP.BoqJ8tKGpWzJm8UbfGVbOwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: 'Alemayehu Diro',
      role: "Board Member",
      image: "https://th.bing.com/th/id/OIP.BoqJ8tKGpWzJm8UbfGVbOwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: 'Girma Dallu',
      role: "Board Member",
      image: "https://th.bing.com/th/id/OIP.BoqJ8tKGpWzJm8UbfGVbOwHaHa?rs=1&pid=ImgDetMain"
    },
  ];

  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-8 mt-6">Board Members</h2>
      <div className="flex flex-col items-center">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2 w-[40%] gap-y-4">
          {
            members.slice(0, members.length - 3).map((person) => (
              <div key={person.name} className="p-2 border-2 dark:border-white rounded-xl">
                <Image alt="Board Member"
                  width={200}
                  height={200}
                  src={person.image}
                />
                <p className="text-lg text-center">{person.name}</p>
                <p className="text-sm text-center"> {person.role}</p>
              </div>
            ))
          }
        </div>
        <div className="flex flex-row justify-center w-full mt-4">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-1 w-[40%]">
            {
              members.slice(members.length - 3).map((person) => (
                <div key={person.name} className="p-2 border-2 dark:border-white rounded-xl">
                  <Image alt="Board Member"
                    width={200}
                    height={200}
                    src={person.image}
                  />
                  <p className="text-lg text-center">{person.name}</p>
                  <p className="text-sm text-center"> {person.role}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
