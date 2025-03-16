import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0 overflow-hidden hero-image-container">
          <img
            className="opacity-30"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Studio equipment"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">PixelPlay Studios</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Where Every Pixel Becomes A Story
          </p>
          <p className="mt-2 text-lg text-gray-300">
            Bringing your creative vision to life through innovative media solutions.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-accent hover:bg-accent/90 py-3 px-8 rounded-md font-medium text-white shadow-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We offer a comprehensive range of media services to meet your creative needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
            {/* Live Streaming */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-secondary rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">Live Streaming</h3>
                </div>
                <div className="mt-4 text-gray-500">
                  Professional live streaming services for events, conferences, and performances with multi-camera setups and real-time editing.
                </div>
                <div className="mt-6">
                  <Link to="/services/live-streaming" className="text-secondary hover:text-secondary/80 font-medium">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Media Production */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-secondary rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">Media Production</h3>
                </div>
                <div className="mt-4 text-gray-500">
                  Full-service video production including pre-production planning, filming, and post-production editing for commercials, corporate videos, and more.
                </div>
                <div className="mt-6">
                  <Link to="/services/media-production" className="text-secondary hover:text-secondary/80 font-medium">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-secondary rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">Digital Marketing</h3>
                </div>
                <div className="mt-4 text-gray-500">
                  Strategic digital marketing services to boost your online presence, including social media management, content creation, and SEO optimization.
                </div>
                <div className="mt-6">
                  <Link to="/services/digital-marketing" className="text-secondary hover:text-secondary/80 font-medium">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/services" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium">
              View all services
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Take a look at some of our recent work that showcases our expertise and creativity.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 responsive-grid" data-aos="fade-up" data-aos-delay="200">
            {/* Project 1 */}
            <div className="group relative bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <div className="relative card-image-container">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Annual Tech Conference"
                  className="group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link to="/portfolio/tech-conference">
                    <span className="absolute inset-0" />
                    Annual Tech Conference
                  </Link>
                </h3>
                <p className="text-base text-gray-500">Live streaming and event production for a major tech industry conference.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <div className="relative card-image-container">
                <img
                  src="https://images.unsplash.com/photo-1559223607-a43f990c095d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Corporate Brand Campaign"
                  className="group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link to="/portfolio/brand-campaign">
                    <span className="absolute inset-0" />
                    Corporate Brand Campaign
                  </Link>
                </h3>
                <p className="text-base text-gray-500">Comprehensive digital marketing campaign for a Fortune 500 company.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <div className="relative card-image-container">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="Esports Tournament"
                  className="group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link to="/portfolio/esports-tournament">
                    <span className="absolute inset-0" />
                    National Esports Tournament
                  </Link>
                </h3>
                <p className="text-base text-gray-500">Complete production and streaming services for a major gaming competition.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/portfolio" className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium">
              View all projects
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to bring your vision to life?</span>
            <span className="block text-accent">Get in touch with us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-white hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
