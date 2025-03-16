import React from 'react';
import { Link } from 'react-router-dom';

const Esports = () => {
  const services = [
    {
      title: 'Tournament Broadcasting',
      description: 'Professional live streaming and broadcasting services for esports tournaments of all sizes.',
      icon: (
        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Player Spotlights',
      description: 'High-quality video production services to create compelling player profiles and team documentaries.',
      icon: (
        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Custom Overlays',
      description: 'Professionally designed stream overlays, animations, and graphics packages tailored to your brand.',
      icon: (
        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Technical Production',
      description: 'End-to-end technical production services including equipment rental, setup, and on-site technical support.',
      icon: (
        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const pastEvents = [
    {
      title: 'National Esports Championship',
      game: 'League of Legends',
      date: 'June 2023',
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      description: 'Provided complete production and broadcasting services for the national championship with over 100,000 concurrent viewers.',
    },
    {
      title: 'Regional Valorant Tournament',
      game: 'Valorant',
      date: 'April 2023',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Delivered high-quality streaming and technical production for a regional tournament featuring top teams from the area.',
    },
    {
      title: 'University Esports League',
      game: 'Multiple Games',
      date: 'February 2023',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Managed the broadcasting and production for a multi-game university league spanning several months with weekly matches.'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="opacity-30 w-full h-full object-cover"
            src="/api/placeholder/1170/658"
            alt="Esports arena"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Esports Production</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Professional broadcasting and production services for esports tournaments, leagues, and events of all sizes.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 py-3 px-8 rounded-md font-medium text-white shadow-md transition duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Esports Services</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We provide comprehensive production and broadcasting services tailored specifically for esports events.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-600 rounded-md p-3">
                      {service.icon}
                    </div>
                    <h3 className="ml-4 text-lg font-medium text-gray-900">{service.title}</h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Us for Your Esports Production
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                With years of experience in both traditional media production and esports broadcasting, we bring a unique perspective to your gaming events.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Gaming Industry Expertise</h3>
                    <p className="mt-2 text-gray-500">Our team includes avid gamers who understand the unique aspects of different games and what viewers want to see.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Broadcast-Quality Equipment</h3>
                    <p className="mt-2 text-gray-500">We use professional-grade equipment to ensure your tournament looks as good as any mainstream sports broadcast.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Scalable Solutions</h3>
                    <p className="mt-2 text-gray-500">Whether you're running a small local tournament or a major international event, we can scale our services to meet your needs and budget.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 max-h-96 overflow-hidden" data-aos="fade-left">
              <img
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Esports production setup"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = 'https://via.placeholder.com/800x600?text=Esports+Production';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Past Events Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Past Events</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Take a look at some of the esports events we've produced and broadcasted.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg flex flex-col" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={event.image}
                    alt={event.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(event.title)}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="mr-4">{event.game}</span>
                    <span>{event.date}</span>
                  </div>
                  <p className="mt-3 text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to level up your esports event?</span>
            <span className="block text-indigo-300">Contact us today for a consultation.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-800 bg-white hover:bg-gray-50"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esports;
