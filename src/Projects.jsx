import React from 'react';
import project1 from '../src/assets/222 00_00_00-00_00_30.gif';
import project2 from '../src/assets/dqwdqw 00_00_00-00_00_30.gif';
import project3 from '../src/assets/Screenshot_5.png';

const projects = [
  { title: 'E-commerce', link: "https://ecommerce-slub-es9l9rz3n-mohamedds-projects.vercel.app/", repo: "https://github.com/mohamedhesham3/ecommerce", description: 'fullstack E-commerce website', image: project2 },
  { title: 'twitter', link: "https://twittermernstack.vercel.app/register", repo: "https://github.com/mohamedhesham3/twittermernstack", description: 'fullstack twitter clone', image: project1 },
  { title: 'Admindashboard', link: "https://admindashboard-7wtc1h2aw-mohamedds-projects.vercel.app/", repo: "https://github.com/mohamedhesham3/Admindashboard", description: 'Admin dashboard (frontend)', image: project3 },
];

const Projects = () => (
  <section id="projects" className="bg-gray-900 text-gray-100 p-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-100 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex mt-4">
              <a href={project.link} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600" target="_blank" rel="noopener noreferrer">Open Project</a>
              <a href={project.repo} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
