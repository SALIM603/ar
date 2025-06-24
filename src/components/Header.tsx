import React from 'react';
import { Home, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Tiles & Sanitary</h1>
              <p className="text-sm text-gray-600">AI Interior Design</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#upload" className="text-gray-700 hover:text-blue-600 transition-colors">AI Design</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Us</span>
            </a>
            <a href="mailto:info@tilessanitary.com" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;