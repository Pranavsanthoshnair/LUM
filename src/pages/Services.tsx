import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'live-streaming',
      title: 'Live Streaming',
      description: 'Professional live streaming services for events, conferences, and performances with multi-camera setups and real-time editing.',
      image: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      features: [
        'Multi-camera live streaming setup',
        'Real-time switching and editing',
        'Custom graphics and overlays',
        'Live chat moderation',
        'Platform integration (YouTube, Twitch, Facebook, etc.)',
        'Post-event video editing and distribution'
      ]
    },
    {
      id: 'media-production',
      title: 'Media Production',
      description: 'Full-service video production including pre-production planning, filming, and post-production editing for commercials, corporate videos, and more.',
      image: 'https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      features: [
        'Concept development and scriptwriting',
        'Location scouting and casting',
        'Professional filming with high-end equipment',
        'Drone and aerial videography',
        'Post-production editing and color grading',
        'Sound design and music licensing'
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing services to boost your online presence, including social media management, content creation, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
      features: [
        'Social media strategy and management',
        'Content creation and curation',
        'SEO optimization and analytics',
        'Email marketing campaigns',
        'Paid advertising management',
        'Performance tracking and reporting'
      ]
    },
    {
      id: 'event-management',
      title: 'Event Management',
      description: 'Comprehensive event planning and execution services for corporate events, conferences, product launches, and special occasions.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      features: [
        'Event concept and theme development',
        'Venue selection and management',
        'Vendor coordination and logistics',
        'Technical production and AV setup',
        'On-site event management',
        'Post-event analysis and reporting'
      ]
    }
  ];

  return (
    <div className="bg-white" data-aos="fade-up">
      {/* Hero Section */}
      <div className="bg-primary py-16 md:py-24" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-slide-up">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-200">
            We offer a comprehensive range of media services to help you connect with your audience and achieve your goals.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-delay={index * 100}>
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-500 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-6 w-6 text-secondary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16" data-aos="fade-up" data-aos-offset="200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your project and how we can help bring your vision to life.
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

export default Services;
