import React from 'react';
import profile from '../src/assets/Screenshot_11.png';

const Hero = () => (
  <section className="bg-gray-900 text-gray-100 p-8">
    <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">Hello, I'm Mohamed Hesham</h1>
        <p className="text-2xl mb-4">Fullstack Web Developer</p>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src={profile} alt="Mohamed" className="w-48 h-48 rounded-full object-cover shadow-lg" />
      </div>
    </div>
  </section>
);

export default Hero;
