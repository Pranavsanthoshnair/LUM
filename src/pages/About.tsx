const About = () => {
  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Jane has over 15 years of experience in media production and has worked with major networks before founding PixelPlay Studios.',
    },
    {
      name: 'Michael Johnson',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Michael oversees all technical aspects of our productions, bringing 12 years of broadcast engineering expertise.',
    },
    {
      name: 'Sarah Williams',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      bio: 'Sarah leads our creative team with her innovative vision and background in film and digital media production.',
    },
    {
      name: 'David Chen',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'David brings his digital marketing expertise to help clients maximize their online presence and reach.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">About PixelPlay Studios</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate creatives and technical experts dedicated to bringing your vision to life.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Founded in 2015, PixelPlay Studios began as a small team with a big vision: to create innovative media solutions that help businesses and individuals tell their stories effectively.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                What started as a boutique live streaming service has grown into a full-service media production company, offering everything from event coverage to digital marketing campaigns.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Today, we're proud to work with clients ranging from startups to Fortune 500 companies, helping them connect with their audiences through compelling visual storytelling.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 max-h-[400px] overflow-hidden">
              <img
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission & Values</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We're guided by a commitment to excellence and innovation in everything we do.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
            {/* Mission */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-500">
                  To empower businesses and individuals with cutting-edge media solutions that elevate their brand, engage their audience, and drive meaningful results.
                </p>
                <p className="mt-4 text-gray-500">
                  We believe in the power of visual storytelling to connect, inspire, and transform. Our mission is to harness that power for our clients, helping them stand out in a crowded digital landscape.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex">
                    <svg className="h-6 w-6 text-secondary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Excellence:</strong> We strive for the highest quality in every project we undertake.</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-secondary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Innovation:</strong> We embrace new technologies and creative approaches to solve problems.</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-secondary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Integrity:</strong> We operate with honesty, transparency, and ethical standards.</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-secondary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Collaboration:</strong> We believe in the power of teamwork and partnership with our clients.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Our talented team brings together diverse expertise in media production, technology, and creative storytelling.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover object-center" src={member.image} alt={member.name} />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-secondary font-medium">{member.role}</p>
                  <p className="mt-3 text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
