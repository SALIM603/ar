import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Tiles & Sanitary</h3>
                <p className="text-gray-400">AI Interior Design</p>
              </div>
            </div>
            
            <p className="text-gray-400">
              Transform your space with our premium tiles and sanitary products, 
              powered by cutting-edge AI technology.
            </p>
            
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#upload" className="text-gray-400 hover:text-white transition-colors">AI Design</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Floor Tiles</span></li>
              <li><span className="text-gray-400">Wall Tiles</span></li>
              <li><span className="text-gray-400">Roof Tiles</span></li>
              <li><span className="text-gray-400">Sanitary Products</span></li>
              <li><span className="text-gray-400">Bathroom Accessories</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@tilessanitary.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  123 Tiles Street,<br />
                  Design District,<br />
                  City - 123456
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Tiles & Sanitary AI Interior Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;