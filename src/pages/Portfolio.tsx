import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 'tech-conference',
      title: 'Annual Tech Conference',
      category: 'Live Streaming',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Live streaming and event production for a major tech industry conference with over 5,000 attendees.',
    },
    {
      id: 'brand-campaign',
      title: 'Corporate Brand Campaign',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1559223607-a43f990c095d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Comprehensive digital marketing campaign for a Fortune 500 company, resulting in a 40% increase in brand engagement.',
    },
    {
      id: 'esports-tournament',
      title: 'National Esports Tournament',
      category: 'Live Streaming',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      description: 'Complete production and streaming services for a major gaming competition with over 100,000 concurrent viewers.',
    },
    {
      id: 'product-launch',
      title: 'Tech Product Launch',
      category: 'Event Management',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Managed the launch event for a revolutionary tech product, including venue selection, staging, and technical production.',
    },
    {
      id: 'corporate-documentary',
      title: 'Corporate Documentary',
      category: 'Media Production',
      image: 'https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      description: 'Produced a documentary showcasing a company\'s 50-year history, including interviews with key stakeholders and archival footage.',
    },
    {
      id: 'music-festival',
      title: 'Summer Music Festival',
      category: 'Live Streaming',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Provided multi-stage live streaming services for a three-day music festival, reaching over 2 million viewers worldwide.',
    },
    {
      id: 'social-campaign',
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      description: 'Developed and executed a cross-platform social media campaign that increased client\'s follower base by 200% in three months.',
    },
    {
      id: 'charity-gala',
      title: 'Annual Charity Gala',
      category: 'Event Management',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Managed all aspects of a high-profile charity gala that raised over $2 million for cancer research.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Our Portfolio</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped clients achieve their goals through innovative media solutions.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Categories - For future implementation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-l-md">
                All Projects
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300">
                Live Streaming
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300">
                Media Production
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300">
                Digital Marketing
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-md">
                Event Management
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-white overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Link to={`/portfolio/${project.id}`} className="text-white hover:text-accent">
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-secondary/10 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Link to={`/portfolio/${project.id}`} className="hover:text-secondary">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
            Let's discuss how we can help bring your vision to life with our expertise in media production and digital marketing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
