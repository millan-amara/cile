import { useState } from 'react';
import { Camera, Waves, Mountain, Compass, Sun, MapPin, Clock, Users, DollarSign, Star, ArrowRight, Palmtree, Fish, Bird } from 'lucide-react';

const Safaris = () => {
  const [selectedSafari, setSelectedSafari] = useState(null);

  const safaris = [
    {
      id: 'maasai-mara',
      name: 'Maasai Mara Safari',
      tagline: 'Witness the Greatest Show on Earth',
      icon: '🦁',
      hero: 'The legendary Maasai Mara National Reserve',
      description: 'Experience the world-famous Great Migration and encounter the Big Five in Kenya\'s most spectacular wildlife reserve.',
      longDescription: 'The Maasai Mara is synonymous with wildlife safari excellence. Home to an incredible concentration of animals, this ecosystem hosts the dramatic annual wildebeest migration - over 1.5 million wildebeest, zebras, and gazelles crossing the Mara River in a primal dance of survival. Beyond migration season, the Mara offers year-round exceptional game viewing with lion prides, leopards, cheetahs, elephants, and rhinos roaming the savannah.',
      duration: '3-5 days',
      bestTime: 'July to October (Migration), Year-round wildlife',
      highlights: [
        'Witness the Great Wildebeest Migration',
        'Big Five game viewing',
        'Hot air balloon safaris at sunrise',
        'Maasai cultural village visits',
        'River crossings and predator action',
        'Luxury tented camps under the stars'
      ],
      activities: ['Game drives', 'Hot air balloon rides', 'Cultural visits', 'Bush walks', 'Photography safaris'],
      accommodation: 'Luxury tented camps or lodges',
      pricing: {
        threeDay: '$650 per person',
        fiveDay: '$1,100 per person'
      },
      included: [
        'All park entrance fees',
        'Professional safari guide',
        'Game drives in 4x4 vehicle',
        'Full board accommodation',
        'Airport transfers',
        'Bottled water during drives'
      ],
      wildlife: ['Lions', 'Leopards', 'Cheetahs', 'Elephants', 'Rhinos', 'Wildebeest', 'Zebras', 'Giraffes'],
      testimonial: {
        text: 'The Maasai Mara exceeded every expectation. Watching thousands of wildebeest cross the river while lions waited nearby was the most thrilling moment of my life!',
        author: 'James Chen',
        country: 'Singapore'
      }
    },
    {
      id: 'wasini',
      name: 'Wasini Island',
      tagline: 'Paradise Beneath the Waves',
      icon: '🐬',
      hero: 'Pristine coral reefs and playful dolphins',
      description: 'Discover an untouched island paradise with crystal-clear waters, vibrant coral reefs, and friendly dolphins in the warm Indian Ocean.',
      longDescription: 'Wasini Island is a hidden gem off Kenya\'s south coast, offering an escape to tranquility and natural beauty. This car-free island is surrounded by the Kisite-Mpunguti Marine National Park, one of East Africa\'s most pristine marine reserves. Snorkel among colorful coral gardens teeming with tropical fish, spot playful dolphins dancing in the waves, and experience the authentic coastal Swahili culture that has thrived here for centuries.',
      duration: '1-2 days',
      bestTime: 'October to March (best visibility)',
      highlights: [
        'Dolphin watching encounters',
        'World-class snorkeling and diving',
        'Kisite-Mpunguti Marine Park',
        'Traditional dhow boat cruises',
        'Fresh seafood lunch on the beach',
        'Swahili cultural experiences',
        'Mangrove forest exploration'
      ],
      activities: ['Snorkeling', 'Dolphin watching', 'Dhow sailing', 'Beach relaxation', 'Village tours'],
      accommodation: 'Beachfront cottages or day trip',
      pricing: {
        dayTrip: '$120 per person',
        overnight: '$280 per person'
      },
      included: [
        'Boat transfer to island',
        'Snorkeling equipment',
        'Marine park fees',
        'Seafood lunch',
        'Professional guide',
        'Life jackets and safety gear'
      ],
      wildlife: ['Dolphins', 'Sea turtles', 'Tropical fish', 'Coral reefs', 'Octopus', 'Starfish'],
      testimonial: {
        text: 'Swimming with dolphins in their natural habitat was magical! The coral reefs were stunning, and the fresh grilled fish was the best meal I\'ve ever had.',
        author: 'Sophie Dubois',
        country: 'France'
      }
    },
    {
      id: 'tsavo',
      name: 'Tsavo Safari',
      tagline: 'Land of the Red Elephants',
      icon: '🐘',
      hero: 'Kenya\'s largest national park',
      description: 'Explore vast wilderness landscapes, famous red elephants, and diverse ecosystems in one of Africa\'s oldest and largest parks.',
      longDescription: 'Tsavo National Parks (East and West) form one of the world\'s largest protected wilderness areas, offering an authentic, less-crowded safari experience. Famous for its red elephants - who dust-bathe in the park\'s iron-rich soil - Tsavo is home to large elephant herds, lions (including the legendary man-eaters of Tsavo), and diverse landscapes from open plains to volcanic hills and palm-fringed rivers.',
      duration: '2-4 days',
      bestTime: 'June to October, January to February',
      highlights: [
        'Famous red elephants of Tsavo',
        'Mzima Springs underwater viewing',
        'Vast, untouched wilderness',
        'Historic sites and lava flows',
        'Large elephant herds',
        'Predator sightings',
        'Lugard\'s Falls scenic beauty'
      ],
      activities: ['Game drives', 'Nature walks', 'Bird watching', 'Photography', 'Historical site visits'],
      accommodation: 'Safari lodges or camps',
      pricing: {
        twoDay: '$400 per person',
        fourDay: '$750 per person'
      },
      included: [
        'Park entrance fees',
        'Experienced driver-guide',
        'Game drives',
        'Accommodation',
        'All meals',
        'Drinking water'
      ],
      wildlife: ['Elephants', 'Lions', 'Leopards', 'Buffaloes', 'Giraffes', 'Hippos', 'Crocodiles', '400+ bird species'],
      testimonial: {
        text: 'Tsavo felt like the real Africa - wild, raw, and magnificent. Seeing hundreds of elephants at the watering hole was unforgettable.',
        author: 'Michael O\'Brien',
        country: 'Ireland'
      }
    },
    {
      id: 'secret-beach',
      name: 'Secret Beach',
      tagline: 'Your Private Slice of Paradise',
      icon: '🏖️',
      hero: 'Hidden coastal sanctuary',
      description: 'Escape to a secluded beach paradise where powder-white sand meets turquoise waters, far from tourist crowds.',
      longDescription: 'Secret Beach is exactly what its name suggests - a hidden coastal paradise known only to locals and a select few travelers. This pristine stretch of coastline features crystal-clear turquoise waters, powdery white sand, and swaying palm trees. It\'s the perfect place to unwind after volunteer work, swim in warm Indian Ocean waters, enjoy fresh tropical fruits, and watch spectacular sunsets in peaceful solitude.',
      duration: 'Half day to full day',
      bestTime: 'Year-round, especially during dry seasons',
      highlights: [
        'Pristine, uncrowded beach',
        'Swimming in clear waters',
        'Beachcombing and shell collecting',
        'Sunset watching',
        'Beach volleyball and games',
        'Fresh coconut water',
        'Peaceful relaxation'
      ],
      activities: ['Swimming', 'Sunbathing', 'Beach games', 'Snorkeling', 'Photography'],
      accommodation: 'Day trip or nearby coastal lodges',
      pricing: {
        halfDay: '$50 per person',
        fullDay: '$80 per person'
      },
      included: [
        'Transportation',
        'Beach access',
        'Fresh fruits and coconuts',
        'Beach chairs',
        'Snorkeling gear (optional)',
        'Local guide'
      ],
      wildlife: ['Hermit crabs', 'Tropical fish', 'Seabirds', 'Starfish'],
      testimonial: {
        text: 'After weeks of volunteering, Secret Beach was the perfect reward. It truly felt like our own private paradise. So peaceful and beautiful!',
        author: 'Anna Kowalski',
        country: 'Poland'
      }
    },
    {
      id: 'african-pool',
      name: 'African Pool',
      tagline: 'Natural Springs Oasis',
      icon: '💧',
      hero: 'Crystal-clear natural swimming pool',
      description: 'Swim in pristine natural spring waters surrounded by lush vegetation and authentic African wilderness.',
      longDescription: 'African Pool is a natural wonder - a crystal-clear spring-fed swimming pool nestled in the Kenyan countryside. Fed by underground springs, the water maintains a refreshing temperature year-round and is so clear you can see every pebble on the bottom. Surrounded by indigenous trees and local vegetation, it offers a unique swimming experience that connects you with nature in the most authentic way.',
      duration: 'Half day',
      bestTime: 'Year-round',
      highlights: [
        'Crystal-clear spring water',
        'Natural swimming pool',
        'Surrounding forest trails',
        'Picnic areas',
        'Bird watching opportunities',
        'Photography spots',
        'Local community interaction'
      ],
      activities: ['Swimming', 'Picnicking', 'Nature walks', 'Photography', 'Relaxation'],
      accommodation: 'Day trip',
      pricing: {
        visit: '$40 per person'
      },
      included: [
        'Transportation',
        'Pool access',
        'Picnic lunch',
        'Nature guide',
        'Changing facilities'
      ],
      wildlife: ['Exotic birds', 'Butterflies', 'Small mammals', 'Unique plant species'],
      testimonial: {
        text: 'Swimming in African Pool felt like being in a nature documentary. The water was so clear and refreshing - a true hidden gem!',
        author: 'Lucas Silva',
        country: 'Portugal'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full text-sm font-semibold tracking-wider mb-6">
            ADVENTURE AWAITS
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            style={{ 
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Safari & Adventures
          </h1>

          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-12" style={{ fontFamily: '"Lora", serif' }}>
            Complement your volunteer experience with Kenya's most breathtaking natural wonders
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
              <Mountain className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Wildlife Safaris</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
              <Waves className="w-5 h-5 text-teal-600" />
              <span className="font-medium">Marine Adventures</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
              <Sun className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">Beach Escapes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Cards Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safaris.map((safari, index) => (
              <div 
                key={safari.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedSafari(selectedSafari === index ? null : index)}
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both` }}
              >
                {/* Card Header */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.2) 35px, rgba(255,255,255,.2) 70px)' }}></div>
                  </div>
                  <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {safari.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {safari.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    {safari.tagline}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {safari.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      {safari.duration}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      Top Rated
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    {selectedSafari === index ? 'Show Less' : 'View Details'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed View Modal/Section */}
      {selectedSafari !== null && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <button 
              onClick={() => setSelectedSafari(null)}
              className="mb-8 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-semibold transition-colors duration-300"
            >
              ← Back to All Safaris
            </button>

            {(() => {
              const safari = safaris[selectedSafari];
              return (
                <div>
                  {/* Detailed Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white mb-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.2) 35px, rgba(255,255,255,.2) 70px)' }}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="text-7xl">{safari.icon}</div>
                        <div>
                          <h2 className="text-5xl font-bold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                            {safari.name}
                          </h2>
                          <p className="text-2xl text-blue-100">{safari.tagline}</p>
                        </div>
                      </div>
                      <p className="text-xl text-blue-50 leading-relaxed">
                        {safari.hero}
                      </p>
                    </div>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                      {/* About */}
                      <div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                          Experience Overview
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: '"Lora", serif' }}>
                          {safari.longDescription}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-10">
                        <h3 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                          <Compass className="w-8 h-8 text-blue-600" />
                          Experience Highlights
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {safari.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activities */}
                      <div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                          Activities Included
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {safari.activities.map((activity, idx) => (
                            <div key={idx} className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg">
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Wildlife */}
                      {safari.wildlife.length > 0 && (
                        <div className="bg-green-50 rounded-3xl p-10 border-2 border-green-200">
                          <h3 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3" style={{ fontFamily: '"Playfair Display", serif' }}>
                            <Bird className="w-8 h-8 text-green-600" />
                            Wildlife & Marine Life
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {safari.wildlife.map((animal, idx) => (
                              <div key={idx} className="px-5 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-green-200">
                                {animal}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* What's Included */}
                      <div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                          Package Includes
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {safari.included.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-10 text-white shadow-xl">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-white" />
                          ))}
                        </div>
                        <blockquote className="text-2xl italic mb-6 leading-relaxed" style={{ fontFamily: '"Lora", serif' }}>
                          "{safari.testimonial.text}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                            👤
                          </div>
                          <div>
                            <div className="font-bold text-lg">{safari.testimonial.author}</div>
                            <div className="text-blue-100">{safari.testimonial.country}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                      {/* Booking Card */}
                      <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-8 border-2 border-blue-100">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                          Quick Info
                        </h3>

                        <div className="space-y-6 mb-8">
                          <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-gray-900 mb-1">Duration</div>
                              <div className="text-gray-700">{safari.duration}</div>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <Sun className="w-6 h-6 text-blue-600 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-gray-900 mb-1">Best Time</div>
                              <div className="text-gray-700">{safari.bestTime}</div>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-gray-900 mb-1">Accommodation</div>
                              <div className="text-gray-700">{safari.accommodation}</div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 border-t-2 border-gray-100">
                          <div className="flex items-center gap-2 mb-4">
                            <DollarSign className="w-6 h-6 text-blue-600" />
                            <h4 className="font-bold text-gray-900">Pricing</h4>
                          </div>
                          <div className="space-y-3 mb-6">
                            {Object.entries(safari.pricing).map(([duration, price], idx) => (
                              <div key={idx} className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                                <span className="text-gray-700 capitalize font-medium">{duration.replace(/([A-Z])/g, ' $1').trim()}</span>
                                <span className="font-bold text-blue-600 text-lg">{price}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                          Book This Adventure
                          <ArrowRight className="w-5 h-5" />
                        </button>

                        <p className="text-sm text-gray-500 text-center mt-4">
                          Can be combined with volunteer programs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* Combo Packages Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
            Volunteer + Safari Packages
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto" style={{ fontFamily: '"Lora", serif' }}>
            Save money by combining your volunteer program with safari adventures
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-6">🎓🦁</div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Teach & Explore
              </h3>
              <p className="text-gray-600 mb-6">2 weeks teaching + 3 days Maasai Mara</p>
              <div className="text-3xl font-bold text-orange-600 mb-6">$950</div>
              <div className="text-sm text-green-600 font-semibold mb-6">Save $150!</div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-blue-400">
              <div className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
                MOST POPULAR
              </div>
              <div className="text-6xl mb-6">🌾🐬</div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Farm & Coast
              </h3>
              <p className="text-gray-600 mb-6">3 weeks farming + Wasini Island + Secret Beach</p>
              <div className="text-3xl font-bold text-orange-600 mb-6">$850</div>
              <div className="text-sm text-green-600 font-semibold mb-6">Save $120!</div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-6">🏥🏖️</div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Care & Relax
              </h3>
              <p className="text-gray-600 mb-6">4 weeks healthcare + Beach retreat</p>
              <div className="text-3xl font-bold text-orange-600 mb-6">$980</div>
              <div className="text-sm text-green-600 font-semibold mb-6">Save $100!</div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready for Your Kenyan Adventure?
          </h2>
          <p className="text-xl mb-10 text-blue-100" style={{ fontFamily: '"Lora", serif' }}>
            Book your safari experience or create a custom package today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-blue-700 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300">
              Book Safari
            </button>
            <button className="px-10 py-5 border-2 border-white rounded-full font-bold hover:bg-white hover:text-blue-700 transition-all duration-300">
              Custom Package
            </button>
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

export default Safaris;