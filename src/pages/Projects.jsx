import React, { useEffect, useRef } from 'react';

// Sample projects with description and image
const projects = [
  {
    title: 'Project 1',
    description: 'This is a detailed description of Project 1.',
    image: 'https://via.placeholder.com/150', // Replace with your actual image URL
  },
  {
    title: 'Project 2',
    description: 'This is a detailed description of Project 2.',
    image: 'https://via.placeholder.com/150', // Replace with your actual image URL
  },
  {
    title: 'Project 3',
    description: 'This is a detailed description of Project 3.',
    image: 'https://via.placeholder.com/150', // Replace with your actual image URL
  },
  {
    title: 'Project 4',
    description: 'This is a detailed description of Project 4.',
    image: 'https://via.placeholder.com/150', // Replace with your actual image URL
  },
];

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-grow');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center py-12 min-w-full overflow-hidden">
      {/* Line representing the tree branch */}
      <div className="absolute w-1 bg-gray-500 h-full left-1/2 transform -translate-x-1/2"></div>
      
      {/* Project Cards */}
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (projectRefs.current[index] = el)}
          className="w-[300px] h-[300px] bg-light text-gray-900 p-6 m-4 rounded-lg opacity-0 transform transition-transform duration-700 ease-in-out"
        >
          <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded mb-4" />
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
