import React from "react";
import { FaApple, FaGooglePlay, FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-center items-center  p-4 space-x-4">
      {/* iOS App Store Button */}
      <button
        className="flex items-center space-x-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
        onClick={() => window.open("https://apps.apple.com", "_blank")}
      >
        <FaApple className="text-lg" />
        <span>iOS App</span>
      </button>

      {/* Google Play Store Button */}
      <button
        className="flex items-center space-x-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
        onClick={() => window.open("https://play.google.com/store", "_blank")}
      >
        <FaGooglePlay className="text-lg" />
        <span>Play Store</span>
      </button>

      {/* Website Button */}
      <button
        className="flex items-center space-x-2 px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-md"
        onClick={() => window.open("https://yourwebsite.com", "_blank")}
      >
        <FaGlobe className="text-lg" />
        <span>Website</span>
      </button>
    </header>
  );
};

export default Header;
