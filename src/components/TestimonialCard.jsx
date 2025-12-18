// src/components/TestimonialCard.jsx
import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-green-600 font-bold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-green-600 text-sm">{testimonial.country}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <FaQuoteLeft className="text-green-200 w-6 h-6 mb-3" />
        <p className="text-gray-700 italic">"{testimonial.text}"</p>
      </div>
      
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;