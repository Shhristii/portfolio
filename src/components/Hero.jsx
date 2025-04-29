import React from "react";
import hero from "../assets/ss.jpg";
const Hero = () => {
  return (
    <div className=" w-full h-screen justify-center items-center flex px-30">
      <div className="w-full space-x-15 flex justify-center items-center">
        <img
          className="h-96
      </div>
          w-96 object-cover rounded-full border-2"
          src={hero}
          alt="heroimg"
        />
        <div className="w-1/2 space-y-5">
          <h1 className="font-bold text-4xl"> SHRISTI BHATTARAI</h1>
          <h3 className="font-bold text-2xl"> A Bit About Me</h3>
          <p>
            I am a motivated and detail-oriented BCA (Bachelor of Computer
            Applications) student with a strong passion for full stack
            development. Skilled in both front-end and back-end technologies, I
            specialize in creating responsive, user-friendly web applications.
            My expertise includes HTML, CSS, JavaScript, React.js, Node.js,
            Express, and MongoDB. I am continually learning and staying up to
            date with emerging technologies to deliver efficient, scalable, and
            secure software solutions. I thrive in collaborative environments
            and am committed to building innovative digital experiences that
            solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
