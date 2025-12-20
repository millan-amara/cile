import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Users, Globe, Star, Check } from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      title: 'Education',
      description: 'Teach English, math, and creative arts to village children. Make a lasting impact on young minds.',
      image: '🎓',
      imageUrl: 'https://res.cloudinary.com/dcj3qavxy/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1766082591/cile/IMG-20251216-WA0009_dvbyae.jpg',
      duration: '2-12 weeks',
      impact: '500+ children taught annually'
    },
    {
      title: 'Farming & Agriculture',
      description: 'Work alongside local farmers, learn sustainable practices, and help cultivate community gardens.',
      image: '🌾',
      imageUrl:"https://res.cloudinary.com/dcj3qavxy/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1766082514/cile/IMG-20251216-WA0042_ntpcgt.jpg",
      duration: '1-8 weeks',
      impact: '15+ farms supported'
    },
    {
      title: 'Healthcare Support',
      description: 'Assist in rural health clinics, support medical outreach programs, and promote community wellness.',
      image: '🏥',
      imageUrl: "https://res.cloudinary.com/dcj3qavxy/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1766082657/cile/IMG-20251216-WA0074_sdu5lg.jpg",
      duration: '4-16 weeks',
      impact: '300+ patients served'
    },
    {
      title: 'Village Culture',
      description: 'Immerse yourself in authentic Kenyan life, learn traditions, and build meaningful connections.',
      image: '🏘️',
      imageUrl: "https://res.cloudinary.com/dcj3qavxy/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1766082625/cile/IMG-20251216-WA0067_yhwh9y.jpg",
      duration: 'Flexible',
      impact: 'Deep cultural exchange'
    }
  ];

  const safaris = [
    { name: 'Maasai Mara', highlight: 'The Great Migration' },
    { name: 'Wasini Island', highlight: 'Dolphin Watching' },
    { name: 'Tsavo Safari', highlight: 'Red Elephants' },
    { name: 'Secret Beach', highlight: 'Hidden Paradise' },
    { name: 'African Pool', highlight: 'Natural Springs' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      country: 'United States',
      text: 'My three weeks teaching in Kenya changed my life. The kids were so eager to learn, and the community welcomed me like family. The Maasai Mara safari was the perfect way to end my journey!',
      program: 'Education & Safari',
      rating: 5
    },
    {
      name: 'Tom Bergström',
      country: 'Sweden',
      text: 'Working on the farms taught me so much about sustainable agriculture. The locals shared their wisdom generously, and I made friendships that will last forever. The Secret Beach was breathtaking!',
      program: 'Farming & Culture',
      rating: 5
    },
    {
      name: 'Yuki Tanaka',
      country: 'Japan',
      text: 'Assisting at the health clinic was incredibly rewarding. I felt like I truly made a difference. The organization was professional, and the cultural immersion was authentic and beautiful.',
      program: 'Healthcare Support',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      country: 'Spain',
      text: 'This wasn\'t tourism - it was a real connection. Living with a host family, cooking together, and learning Swahili opened my heart. The Wasini dolphin tour was magical!',
      program: 'Village Culture & Safari',
      rating: 5
    }
  ];

  const stats = [
    { number: '200+', label: 'Volunteers Hosted' },
    { number: '50+', label: 'Countries Represented' },
    { number: '6+', label: 'Years Experience' },
    { number: '100%', label: 'Safety Record' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0">
          <img
          src="https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082488/cile/IMG-20251216-WA0007_zofe3e.jpg"
            // src="https://res.cloudinary.com/your-cloud/image/upload/w_2000,q_auto,f_auto/v1/hero-main"
            alt="Volunteers in Kenya"
            className="w-full h-full object-cover opacity-30"
            style={{ filter: 'sepia(0.4) brightness(1.2)' }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-amber-50/80 via-orange-50/70 to-red-50/80"></div>
        </div> */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-20 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"
            style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-red-400 rounded-full blur-3xl"
            style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)` }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <div 
            className="inline-block mb-6 px-6 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold tracking-wider shadow-lg"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            MAKE A DIFFERENCE IN KENYA
          </div>
          
          <h1 
            className="text-7xl md:text-8xl font-bold mb-8 leading-tight"
            style={{ 
              fontFamily: '"Playfair Display", serif',
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
              background: 'linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Cile International<br />Volunteering
          </h1>

          <p 
            className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: '"Lora", serif',
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}
          >
            Experience authentic Kenyan culture through meaningful volunteer work
            and unforgettable adventures
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            style={{ animation: 'fadeInUp 1.2s ease-out 0.6s both' }}
          >
            <a href='/programs' className="group px-10 py-5 bg-linear-to-r from-orange-600 to-red-600 text-white rounded-full text-lg font-semibold shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a href='/about' className="px-10 py-5 bg-white text-orange-700 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-orange-200">
              Watch Our Story
            </a>
          </div>

          {/* Floating badges */}
          <div className="flex flex-wrap gap-4 justify-center mt-16 opacity-90">
            <div className="px-6 py-3 bg-white rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 font-medium">Purpose-Driven</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Community-Led</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Globe className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">50+ Countries</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-orange-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-linear-to-r from-orange-700 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-110 transition-transform duration-300"
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {stat.number}
                </div>
                <div className="text-lg text-orange-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-6xl font-bold mb-6 text-orange-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Volunteer Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: '"Lora", serif' }}>
              Choose your path to making a meaningful impact in Kenyan communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both` }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="p-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <img src={program.imageUrl} alt={program.title} className="rounded-2xl" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="px-4 py-2 bg-orange-50 rounded-full text-orange-700 text-sm font-semibold">
                      {program.duration}
                    </div>
                    <div className="px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      {program.impact}
                    </div>
                  </div>

                  <a href="programs" className="group/btn text-orange-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Adventures Section */}
      <section className="py-32 px-6 bg-linear-to-br from-amber-100 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold tracking-wider mb-6">
              ADVENTURE AWAITS
            </div>
            <h2 
              className="text-6xl font-bold mb-6 text-orange-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Safari & Recreation
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: '"Lora", serif' }}>
              Complement your volunteer experience with Kenya's most spectacular natural wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {safaris.map((safari, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {safari.name}
                  </h3>
                  <p className="text-orange-600 font-semibold group-hover:text-orange-100 transition-colors duration-300">
                    {safari.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/safaris" className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-lg font-semibold shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
              Explore All Adventures
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-linear-to-br from-red-50 to-orange-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-6xl font-bold mb-6 text-orange-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Volunteer Stories
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: '"Lora", serif' }}>
              Hear from those who've experienced the journey
            </p>
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === activeTestimonial
                    ? 'opacity-100 visible relative'
                    : 'opacity-0 invisible absolute top-0 left-0 w-full'
                }`}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-orange-500 text-orange-500" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-8 leading-relaxed italic" style={{ fontFamily: '"Lora", serif' }}>
                    "{testimonial.text}"
                  </blockquote>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xl font-bold text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-orange-600 font-medium">{testimonial.country}</div>
                    </div>
                    <div className="px-6 py-3 bg-orange-50 rounded-full text-orange-700 font-semibold w-fit">
                      {testimonial.program}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-orange-600 w-12'
                      : 'bg-orange-200 hover:bg-orange-300 w-3'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-linear-to-r from-orange-700 via-red-700 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Ready to Make Your Impact?
          </h2>
          <p className="text-2xl mb-12 text-orange-100 leading-relaxed" style={{ fontFamily: '"Lora", serif' }}>
            Join hundreds of volunteers who've found purpose, connection, and adventure in Kenya
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href='/programs' className="group px-12 py-6 bg-white text-orange-700 rounded-full text-xl font-bold shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
              Apply Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a href='/contact' className="px-12 py-6 border-2 border-white text-white rounded-full text-xl font-bold hover:bg-white hover:text-orange-700 transition-all duration-300 hover:scale-105">
              Contact Us
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-orange-100">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Flexible Dates</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;