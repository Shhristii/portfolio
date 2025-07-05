import React from "react";
import { Sparkles, Star, Heart } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-purple-100/20 to-rose-100/20"></div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Sparkles className="w-8 h-8 text-pink-300" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <Star className="w-6 h-6 text-purple-300" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <Heart className="w-10 h-10 text-rose-300" />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 mt-10">
            <Image
              src="/pp.jpg"
              alt="Profile"
              className="h-52 w-52 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              width={128}
              height={128}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Hello, I'm Shristi
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Creative Designer & Developer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, user-friendly designs that make
            people smile. I blend creativity with technology to bring ideas to
            life.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
