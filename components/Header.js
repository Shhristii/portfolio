'use client'
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Shristi
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">About</a>
          </nav>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-pink-500"></div>
              <div className="w-full h-0.5 bg-pink-500"></div>
              <div className="w-full h-0.5 bg-pink-500"></div>
            </div>
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#home" className="block py-2 text-gray-700 hover:text-pink-500 transition-colors">Home</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-pink-500 transition-colors">About</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 