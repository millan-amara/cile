// src/pages/Contact.jsx
import React, { useState } from 'react';
import { BsBank } from 'react-icons/bs';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaUser, FaUsers } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { Heart, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    program: '',
    message: ''
  });

  const programs = [
    'Education & Teaching',
    'Healthcare Support',
    'Sustainable Farming',
    'Community Development',
    'Environmental Conservation',
    'Women Empowerment',
    'Maasai Mara Safari',
    'Tsavo Safari',
    'Wasini Island',
    'Secret Beach',
    'African Pool',
    'Combined Package'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your inquiry has been submitted. We'll contact you within 24 hours.`);

    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      program: '',
      message: ''
    });
  };

  // WhatsApp configuration
  const whatsappNumber = '+254796667249';
  const whatsappMessage = 'Hello Cile International! I have a question about your volunteer programs.';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+254 796 667 249", "+254 796 667 249"],
      subtitle: "Available 24/7"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@cilevolunteering.org", "bookings@cilevolunteering.org"],
      subtitle: "Response within 24 hours"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+254 796 667 249"],
      subtitle: "Quick responses"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Nairobi Office: Ngong Road", "Coast Office: Diani Beach"],
      subtitle: "By appointment only"
    }
  ];

  const faqs = [
    {
      question: "What's included in the program fee?",
      answer: "Accommodation, all meals, airport pickup, orientation, project materials, 24/7 support, and a certificate of completion."
    },
    {
      question: "Do I need a visa for Kenya?",
      answer: "Yes, most nationalities require a visa. We provide invitation letters to assist with your visa application."
    },
    {
      question: "Is travel insurance required?",
      answer: "Yes, comprehensive travel insurance is mandatory for all volunteers. We can recommend providers."
    },
    {
      question: "What's the minimum age requirement?",
      answer: "18 years old. For groups under 18, we offer special programs with additional supervision."
    },
    {
      question: "Can I combine multiple programs?",
      answer: "Yes! Many volunteers combine volunteering with safari tours. Contact us for custom packages."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Paystack (cards & mobile money), bank transfers, and M-Pesa (Kenya). All payments are secure."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-linear-to-r from-orange-500 to-red-500">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">Get in touch to start your volunteering journey. We're here to help every step of the way.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info & FAQ */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-orange-600 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{info.title}</h3>
                      <div className="space-y-1 mt-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-orange-600 mt-2">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center space-x-3 mb-4">
                  <FaClock className="text-orange-600 w-5 h-5" />
                  <h3 className="font-bold text-gray-900">Operating Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 8:00 PM EAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM EAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM EAT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Questions</h2>
              <div className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 text-orange-600 font-semibold hover:text-orange-700 transition duration-300"
              >
                View all FAQs →
              </button>
            </div>

          </div>

          {/* Right Column - Inquiry Form */}
          <div className="lg:col-span-2">
            {/* Form Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Send Us Your Inquiry</h2>
              <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    <FaUser className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    <FaEnvelope className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    <FaPhone className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                    placeholder="+254 700 123 456"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                    placeholder="United States"
                  />
                </div>
              </div>

              {/* Program Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold">
                  Program / Safari of Interest
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                >
                  <option value="">Select a program or safari (optional)</option>
                  <optgroup label="Volunteer Programs">
                    {programs.slice(0, 6).map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Safari Tours">
                    {programs.slice(6).map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-2 font-semibold">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                  placeholder="Tell us about your interests, any questions, or specific requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-sm text-gray-600">
                  <p>We'll respond within 24 hours. Check your spam folder if you don't hear from us.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-lg bg-linear-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat
                  </a>
                  <button
                    type="submit"
                    className="bg-linear-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition duration-300 transform hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

            {/* Process Timeline */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                  <h4 className="font-bold text-gray-900 mb-2">Send Inquiry</h4>
                  <p className="text-sm text-gray-600">Tell us about your interests and questions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                  <h4 className="font-bold text-gray-900 mb-2">Personalized Response</h4>
                  <p className="text-sm text-gray-600">We send detailed information & answer questions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                  <h4 className="font-bold text-gray-900 mb-2">Start Planning</h4>
                  <p className="text-sm text-gray-600">We help with visas, dates, and preparation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq-section" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about volunteering with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    Q
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-11">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Locations in Kenya</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  We operate volunteer programs and safari tours across multiple locations in Kenya. 
                  Our main coordination office is in Nairobi, with project sites in rural communities 
                  and safari destinations throughout the country.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-orange-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Headquarters (Nairobi)</h4>
                      <p className="text-gray-600">Ngong Road, Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-orange-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Coastal Operations</h4>
                      <p className="text-gray-600">Diani Beach, Mombasa Road</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start">
                    <FaMapMarkerAlt className="text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Safari Base Camp</h4>
                      <p className="text-gray-600">Maasai Mara, Narok County</p>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="bg-gray-200 rounded-lg h-64 lg:h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <FaMapMarkerAlt className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-gray-600">We're working on an interactive map showing all our program locations!</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-12 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-full mr-4">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of volunteers and make a meaningful impact in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Apply via WhatsApp
            </a>
            <button
              onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition duration-300"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;