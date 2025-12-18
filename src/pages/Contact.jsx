// src/pages/Contact.jsx
import React, { useState } from 'react';
import { BsBank } from 'react-icons/bs';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaUser, FaCalendarAlt, FaUsers, FaCreditCard } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('inquiry');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    program: '',
    startDate: '',
    duration: '',
    participants: '1',
    message: '',
    paymentMethod: 'paystack'
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

  const paymentMethods = [
    { id: 'paystack', name: 'Paystack', icon: <MdPayment />, description: 'Secure online payment (Cards, Mobile Money)' },
    { id: 'bank', name: 'Bank Transfer', icon: <BsBank />, description: 'Direct bank transfer (International/Local)' },
    { id: 'mpesa', name: 'M-Pesa', icon: <FaCreditCard />, description: 'Mobile money payment (Kenya only)' }
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
    alert(`Thank you ${formData.name}! Your ${activeForm === 'inquiry' ? 'inquiry' : 'booking'} has been submitted. We'll contact you within 24 hours.`);
    // In production, this would connect to a backend API
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      program: '',
      startDate: '',
      duration: '',
      participants: '1',
      message: '',
      paymentMethod: 'paystack'
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+254 700 123 456", "+254 711 987 654"],
      subtitle: "Available 24/7"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@minevolunteering.org", "bookings@minevolunteering.org"],
      subtitle: "Response within 24 hours"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+254 700 123 456"],
      subtitle: "Quick responses"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Nairobi Office: Karen Road", "Coast Office: Diani Beach"],
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
      <div className="relative h-96 bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Contact & Book Your Adventure</h1>
            <p className="text-xl max-w-3xl mx-auto">Get in touch to start your journey. We're here to help every step of the way.</p>
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
                    <div className="text-green-600 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{info.title}</h3>
                      <div className="space-y-1 mt-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-green-600 mt-2">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center space-x-3 mb-4">
                  <FaClock className="text-green-600 w-5 h-5" />
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
                className="mt-4 text-green-600 font-semibold hover:text-green-700 transition duration-300"
              >
                View all FAQs →
              </button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Contact</h3>
              <p className="text-gray-600 mb-4">For urgent assistance outside office hours:</p>
              <div className="space-y-2">
                <p className="font-semibold text-red-600">+254 722 EMERGENCY</p>
                <p className="text-sm text-gray-600">Available 24/7 for registered volunteers</p>
              </div>
            </div>
          </div>

          {/* Right Column - Forms */}
          <div className="lg:col-span-2">
            {/* Form Tabs */}
            <div className="flex border-b mb-8">
              <button
                onClick={() => setActiveForm('inquiry')}
                className={`flex-1 py-4 px-6 text-lg font-semibold ${activeForm === 'inquiry' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                General Inquiry
              </button>
              <button
                onClick={() => setActiveForm('booking')}
                className={`flex-1 py-4 px-6 text-lg font-semibold ${activeForm === 'booking' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Book Now
              </button>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    placeholder="United States"
                  />
                </div>
              </div>

              {/* Program Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold">
                  Program / Safari of Interest *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                >
                  <option value="">Select a program or safari</option>
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

              {/* Booking-specific fields */}
              {activeForm === 'booking' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">
                        <FaCalendarAlt className="inline mr-2" />
                        Start Date *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">
                        Duration *
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      >
                        <option value="">Select duration</option>
                        <option value="1 week">1 Week</option>
                        <option value="2 weeks">2 Weeks</option>
                        <option value="3 weeks">3 Weeks</option>
                        <option value="1 month">1 Month</option>
                        <option value="2 months">2 Months</option>
                        <option value="3 months">3 Months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">
                        <FaUsers className="inline mr-2" />
                        Participants *
                      </label>
                      <select
                        name="participants"
                        value={formData.participants}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                        ))}
                        <option value="10+">10+ people (Group)</option>
                      </select>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Method</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {paymentMethods.map(method => (
                        <label
                          key={method.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition duration-300 ${formData.paymentMethod === method.id ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-300'}`}
                        >
                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={method.id}
                              checked={formData.paymentMethod === method.id}
                              onChange={handleChange}
                              className="mr-3 text-green-600"
                            />
                            <div className="text-green-600 mr-2">{method.icon}</div>
                            <span className="font-semibold">{method.name}</span>
                          </div>
                          <p className="text-sm text-gray-600 ml-8">{method.description}</p>
                        </label>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> After submitting your booking, we'll send you payment instructions based on your selected method. 
                        A 30% deposit is required to secure your spot.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Message */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-2 font-semibold">
                  {activeForm === 'inquiry' ? 'Your Message *' : 'Additional Notes'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required={activeForm === 'inquiry'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                  placeholder={activeForm === 'inquiry' ? 'Tell us about your interests and any questions...' : 'Any special requirements, dietary restrictions, or questions...'}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <p>We'll respond within 24 hours. Check your spam folder if you don't hear from us.</p>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
                >
                  {activeForm === 'inquiry' ? 'Send Inquiry' : 'Submit Booking Request'}
                </button>
              </div>
            </form>

            {/* Process Timeline */}
            <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Booking Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                  <h4 className="font-bold text-gray-900 mb-2">Submit Inquiry</h4>
                  <p className="text-sm text-gray-600">Tell us your interests and dates</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                  <h4 className="font-bold text-gray-900 mb-2">Receive Proposal</h4>
                  <p className="text-sm text-gray-600">We send detailed program & pricing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                  <h4 className="font-bold text-gray-900 mb-2">Make Payment</h4>
                  <p className="text-sm text-gray-600">Secure deposit via preferred method</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">4</div>
                  <h4 className="font-bold text-gray-900 mb-2">Get Ready</h4>
                  <p className="text-sm text-gray-600">We help with visas, flights & prep</p>
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
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
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
                    <FaMapMarkerAlt className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Headquarters (Nairobi)</h4>
                      <p className="text-gray-600">Karen Road, Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Coastal Operations</h4>
                      <p className="text-gray-600">Diani Beach, Mombasa Road</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Safari Base Camp</h4>
                      <p className="text-gray-600">Maasai Mara, Narok County</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 lg:h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <FaMapMarkerAlt className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-gray-600">We're working on an interactive map showing all our program locations!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out. We're here to help you plan the perfect volunteering experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Call Us Now
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition duration-300">
              WhatsApp Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;