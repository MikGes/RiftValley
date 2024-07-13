import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-t-gray-300 pt-2">
        <div>
          <h3 className="font-bold mb-2">Our social media Links</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-gray-300" color='#4267B2' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-300" color='#1DA1F2' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-300" color='#C13584'/>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl hover:text-gray-300 text-red-600" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact us</h3>
          <p>P.O. Box: 12916/22998</p>
          <p>Tel.: +251116478382 / +251116478404 / +251165617203 / +251165617204</p>
          <p>Fax.: +251116478383</p>
          <p>Email: riftvalley@ethionet.et or berhabu@yahoo.com</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <p>Community Support</p>
          <p>Community development</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <p>Call us</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="container mx-auto text-center mt-8 border-t border-gray-300 pt-4">
        <p>©2024 All Rights Reserved By Rift Valley Children and Women Development Organization (RCWDO).</p>
      </div>
    </footer>
  );
};

export default Footer;
