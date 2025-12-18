import { useState } from 'react';
import { BookOpen, Sprout, Heart, Home, Clock, Users, MapPin, DollarSign, Calendar, ArrowRight, Check, Star } from 'lucide-react';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(0);

  const programs = [
    {
      id: 'education',
      icon: BookOpen,
      title: 'Education Program',
      tagline: 'Empower Through Knowledge',
      description: 'Make a lasting impact on the future of Kenyan children by teaching English, mathematics, sciences, and creative arts in local schools and community centers.',
      longDescription: 'Our education program places volunteers in rural and semi-urban schools where they work alongside local teachers to deliver quality education. You\'ll help bridge educational gaps, inspire young minds, and contribute to the community\'s long-term development. Whether you\'re teaching basic literacy, conducting computer classes, or leading art projects, your contribution creates ripples of change.',
      duration: '2-12 weeks',
      minAge: 18,
      skills: ['Teaching experience helpful but not required', 'Patience and creativity', 'Basic English proficiency', 'Ability to work with children'],
      schedule: {
        weekdays: 'Teaching: 8:00 AM - 3:00 PM',
        evenings: 'Lesson planning & cultural activities',
        weekends: 'Free time or optional community events'
      },
      accommodation: 'Host family or volunteer house',
      meals: 'Three meals daily (local cuisine)',
      pricing: {
        twoWeeks: '$450',
        fourWeeks: '$750',
        twelveWeeks: '$1,800'
      },
      included: [
        'Pre-departure orientation',
        'Airport pickup and drop-off',
        'Accommodation with host family',
        'Three meals per day',
        'In-country orientation',
        'Project placement and supervision',
        '24/7 emergency support',
        'Certificate of completion'
      ],
      impact: [
        'Over 500 children taught annually',
        'Improved English literacy rates',
        'Enhanced educational resources',
        'Cultural exchange and global awareness'
      ],
      testimonial: {
        text: 'Teaching in Kenya was the most rewarding experience of my life. The children\'s enthusiasm was contagious, and I learned as much from them as they did from me.',
        author: 'Emma Thompson',
        country: 'United Kingdom'
      },
      images: ['📚', '✏️', '🎨', '💻']
    },
    {
      id: 'farming',
      icon: Sprout,
      title: 'Farming & Agriculture',
      tagline: 'Cultivate Sustainable Futures',
      description: 'Work alongside local farmers to promote sustainable agricultural practices, permaculture, and food security in rural Kenyan communities.',
      longDescription: 'Join hands with Kenyan farmers to learn and implement sustainable farming techniques. From planting and harvesting to animal husbandry and irrigation systems, you\'ll gain practical skills while making a tangible difference. This program combines hands-on farm work with learning about traditional and modern agricultural methods, helping communities achieve food security and economic independence.',
      duration: '1-8 weeks',
      minAge: 17,
      skills: ['Physical fitness for farm work', 'Interest in agriculture and sustainability', 'Willingness to learn and get hands dirty', 'Respect for traditional farming methods'],
      schedule: {
        weekdays: 'Farm work: 7:00 AM - 2:00 PM',
        afternoons: 'Rest, workshops, or community projects',
        weekends: 'Market visits or rest days'
      },
      accommodation: 'Farmstay with host family',
      meals: 'Three meals daily (farm-fresh organic food)',
      pricing: {
        twoWeeks: '$400',
        fourWeeks: '$650',
        eightWeeks: '$1,200'
      },
      included: [
        'Agricultural training and orientation',
        'Airport pickup and drop-off',
        'Farmstay accommodation',
        'Fresh organic meals',
        'Farming tools and equipment',
        'Weekly market tours',
        'Project supervision',
        'Certificate of participation'
      ],
      impact: [
        '15+ community farms supported',
        'Sustainable practices implemented',
        'Improved crop yields',
        'Knowledge exchange between cultures'
      ],
      testimonial: {
        text: 'Learning traditional and sustainable farming methods from Kenyan farmers was eye-opening. I now see food and agriculture in a completely different light.',
        author: 'Lars Hansen',
        country: 'Denmark'
      },
      images: ['🌽', '🥕', '🐔', '🌱']
    },
    {
      id: 'healthcare',
      icon: Heart,
      title: 'Healthcare Support',
      tagline: 'Heal and Help Communities',
      description: 'Assist medical professionals in rural health clinics, support public health initiatives, and promote wellness in underserved communities.',
      longDescription: 'Our healthcare program offers volunteers the opportunity to work in community health centers, mobile clinics, and public health campaigns. While direct medical care is provided by licensed professionals, volunteers support administrative tasks, health education, patient care assistance, and community outreach programs. This is ideal for pre-med students, nursing students, or anyone passionate about global health.',
      duration: '4-16 weeks',
      minAge: 19,
      skills: ['Medical/nursing background preferred', 'Compassion and patience', 'Ability to handle sensitive situations', 'Interest in public health'],
      schedule: {
        weekdays: 'Clinic work: 8:00 AM - 4:00 PM',
        evenings: 'Health education workshops',
        weekends: 'Optional community health camps'
      },
      accommodation: 'Shared volunteer house near clinic',
      meals: 'Three meals daily',
      pricing: {
        fourWeeks: '$800',
        eightWeeks: '$1,400',
        sixteenWeeks: '$2,400'
      },
      included: [
        'Medical facility placement',
        'Airport pickup and drop-off',
        'Shared accommodation',
        'Three meals per day',
        'Medical supervision and training',
        'Health and safety briefings',
        '24/7 emergency support',
        'Professional certificate'
      ],
      impact: [
        '1,000+ patients served monthly',
        'Health education reaching villages',
        'Maternal and child health improved',
        'Disease prevention campaigns'
      ],
      testimonial: {
        text: 'Working in the rural clinic opened my eyes to the challenges and resilience of communities. It was humbling and inspiring in equal measure.',
        author: 'Dr. Aisha Patel',
        country: 'Canada'
      },
      images: ['🏥', '💊', '🩺', '❤️']
    },
    {
      id: 'culture',
      icon: Home,
      title: 'Village Culture Immersion',
      tagline: 'Live Like a Local',
      description: 'Immerse yourself in authentic Kenyan village life, learn traditions, participate in daily activities, and build genuine cross-cultural connections.',
      longDescription: 'This unique program offers a deep dive into Kenyan culture and village life. Live with a local family, participate in daily routines, learn Swahili, cook traditional dishes, attend ceremonies, and understand the rich tapestry of Kenyan traditions. This isn\'t volunteering in the traditional sense - it\'s a cultural exchange that benefits both you and the community through mutual learning and friendship.',
      duration: 'Flexible (1-12 weeks)',
      minAge: 18,
      skills: ['Open mind and cultural sensitivity', 'Adaptability and flexibility', 'Willingness to step outside comfort zone', 'Respect for local customs'],
      schedule: {
        weekdays: 'Flexible daily activities with host family',
        activities: 'Cooking, crafts, language learning, ceremonies',
        weekends: 'Community events and celebrations'
      },
      accommodation: 'Traditional home with host family',
      meals: 'All meals with host family (traditional Kenyan cuisine)',
      pricing: {
        oneWeek: '$300',
        twoWeeks: '$500',
        fourWeeks: '$800',
        eightWeeks: '$1,400'
      },
      included: [
        'Carefully matched host family',
        'Airport pickup and drop-off',
        'Home accommodation',
        'All meals with family',
        'Swahili language basics',
        'Cultural orientation',
        'Traditional craft workshops',
        'Certificate of cultural exchange'
      ],
      impact: [
        'Deep cultural understanding',
        'Economic support for families',
        'Language and skill exchange',
        'Lasting friendships across borders'
      ],
      testimonial: {
        text: 'Living with my Kenyan family wasn\'t just volunteering - it was becoming part of something bigger. I found a second family and a second home.',
        author: 'Maria Santos',
        country: 'Brazil'
      },
      images: ['🏘️', '🍲', '🎭', '👨‍👩‍👧‍👦']
    }
  ];

  const currentProgram = programs[selectedProgram];
  const ProgramIcon = currentProgram.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold tracking-wider mb-6">
              FIND YOUR CALLING
            </div>
            <h1 
              className="text-6xl md:text-7xl font-bold mb-6 text-orange-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Volunteer Programs
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: '"Lora", serif' }}>
              Choose your path to making a meaningful difference in Kenya
            </p>
          </div>

          {/* Program Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedProgram(index)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    selectedProgram === index
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl scale-105'
                      : 'bg-white text-gray-700 hover:bg-orange-50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {program.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Program Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 md:p-16 text-white mb-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.2) 35px, rgba(255,255,255,.2) 70px)' }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <ProgramIcon className="w-12 h-12" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {currentProgram.title}
                  </h2>
                  <p className="text-2xl text-orange-100 mt-2" style={{ fontFamily: '"Lora", serif' }}>
                    {currentProgram.tagline}
                  </p>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-orange-50 mb-8">
                {currentProgram.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {currentProgram.images.map((emoji, idx) => (
                  <div key={idx} className="text-5xl">{emoji}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Section */}
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                  About This Program
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: '"Lora", serif' }}>
                  {currentProgram.longDescription}
                </p>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                  <Calendar className="w-8 h-8 text-orange-600" />
                  Typical Schedule
                </h3>
                <div className="space-y-4">
                  {Object.entries(currentProgram.schedule).map(([period, activity], idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                      <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 capitalize mb-1">{period.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="text-gray-700">{activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentProgram.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 shadow-xl border-2 border-green-200">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                  <Star className="w-8 h-8 text-green-600" />
                  Your Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentProgram.impact.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-10 shadow-xl text-white">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-white" />
                  ))}
                </div>
                <blockquote className="text-2xl italic mb-6 leading-relaxed" style={{ fontFamily: '"Lora", serif' }}>
                  "{currentProgram.testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <div className="font-bold text-lg">{currentProgram.testimonial.author}</div>
                    <div className="text-orange-100">{currentProgram.testimonial.country}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Program Details
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Duration</div>
                      <div className="text-gray-700">{currentProgram.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Minimum Age</div>
                      <div className="text-gray-700">{currentProgram.minAge} years old</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Location</div>
                      <div className="text-gray-700">Rural Kenya</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Home className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Accommodation</div>
                      <div className="text-gray-700">{currentProgram.accommodation}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t-2 border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-gray-900">Program Fees</h4>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(currentProgram.pricing).map(([duration, price], idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span className="text-gray-700 capitalize">{duration.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-bold text-orange-600 text-lg">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Apply for This Program
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Requirements
                </h3>
                <div className="space-y-3">
                  {currentProgram.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-700 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Still Have Questions?
          </h2>
          <p className="text-xl mb-10 text-orange-100" style={{ fontFamily: '"Lora", serif' }}>
            We're here to help you find the perfect program for your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-orange-700 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
            <button className="px-10 py-5 border-2 border-white rounded-full font-bold hover:bg-white hover:text-orange-700 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
      `}</style>
    </div>
  );
};

export default Programs;