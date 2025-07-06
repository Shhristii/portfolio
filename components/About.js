import React from "react";
import { Laptop, Code, BookOpen, Sparkles, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML, CSS, JS", level: 90, icon: Code },
    { name: "React Development", level: 80, icon: Laptop },
    { name: "Responsive Design", level: 85, icon: Sparkles },
    { name: "Version Control (Git)", level: 75, icon: BookOpen },
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
                Aspiring Frontend Developer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a BCA student with a deep interest in web development,
                especially frontend technologies. I enjoy crafting clean,
                user-friendly interfaces that bring ideas to life in the browser.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey started with HTML and CSS, but quickly grew into
                JavaScript and React. I love learning new tools and constantly
                improving my skills through projects, tutorials, and online
                communities.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <Coffee className="w-5 h-5 text-pink-500" />
                <span className="text-gray-600">
                  Fueled by curiosity and coffee
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Skills & Learning Progress
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
