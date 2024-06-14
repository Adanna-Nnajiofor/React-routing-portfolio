import React from "react";
import { Link } from "react-router-dom";
import web from "../assets/images/web photo.jpg";

const Home = () => {
  return (
    <section className="bg-purple-100 p-6 text-black flex flex-col w-full h-full items-center lg:items-start">
      {/* Hero Section */}
      <div className="w-full h-full bg-white p-8 flex flex-col lg:flex-row shadow-lg lg:justify-between lg:items-center">
        <div className="p-4 lg:w-1/2">
          <h2 className="text-2xl">HI THERE!</h2>
          <h1 className="text-4xl py-6 font-extrabold">
            I'M <span className="text-purple-600">ADANNA</span>
          </h1>
          <div className="  bg-purple-600 text-2xl text-white text-center p-4 mt-4  lg:mt-8 ">
            <h6>ARCHITECT | WEB DEVELOPER</h6>
          </div>
          <p className="pt-3 pb-3 mt-8 leading-9 text-xl">
            Welcome to the world of Adanna, where architectural brilliance meets
            web development expertise. As an architect and web developer, I am
            passionate about designing spaces and creating digital experiences
            that inspire and captivate. Whether it's through innovative
            architectural designs or cutting-edge web solutions, my goal is to
            bring your vision to life with creativity and precision. Let's
            embark on a journey of transforming ideas into reality together.
          </p>
          <Link to="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md mt-10 w-44 hover:text-black">
              LET'S TALK
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 m-8 lg:items-end">
          <img className="object-contain " src={web} alt="Avatar" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* About Section */}
        <div className="w-full  bg-white p-8 mt-12 shadow-lg lg:mr-3">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I am an experienced architect and web developer with a passion for
            creating spaces and digital experiences that are both functional and
            aesthetically pleasing. With a background in architectural design
            and web development, I bring a unique blend of skills to every
            project.
          </p>
          <Link to="/about">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black">
              Learn More
            </button>
          </Link>
        </div>

        {/* Services Overview */}
        <div className="w-full bg-white p-8 mt-12 shadow-lg lg:ml-3">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-lg mb-4">
            Explore the wide range of services I offer, from architectural
            design to web development. Each service is tailored to meet your
            specific needs and bring your vision to life.
          </p>
          <Link to="/services">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Portfolio Preview */}
        <div className="w-full  bg-white p-8 mt-12 shadow-lg lg:mr-3">
          <h2 className="text-3xl font-bold mb-4">My Work</h2>
          <p className="text-lg mb-4">
            Take a look at some of my recent projects, showcasing my expertise
            in both architectural design and web development.
          </p>
          <Link to="/work">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black">
              View Portfolio
            </button>
          </Link>
        </div>

        {/* Contact CTA */}
        <div className="w-full  bg-white p-8 mt-12 shadow-lg lg:ml-3">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            I look forward to connecting with you and exploring how we can bring
            your ideas to life. Whether you have a project in mind or just want
            to say hello, don't hesitate to reach out.
          </p>
          <Link to="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
