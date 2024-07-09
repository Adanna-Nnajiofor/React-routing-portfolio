import React from "react";
import background from "../assets/images/background_image-removebg-preview.png";
import cvPdf from "../assets/pdfs/cv.pdf"; // Path to your CV PDF file
import portfolioPdf from "../assets/pdfs/portfolio.pdf"; // Path to your Portfolio PDF file

const Work = () => {
  const handleDownloadCV = () => {
    window.open(cvPdf); // Open the CV PDF in a new tab
  };

  const handleDownloadPortfolio = () => {
    window.open(portfolioPdf); // Open the Portfolio PDF in a new tab
  };

  return (
    <section className="bg-gray-200 text-black flex flex-col p-6 w-full h-full items-center lg:flex-row lg:items-start">
      <div className="p-6 w-full flex flex-col lg:sticky top-0 bottom-0">
        <div className="py-4 text-center border-solid border-2 bg-gray-300 border-purple-600">
          <h1 className="font-extrabold text-3xl">WORK</h1>
        </div>
        <p className="py-8 text-xl leading-9">
          As an architect and web developer, my work spans both physical and
          digital realms. Each project is a testament to my commitment to
          excellence and innovation.
          <br />
          Explore a collection of my architectural and web development projects,
          each crafted with precision and passion. From innovative architectural
          designs that shape physical spaces to dynamic web solutions that
          redefine digital experiences, my work reflects a dedication to
          creativity, functionality, and excellence. Dive in and discover how I
          blend the art of architecture with the science of technology to bring
          visions to life.
        </p>
        <img className="object-contain p-6" src={background} alt="Avatar" />
      </div>
      <div className="my-6 w-full flex flex-col">
        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold">WEB DEVELOPMENT</h1>
          <p className="py-4 leading-9 text-xl">
            In the digital age, a strong online presence is essential. As a web
            developer, I specialize in creating websites that are not only
            visually appealing but also highly functional and user-friendly.
            <br />
            From crafting sleek, responsive designs to implementing robust
            back-end solutions, my goal is to build digital experiences that
            captivate and engage users. Whether it's a personal blog, an
            e-commerce platform, or a corporate site, I ensure that each project
            is tailored to meet the unique needs of my clients.
            <br />
            By combining cutting-edge technology with a keen eye for detail, I
            strive to deliver web solutions that not only look great but also
            perform flawlessly.
          </p>
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row md:flex-row lg:flex-row  ">
            <a
              href="https://github.com/Adanna-Nnajiofor?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-600 text-white px-4 py-3 rounded-md mt-6 w-auto hover:text-black">
                VIEW MY WORKS
              </button>
            </a>
            <button
              className="bg-purple-600 text-white px-4 py-3 rounded-md  mt-6 w-auto hover:text-black"
              onClick={handleDownloadCV}
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="bg-purple-200 mx-4 my-10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold">ARCHITECTURAL DESIGNS</h1>
          <p className="py-4 leading-9 text-xl">
            My architectural work is driven by a passion for creating spaces
            that inspire and endure. With a focus on blending aesthetics with
            functionality, I design structures that are not only visually
            striking but also practical and sustainable. Each project is an
            opportunity to tell a unique story through thoughtful design and
            meticulous attention to detail. Whether it's residential,
            commercial, or public spaces, my goal is to craft environments that
            enhance the lives of those who inhabit them.
          </p>
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row md:flex-row lg:flex-row ">
            <a
              href="https://wa.me/c/2348160507179"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-600 text-white px-4 py-3 rounded-md mt-6 w-auto hover:text-black">
                VIEW MY WORKS
              </button>
            </a>
            <button
              className="bg-purple-600 text-white px-4 py-3 rounded-md mt-6 w-auto hover:text-black"
              onClick={handleDownloadCV}
            >
              DOWNLOAD CV
            </button>
            <button
              className="bg-purple-600 text-white px-4 py-3 rounded-md mt-6 w-auto hover:text-black"
              onClick={handleDownloadPortfolio}
            >
              DOWNLOAD PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
