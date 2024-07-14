// components/Header.js
import Image from 'next/image';

const HeaderTxt = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center bg-cover bg-center py-12 bg-[url('/path_to_your_background_image.jpg')]">
            <div className="">
                <Image src="/Rift.png" alt="Company Logo" width={200} height={200} />
            </div>
            <h1 className="text-[50px] font-bold text-cyan-300">RCWDO</h1>
            <h2 className="text-2xl ml-2 font-medium text-cyan-300 md:mt-0 mt-10 px-4">Empowering Communities, Transforming Lives</h2>
            
        </div>
    );
};

export default HeaderTxt;
