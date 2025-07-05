import React from "react";
import { Palette, Code, Camera, Sparkles, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 95, icon: Palette },
    { name: "React Development", level: 88, icon: Code },
    { name: "Photography", level: 92, icon: Camera },
    { name: "Creative Direction", level: 90, icon: Sparkles },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Creative Soul with a Tech Heart
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate Sleeper who believes in the power of Sleep,
                functional Sleeps. With over 19 years of experience in the
                creative sleeping industry, I've had the pleasure of sleeping
                with amazing dreams and bringing their visions to life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not designing or coding, you can find me exploring new
                coffee shops, taking photos of sunset, or planning my next
                adventure. I believe that inspiration comes from everywhere, and
                I love incorporating that into my work.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <Coffee className="w-5 h-5 text-pink-500" />
                <span className="text-gray-600">
                  Fueled by coffee and creativity
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Skills & Expertise
              </h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-pink-500" />
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
