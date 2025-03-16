import React, { useState } from 'react';

// Define an interface for the job object
interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const JoinUs = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: '',
    coverLetter: '',
  });

  // Define the jobOpenings array with the Job type
  const jobOpenings: Job[] = [
    {
      id: 'video-editor',
      title: 'Video Editor',
      department: 'Media Production',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      description: 'We are looking for a skilled Video Editor to join our Media Production team. The ideal candidate will have experience in editing various types of video content, including commercials, corporate videos, and social media content.',
      responsibilities: [
        'Edit and assemble recorded raw material into suitable finished products',
        'Trim footage segments and put together the sequence of the film',
        'Create rough and final cuts',
        'Apply color correction, sound effects, and visual effects',
        'Ensure logical sequencing and smooth running',
        'Collaborate with production team and clients to understand project requirements',
      ],
      requirements: [
        'Proven work experience as a Video Editor',
        'Solid experience with digital technology and editing software packages (e.g., Adobe Premiere Pro, Final Cut Pro, After Effects)',
        'Strong portfolio demonstrating editing skills',
        'Creative mind and storytelling skills',
        'Good time management skills',
        'BS degree in film studies, cinematography, or related field is a plus',
      ],
    },
    {
      id: 'social-media-manager',
      title: 'Social Media Manager',
      department: 'Digital Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are seeking a creative and analytical Social Media Manager to develop and implement our social media strategy. You will be responsible for creating engaging content, managing our social media presence, and growing our online community.',
      responsibilities: [
        'Develop and implement social media strategy to align with business goals',
        'Create engaging text, image, and video content',
        'Manage and oversee social media accounts',
        'Measure the success of social media campaigns',
        'Stay up-to-date with the latest social media best practices and technologies',
        'Collaborate with Marketing, Content, and Design teams',
      ],
      requirements: [
        'Proven work experience as a Social Media Manager',
        'Experience in content creation and management for major social media platforms',
        'Knowledge of social media analytics tools',
        'Excellent copywriting and communication skills',
        'Ability to understand and interpret social media metrics',
        'Bachelor\'s degree in Marketing, Communications, or related field preferred',
      ],
    },
    {
      id: 'event-coordinator',
      title: 'Event Coordinator',
      department: 'Event Management',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'We are looking for an organized and detail-oriented Event Coordinator to join our Event Management team. The successful candidate will be responsible for planning, organizing, and executing events from conception to completion.',
      responsibilities: [
        'Plan and coordinate all aspects of events, including venue selection, catering, entertainment, and technical requirements',
        'Develop event budgets and ensure they are adhered to',
        'Coordinate with clients to understand their requirements and expectations',
        'Negotiate with vendors and suppliers to secure the best deals',
        'Manage event logistics, including registration and attendee tracking',
        'Conduct post-event evaluations to determine success and areas for improvement',
      ],
      requirements: [
        'Proven experience as an Event Coordinator or similar role',
        'Strong organizational and planning skills',
        'Excellent communication and negotiation abilities',
        'Problem-solving skills and ability to think on your feet',
        'Proficiency in MS Office and event management software',
        'Bachelor\'s degree in Event Management, Hospitality, or related field preferred',
      ],
    },
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a backend service here
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: '',
      coverLetter: '',
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Join Our Team</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our creative and dynamic team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => handleTabChange('openings')}
                className={`${activeTab === 'openings' ? 'border-secondary text-secondary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Current Openings
              </button>
              <button
                onClick={() => handleTabChange('apply')}
                className={`${activeTab === 'apply' ? 'border-secondary text-secondary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Apply Now
              </button>
              <button
                onClick={() => handleTabChange('culture')}
                className={`${activeTab === 'culture' ? 'border-secondary text-secondary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Our Culture
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {/* Current Openings */}
            {activeTab === 'openings' && (
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Current Job Openings</h2>
                <p className="mt-4 text-lg text-gray-500 max-w-3xl">
                  Explore our current opportunities and find a role that matches your skills and passion.
                </p>

                <div className="mt-12 space-y-8">
                  {jobOpenings.map((job) => (
                    <div key={job.id} className="bg-white shadow overflow-hidden rounded-lg">
                      <div className="px-6 py-5 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                            {job.type}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="mr-4">{job.department}</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="px-6 py-5">
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Responsibilities:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {job.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {job.requirements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-6">
                          <button
                            onClick={() => {
                              handleTabChange('apply');
                              setFormData(prev => ({ ...prev, position: job.title }));
                            }}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                          >
                            Apply for this position
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Apply Now */}
            {activeTab === 'apply' && (
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Apply Now</h2>
                <p className="mt-4 text-lg text-gray-500 max-w-3xl mb-8">
                  Fill out the form below to apply for a position at PixelPlay Studios. We'll review your application and get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                      >
                        <option value="">Select a position</option>
                        {jobOpenings.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                      rows={4}
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                      rows={4}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Our Culture */}
            {activeTab === 'culture' && (
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Our Culture</h2>
                <p className="mt-4 text-lg text-gray-500 max-w-3xl">
                  At PixelPlay Studios, we believe in fostering a creative, inclusive, and collaborative environment where everyone can thrive.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;