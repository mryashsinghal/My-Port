import React from 'react';

// About Component
const About = () => {
  return (
    <div className=" h-full  bg-black overflow-hidden relative w-[92vw]">
      {/* Left Side: Bigger Half Circles */}
      <div className="flex flex-col items-center">
        <div className="h-[1400px] w-[1400px]  bg-[#b1c9cd] relative   animate-rotate1 ">
          <div className="h-[1400px] w-[1400px]  bg-[#222b2d] absolute   transform -translate-x-1/2">
              <div className="h-[1400px] w-[1400px]  bg-white  absolute  transform -translate-x-1/2">
              <div className="h-[1400px] w-[1400px] bg-[#4f6065] bg-[animated-text] absolute   transform -translate-x-1/2"></div>
              </div>
          </div>
        </div>
      </div>

      
      <div className="text-center text-white z-10 absolute top-10">
        <h2 className="text-6xl font-extrabold mb-28 mt-8 text-dark ">About Me</h2>
        <h1 className="text-3xl mb-4 z-1 p-9 ">
          Hello! I am a passionate<span className=' ml-2 animated-text'>web developer</span>  with a knack for creating interactive and user-friendly web applications. 
          My journey in coding has been exciting, and I constantly strive to improve my skills.
        </h1>
        <p className="text-2xl  font-semibold mt-8 ">
          I enjoy collaborating with others to bring ideas to life, and I'm always eager to learn new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
