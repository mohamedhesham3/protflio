import React from 'react';

const About = () => (
  <section id="about" className="bg-gray-900 text-gray-100 p-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p> a skilled MERN stack developer specializing in creating secure, high-quality web applications. My expertise includes MongoDB, Express.js, React.js, and Node.js, allowing me to deliver reliable and scalable solutions.</p>

      <div className="flex flex-wrap justify-center items-center mt-4">
        <img src='https://own-portfolio-2024.vercel.app/images/html.png' alt="HTML Logo" className="w-16 h-16 mr-4 mb-4" />
        <img src='https://own-portfolio-2024.vercel.app/images/css.png' alt="CSS Logo" className="w-16 h-16 mr-4 mb-4" />
        <img src='https://own-portfolio-2024.vercel.app/images/js.png' alt="JavaScript Logo" className="w-16 h-16 mr-4 mb-4" />
        <img src='https://own-portfolio-2024.vercel.app/images/tailwind.png' alt="Tailwind CSS Logo" className="w-16 h-16 mr-4 mb-4" />
        <img src='https://own-portfolio-2024.vercel.app/images/react.png' alt="React Logo" className="w-16 h-16 mr-4 mb-4" />
        <img src='https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' alt="Node.js Logo" className="w-16 h-16 mr-4 mb-4" />
        <img src='https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png' alt="Express.js Logo" className="w-16 h-16 mr-4 mb-4" />
        <img src='https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png' alt="MongoDB Logo" className="w-16 h-16 mb-4" />
      </div>
    </div>
  </section>
);

export default About;
