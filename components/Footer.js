import React from "react";
import { Heart, Instagram, Linkedin, Github, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-8 h-8" />
              <span className="text-2xl font-bold">Shristi</span>
            </div>
            <p className="text-pink-100 mb-6">
              Creating beautiful experiences, one pixel at a time.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                target="_blank"
                href="https://www.instagram.com/shre_esty_/"
                className="text-pink-100 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="https://www.github.com/Shhristii/"
                className="text-pink-100 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/bhattarai.aarci.9"
                target="_blank"
              >
                <Facebook className="w-6 h-6 text-pink-100 hover:text-white transition-colors" />
              </a>
            </div>
            <div className="border-t border-pink-400 pt-8">
              <p className="text-pink-100 text-sm">
                © 2025 Shristi. Made with 💕 and lots of coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
