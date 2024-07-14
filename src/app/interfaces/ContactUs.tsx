import { FaYoutube, FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

const ContactFormWithMap = () => {
  return (<>
    <div className="md:flex-row gap-4 flex-col flex items-center justify-center ">
      <div className="w-full max-w-2xl p-4">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 dark-border-white">
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="fullName">
              FULL NAME *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              EMAIL *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="phone">
              PHONE
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Phone"
            />
          </div>
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="message">
              MESSAGE *
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className="w-full max-w-2xl mb-4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7041632716887!2d38.816680715263205!3d9.014910993520307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f58fd462e33%3A0xf358e7e2c7e8e122!2sRift%20Valley%20Children%20%26%20Women%20Development%20Organization!5e0!3m2!1sen!2set!4v1627323539342!5m2!1sen!2set"
          width="600"
          height="600"

          loading="lazy"
          className="border-0 w-full h-[450px]"
        ></iframe>
      </div>
     
    </div>
    <div className='flex flex-row justify-center'>
         <div className="flex space-x-4">
        <a href="https://youtube.com" className="text-2xl text-red-600">
          <FaYoutube size={40} />
        </a>
        <a href="https://facebook.com" className="text-2xl text-blue-600">
          <FaFacebook size={40}/>
        </a>
        <a href="https://instagram.com" className="text-2xl text-pink-600">
          <FaInstagram size={40}/>
        </a>
        <a href="https://telegram.org" className="text-2xl text-blue-500">
          <FaTelegram size={40}/>
        </a>
        <a href="https://twitter.com" className="text-2xl text-blue-400">
          <FaTwitter size={40}/>
        </a>
      </div>
    </div>
    </>
  );
};

export default ContactFormWithMap;
