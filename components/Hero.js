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
      {/* Floating Elements - responsive positions */}
      <div className="absolute top-10 left-4 sm:top-20 sm:left-10 animate-bounce">
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300" />
      </div>
      <div className="absolute top-24 right-6 sm:top-40 sm:right-20 animate-pulse">
        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
      </div>
      <div
        className="absolute bottom-20 left-6 sm:bottom-32 sm:left-20 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-300" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-2xl md:max-w-4xl mx-auto">
          <div className="mb-6 mt-8 sm:mb-8 sm:mt-10">
            <Image
              src="/aaa.jpg"
              alt="Profile"
              className="h-32 w-32 sm:h-52 sm:w-52 object-cover rounded-full mx-auto mb-4 sm:mb-6 border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              width={128}
              height={128}
              unoptimized
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Hello, I'm Shristi
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-8 font-light">
            Creative Designer & Developer
          </p>
          <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
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
