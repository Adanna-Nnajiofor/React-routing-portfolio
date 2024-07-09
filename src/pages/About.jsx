import React from "react";
import avatar from "../assets/images/FB_IMG_16575461399887317-removebg-preview.png";

const About = () => {
  return (
    <section className="bg-gray-200 text-black p-6 flex flex-col w-full h-full items-center lg:flex-row lg:items-start">
      <div className="m-6 w-full mt-6 flex flex-col lg:mt-10">
        <div className="w-auto py-4 text-center border-solid border-2 bg-gray-300 border-purple-600 ">
          <h1 className="font-extrabold  text-3xl ">ABOUT ME</h1>
        </div>
        <h2 className="py-6 px-4 text-2xl">
          I'm <span className="text-puruple font-bold">Adanna Nnajiofor,</span>{" "}
          Architect / Web Developer
        </h2>
        <p className="leading-9 text-xl px-4">
          Welcome to my corner of creativity! I'm Adanna, an architect and web
          developer with a passion for designing both physical and digital
          spaces. With a background in architecture, I thrive on bringing
          visions to life, crafting structures that not only stand tall but also
          tell captivating stories. Each project I undertake blends creativity
          with functionality, creating spaces that inspire and endure. In the
          realm of web development, I channel the same spirit of innovation and
          precision. From conceptualizing sleek user interfaces to coding
          elegant, efficient solutions, I am dedicated to building digital
          experiences that captivate and engage users. By merging my skills in
          architecture and web development, I offer a unique perspective on
          design and technology, striving to create seamless and immersive
          experiences in every project I undertake. Join me on this journey as
          we explore the intersection of architecture and technology, shaping
          the world around us one line of code and one blueprint at a time.
        </p>
      </div>
      <div className="flex flex-col m-6  border-purple-600 bg-purple-200 w-full h-full lg:w-1/2 rounded-xl shadow-md">
        <img className=" w-full h-full p-6" src={avatar} alt="Avatar" />
      </div>
    </section>
  );
};

export default About;
