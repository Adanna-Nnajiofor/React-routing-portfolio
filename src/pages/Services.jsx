import React from "react";

const Services = () => {
  return (
    <section className="bg-gray-200 text-black flex flex-col p-6 w-full h-full items-center lg:flex-row lg:items-start">
      <div className="p-6 w-full flex flex-col lg:sticky top-0 bottom-0">
        <div className="py-4 text-center border-solid border-2 bg-gray-300 border-purple-600">
          <h1 className="font-extrabold text-3xl">SERVICES</h1>
        </div>
        <p className="py-8 text-xl leading-9">
          {" "}
          Our services are designed to bridge the gap between innovative design
          and practical implementation. With a unique blend of architectural
          expertise and web development proficiency, we offer a comprehensive
          range of services that cater to both physical and digital spaces.
          Whether you're looking to transform your living environment or create
          a compelling online presence, our team is dedicated to bringing your
          vision to life with precision, creativity, and a commitment to
          excellence.
        </p>
        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold">WHY CHOOSE US</h1>
          <ul className="list-disc p-4 leading-9 text-xl">
            <li>
              Experience: With years of experience in both architecture and web
              development, we bring a unique perspective to every project.
            </li>
            <li>
              Innovation: Our innovative approach ensures that your projects
              stand out from the crowd and meet the evolving needs of your
              audience.
            </li>
            <li>
              Client-Centric: We prioritize open communication and collaboration
              to ensure that we exceed your expectations and deliver results
              that align with your vision.
            </li>
            <li>
              Quality Assurance: Our commitment to quality ensures that every
              project is executed with precision and attention to detail,
              delivering exceptional results every time.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-4 p-6 w-full flex flex-col lg:mt-0">
        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold">WEB DEVELOPMENT SERVICES</h1>
          <p className="pt-8 text-xl leading-9">
            Build a strong online presence with custom web development solutions
            tailored to meet your business goals and engage your audience.
          </p>
          <ul className="list-disc p-4 leading-9 text-xl">
            <li>
              Website Design: Modern and responsive website design tailored to
              your brand identity and user experience goals.
            </li>
            <li>
              Web Development: Custom web development solutions using the latest
              technologies to ensure performance, security, and scalability.
            </li>
            <li>
              E-commerce Solutions: Robust e-commerce platforms to help you sell
              products and services online seamlessly.
            </li>
            <li>
              Content Management Systems (CMS): Implementation of user-friendly
              CMS platforms like WordPress for easy content management and
              updates.
            </li>
          </ul>
        </div>
        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold">ARCHITECTURAL SERVICES</h1>
          <p className="pt-8 text-xl leading-9">
            Transform your living and working spaces with innovative and
            functional architectural designs that reflect your vision and
            lifestyle.
          </p>
          <ul className="list-disc p-4 leading-9 text-xl">
            <li>
              Custom Home Design: Tailored architectural designs for residential
              properties, reflecting your unique style and requirements.
            </li>
            <li>
              Commercial Spaces: Innovative designs for office buildings, retail
              spaces, and other commercial properties to enhance functionality
              and appeal.
            </li>
            <li>
              Interior Design: Comprehensive interior design solutions to bring
              your spaces to life, from concept to execution.
            </li>
            <li>
              Renovation & Restoration: Expert renovation and restoration
              services to breathe new life into existing structures while
              preserving their original charm.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
