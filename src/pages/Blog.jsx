import React from 'react';

const Blog = () => {
    const blogPosts = [
        {
            title: "My Journey in Frontend Development at AltSchool Africa / Enugu SME",
            date: "May 29, 2024",
            excerpt: "Follow my journey into the world of frontend development as I share insights, challenges, and lessons learned during my time at AltSchool Africa / Enugu SME.",
            slug: "my-journey-in-frontend-development-at-altschool-africa-enugu-sme",
            link: "https://adanna-nnajiofor.hashnode.dev/my-journey-in-frontend-development-at-altschool-africa-enugu-sme"
        },
        {
            title: "The Future of Architecture in the Digital Age",
            date: "May 25, 2024",
            excerpt: "Explore the intersection of architecture and technology and discover how digital tools are shaping the future of design.",
            slug: "future-of-architecture-digital-age",
            link: "https://adanna-nnajiofor.hashnode.dev/the-future-of-architecture"
        },
    ];

    return (
        <section id="blog" className="bg-gray-100 py-12 text-black flex flex-col p-6 w-full h-full items-center lg:flex-row    lg:items-start">
            <div className='p-6 w-full flex flex-col lg:sticky top-0 bottom-0'>
                <div className='py-4 text-center border-solid border-2 border-purple-600'>
                    <h1 className='font-extrabold text-3xl'>BLOG</h1>
                </div>
                <p className='py-6 text-xl leading-9 font-bold'>Welcome to our blog!</p>

                <p className=' text-xl leading-9 '>Welcome to our blog!
                    Here, we share insights, tips, and stories about architecture, web development, design trends, and much more. Our goal is to provide valuable content that inspires, educates, and informs our readers.

                    Whether you're a seasoned professional looking for industry updates or a newcomer eager to learn, our blog has something for everyone. Explore our latest posts below and join us on a journey of discovery and creativity.

                </p>
                <p className='py-6 text-xl leading-9 font-bold'>Happy reading!</p>

            </div>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-purple-200 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">{post.title}</a>
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                        <p className="text-lg">{post.excerpt}</p>
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
