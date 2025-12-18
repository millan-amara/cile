import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, Calendar, Users, DollarSign, ArrowRight, Globe, MessageCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    age: '',
    program: '',
    duration: '',
    startDate: '',
    accommodation: '',
    safaris: [],
    dietaryRestrictions: '',
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        safaris: checked 
          ? [...prev.safaris, value]
          : prev.safaris.filter(s => s !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send data to backend
    console.log('Form submitted:', formData);
  };

  const programs = [
    { value: 'education', label: 'Education Program' },
    { value: 'farming', label: 'Farming & Agriculture' },
    { value: 'healthcare', label: 'Healthcare Support' },
    { value: 'culture', label: 'Village Culture Immersion' }
  ];

  const safariOptions = [
    { value: 'maasai-mara', label: 'Maasai Mara Safari', price: '$650' },
    { value: 'wasini', label: 'Wasini Island', price: '$120' },
    { value: 'tsavo', label: 'Tsavo Safari', price: '$400' },
    { value: 'secret-beach', label: 'Secret Beach', price: '$50' },
    { value: 'african-pool', label: 'African Pool', price: '$40' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h2 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
            Application Submitted!
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: '"Lora", serif' }}>
            Thank you for applying to Mine International Volunteering! We've received your application and will review it carefully.
          </p>

          <div className="bg-orange-50 rounded-2xl p-8 mb-8 text-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
              What Happens Next?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Within 24-48 hours</p>
                  <p className="text-gray-600">Our team will review your application</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Video Interview</p>
                  <p className="text-gray-600">We'll schedule a brief call to discuss your goals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Confirmation & Preparation</p>
                  <p className="text-gray-600">Receive detailed pre-departure information</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Submit Another Application
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold transition-all duration-300"
            >
              Back to Home
            </button>
          </div>

          <p className="mt-8 text-gray-500">
            Check your email ({formData.email}) for confirmation
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.2) 35px, rgba(255,255,255,.2) 70px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider mb-6">
            BEGIN YOUR JOURNEY
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Apply Now
          </h1>

          <p className="text-2xl text-orange-100 max-w-3xl mx-auto" style={{ fontFamily: '"Lora", serif' }}>
            Take the first step towards an unforgettable volunteer experience in Kenya
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Application Form - Main Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12">
              <h2 className="text-4xl font-bold mb-3 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                Volunteer Application
              </h2>
              <p className="text-gray-600 mb-10" style={{ fontFamily: '"Lora", serif' }}>
                Fill out this form to begin your application. All fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                    <Users className="w-7 h-7 text-orange-600" />
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Age *</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="17"
                        max="80"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="25"
                      />
                    </div>
                  </div>
                </div>

                {/* Program Selection */}
                <div className="pt-8 border-t-2 border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                    <Calendar className="w-7 h-7 text-orange-600" />
                    Program Details
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Choose Your Program *</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select a program...</option>
                        {programs.map(prog => (
                          <option key={prog.value} value={prog.value}>{prog.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Duration *</label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        >
                          <option value="">Select duration...</option>
                          <option value="1-2-weeks">1-2 weeks</option>
                          <option value="3-4-weeks">3-4 weeks</option>
                          <option value="5-8-weeks">5-8 weeks</option>
                          <option value="9-12-weeks">9-12 weeks</option>
                          <option value="3-6-months">3-6 months</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Preferred Start Date *</label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Accommodation Preference *</label>
                      <select
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select accommodation...</option>
                        <option value="host-family">Host Family (Most Immersive)</option>
                        <option value="volunteer-house">Shared Volunteer House</option>
                        <option value="private-room">Private Room (Extra Cost)</option>
                        <option value="no-preference">No Preference</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Safari Add-ons */}
                <div className="pt-8 border-t-2 border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                    <Globe className="w-7 h-7 text-orange-600" />
                    Add Safari Adventures (Optional)
                  </h3>
                  <p className="text-gray-600 mb-6">Select any safari experiences you'd like to add to your volunteer program</p>

                  <div className="space-y-3">
                    {safariOptions.map(safari => (
                      <label key={safari.value} className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-2xl hover:border-orange-300 cursor-pointer transition-colors duration-300">
                        <input
                          type="checkbox"
                          name="safaris"
                          value={safari.value}
                          checked={formData.safaris.includes(safari.value)}
                          onChange={handleChange}
                          className="w-5 h-5 text-orange-600 focus:ring-orange-500 rounded"
                        />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900">{safari.label}</span>
                        </div>
                        <span className="font-bold text-orange-600">{safari.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="pt-8 border-t-2 border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                    <MessageCircle className="w-7 h-7 text-orange-600" />
                    Additional Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Dietary Restrictions</label>
                      <input
                        type="text"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="Vegetarian, gluten-free, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Medical Conditions or Allergies</label>
                      <textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="Please list any medical conditions or allergies we should be aware of..."
                      ></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Emergency Contact Name *</label>
                        <input
                          type="text"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Emergency Contact Phone *</label>
                        <input
                          type="tel"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                          placeholder="+1 (555) 987-6543"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Why do you want to volunteer? *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder="Tell us about your motivation, goals, and what you hope to achieve through volunteering..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full px-10 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    Submit Application
                    <Send className="w-6 h-6" />
                  </button>
                  <p className="text-center text-gray-500 mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar - Contact Info */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Office Location</p>
                    <p className="text-gray-600">Mombasa, Kenya</p>
                    <p className="text-gray-600">Coastal Region</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <p className="text-gray-600">+254 712 345 678</p>
                    <p className="text-sm text-gray-500">Available 9AM - 6PM EAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-600">info@mineinternational.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Working Hours</p>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM EAT</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Have Questions?</h4>
                <p className="text-gray-600 mb-4">
                  Our team is here to help you through every step of your journey.
                </p>
                <button className="w-full px-6 py-3 bg-orange-100 text-orange-700 rounded-full font-semibold hover:bg-orange-200 transition-colors duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>

            {/* Payment Info Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Payment Options
                </h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Paystack (Coming Soon)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Bank Transfer</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Mobile Money (M-Pesa)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Installment Plans Available</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-green-200">
                <p className="text-sm text-gray-600">
                  Payment details and instructions will be sent after application approval
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                Join Our Community
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold mb-1">2,000+</div>
                  <div className="text-orange-100">Volunteers Worldwide</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">50+</div>
                  <div className="text-orange-100">Countries Represented</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-orange-100">Positive Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
      `}</style>
    </div>
  );
};

export default Booking;