import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  // Fetch service details from the backend
  useEffect(() => {
    fetch(`/api/services/${id}`)
      .then((response) => response.json())
      .then((data) => setService(data))
      .catch((error) => console.error('Error fetching service details:', error));
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src={service.image} 
              alt={service.title} 
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x450'; // Fallback image
              }}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-lg text-gray-500 mb-6">{service.description}</p>
            <ul className="space-y-2 mb-6">
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Details</h3>
              <p><strong>Pricing:</strong> {service.details.pricing}</p>
              <p><strong>Equipment:</strong> {service.details.equipment}</p>
              <p><strong>Team:</strong> {service.details.team}</p>
              <h4 className="text-lg font-bold text-gray-900 mt-4">Testimonials</h4>
              <ul className="list-disc pl-6">
                {service.details.testimonials.map((testimonial, idx) => (
                  <li key={idx} className="text-gray-600">{testimonial}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;