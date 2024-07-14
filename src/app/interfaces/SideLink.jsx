import { FaTwitter, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

export default function SideLink() {
  return (
    <div className="flex flex-col items-center gap-2 space-y-4  absolute z-10 dark:bg-black bg-white p-1">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={40} color="#1DA1F2" /> {/* Twitter Blue */}
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={40} color="#4267B2" /> {/* Facebook Blue */}
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} color="#C13584" /> {/* Instagram Gradient Pink */}
      </a>
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={40} color="#0088CC" /> {/* Telegram Blue */}
      </a>
    </div>
  );
}
