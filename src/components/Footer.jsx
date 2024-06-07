import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Adanna. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;