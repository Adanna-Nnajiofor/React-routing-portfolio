import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";



const Contact = () => {
  const faqs = [
    {
      question: "How do I get started with your services?",
      answer: "You can get started by contacting us through the contact form or giving us a call. We'll discuss your requirements and provide you with a customized solution.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is based on the scope and complexity of the project. We offer competitive rates and flexible pricing options to accommodate your budget.",
    },
  ];


  return (
    <section className="bg-gray-100 text-black flex flex-col p-6 w-full h-full items-center lg:flex-row lg:items-start">
      <div className='p-6 w-full flex flex-col lg:sticky top-0 bottom-0'>
        <div className='py-4 text-center border-solid border-2 border-purple-600'>
          <h1 className='font-extrabold text-3xl'>CONTACT</h1>
        </div>
        <p className='py-8 text-xl leading-9'>Whether you have a question, want to start a project, or just want to
          connect, we'd love to hear from you. Reach out to us using the form
          below or contact us directly via email or phone.
        </p>
        <p className="text-xl mb-8 leading-9">
          We look forward to connecting with you and exploring how we can bring your ideas to life. Whether you have a project in mind, need more information about our services, or just want to say hello, don't hesitate to reach out. Let's create something amazing together!
        </p>
        <div className='bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg'>
          <form
            action="#"
            method="POST"
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-900 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='my-4 p-6 w-full flex flex-col lg:mt-0'>
        <div className='bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg'>
          <div>
            <p className="text-xl font-semibold">Contact Information</p>
            <p className="text-gray-600 text-lg">
              Feel free to reach out to us via email or phone.
            </p>
          </div>
          <div className='pt-2'>
            <p className="text-lg font-semibold">Email</p>
            <p className="text-purple-600 text-lg">adanna.nnajiofor@gmail.com</p>
          </div>
          <div className='pt-2'>
            <p className="text-lg font-semibold">Phone</p>
            <p className="text-purple-600 text-lg">+234 08160507179 </p>
          </div>

          <div className="flex mt-6 space-x-4">
            <a href="https://twitter.com/AdannaNnajiofor" className="text-gray-600 hover:text-purple-600" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle size={30} />
            </a>
            <a href="https://facebook.com/AdannaNnajiofor" className="text-gray-600 hover:text-purple-600" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com/Damzysparkle" className="text-gray-600 hover:text-purple-600" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram size={30} />
            </a>
            <a href="https://linkedin.com/in/AdannaNnajiofor" className="text-gray-600 hover:text-purple-600" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={30} />
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
       
        <div id="faq" className="bg-purple-200 py-12 px-6 mt-8 rounded-xl shadow-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
