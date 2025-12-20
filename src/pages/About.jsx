// src/pages/About.jsx
import React from 'react';
import { FaHandsHelping, FaHeart, FaUsers, FaGlobeAfrica, FaAward, FaShieldAlt } from 'react-icons/fa';

const About = () => {

  const milestones = [
    { year: "2021", event: "Cile International Volunteering founded", description: "Started with 2 volunteers in a single community" },
    { year: "2022", event: "Expanded to multiple programs", description: "Added healthcare and environmental conservation projects" },
    { year: "2023", event: "Safari tours integration", description: "Began offering safari packages to volunteers" },
    { year: "2024", event: "Digital transformation", description: "Gained an authoritative online presence" },
    { year: "2025", event: "500+ volunteers milestone", description: "Hosted volunteers from 30+ countries worldwide" }
  ];

  const values = [
    {
      icon: <FaHeart className="w-10 h-10" />,
      title: "Community First",
      description: "We prioritize community needs and ensure our programs create sustainable impact."
    },
    {
      icon: <FaUsers className="w-10 h-10" />,
      title: "Cultural Exchange",
      description: "We believe in mutual learning and respect between volunteers and local communities."
    },
    {
      icon: <FaShieldAlt className="w-10 h-10" />,
      title: "Safety & Support",
      description: "24/7 support, comprehensive orientation, and secure accommodations for all volunteers."
    },
    {
      icon: <FaGlobeAfrica className="w-10 h-10" />,
      title: "Sustainable Tourism",
      description: "Eco-friendly practices and responsible tourism in all our safari programs."
    },
    {
      icon: <FaHandsHelping className="w-10 h-10" />,
      title: "Authentic Experience",
      description: "Real immersion in Kenyan life, not just tourist activities."
    },
    {
      icon: <FaAward className="w-10 h-10" />,
      title: "Excellence",
      description: "High-quality programs with continuous improvement based on volunteer feedback."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-700 to-green-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Our Story & Mission</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Connecting the world through meaningful volunteer work and authentic Kenyan experiences
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Cile International Volunteering?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                Founded by Nelima, a passionate Kenyan community leader, our organization was born from a simple vision: 
                to create meaningful connections between international volunteers and Kenyan communities while ensuring 
                authentic cultural exchange and sustainable impact.
              </p>
              <p className="text-xl text-gray-600">
                What started as a small initiative hosting a few volunteers in local villages has grown into a 
                comprehensive volunteering experience that combines community work with unforgettable safari adventures.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-4">
                To provide transformative volunteering experiences that create sustainable impact in Kenyan communities 
                while offering international volunteers authentic cultural immersion and personal growth opportunities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span>Empower local communities through sustainable projects</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span>Foster cross-cultural understanding and exchange</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span>Provide safe, meaningful, and educational experiences</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 mb-4">
                To be the leading platform for authentic volunteering experiences in Kenya, recognized for our 
                commitment to community development, cultural preservation, and responsible tourism.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span>Bridge cultures through meaningful interactions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span>Promote sustainable development in rural communities</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span>Create lifelong ambassadors for Kenyan culture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <div className="text-green-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From humble beginnings to impacting thousands of lives</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Year marker */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-green-600 rounded-full border-4 border-white z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-green-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}


      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90">Making a difference together</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">International Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">30+</div>
              <p className="text-lg">Countries Represented</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Community Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-lg">Safari Experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Safety & Support</h2>
            <p className="text-xl text-gray-600">Comprehensive care throughout your journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Emergency Support</h3>
              <p className="text-gray-600">Round-the-clock local support team and emergency contact system</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Safety Orientation</h3>
              <p className="text-gray-600">Comprehensive orientation covering health, safety, and cultural norms</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vetted Accommodations</h3>
              <p className="text-gray-600">Carefully selected homestays and volunteer houses with regular inspections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of volunteers who have experienced authentic Kenya through meaningful work and unforgettable adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
              Apply Now
            </button> */}
            <a href='/contact' className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;