import { useState } from 'react';
import { X, Heart, Share2, Download, Camera, Users, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'farming', name: 'Farming', icon: '🌾' },
    { id: 'culture', name: 'Village Life', icon: '🏘️' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'safari', name: 'Safari', icon: '🦁' },
    { id: 'beach', name: 'Beach & Coast', icon: '🏖️' }
  ];

  // Simulated photo gallery with descriptions
  const photos = [
    {
      id: 1,
      category: 'education',
      emoji: '👨‍🏫',
      title: 'English Class with Village Children',
      description: 'Teaching English to eager students at Mtitu Primary School',
      location: 'Mtitu, Kenya',
      volunteer: 'Sarah M., USA',
      likes: 234,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      category: 'farming',
      emoji: '🌽',
      title: 'Harvest Season',
      description: 'Working alongside local farmers during maize harvest',
      location: 'Kilifi County',
      volunteer: 'Lars H., Sweden',
      likes: 189,
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      id: 3,
      category: 'culture',
      emoji: '🍲',
      title: 'Cooking Traditional Ugali',
      description: 'Learning to prepare authentic Kenyan dishes with host family',
      location: 'Kwale Village',
      volunteer: 'Maria R., Spain',
      likes: 312,
      gradient: 'from-red-400 to-pink-500'
    },
    {
      id: 4,
      category: 'safari',
      emoji: '🦁',
      title: 'Lion Pride in Maasai Mara',
      description: 'Incredible encounter with a pride of lions during morning game drive',
      location: 'Maasai Mara',
      volunteer: 'James C., Singapore',
      likes: 456,
      gradient: 'from-amber-400 to-orange-600'
    },
    {
      id: 5,
      category: 'beach',
      emoji: '🐬',
      title: 'Dolphin Watching at Wasini',
      description: 'Swimming with playful dolphins in crystal-clear waters',
      location: 'Wasini Island',
      volunteer: 'Sophie D., France',
      likes: 378,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 6,
      category: 'education',
      emoji: '🎨',
      title: 'Art Class Creativity',
      description: 'Children expressing themselves through painting and drawing',
      location: 'Kikambala School',
      volunteer: 'Emma T., UK',
      likes: 267,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 7,
      category: 'farming',
      emoji: '🐔',
      title: 'Poultry Farm Care',
      description: 'Feeding chickens and collecting eggs at community farm',
      location: 'Malindi',
      volunteer: 'Tom B., Denmark',
      likes: 198,
      gradient: 'from-yellow-300 to-orange-400'
    },
    {
      id: 8,
      category: 'culture',
      emoji: '👨‍👩‍👧‍👦',
      title: 'Family Gathering',
      description: 'Evening storytelling session with host family and neighbors',
      location: 'Ganze Village',
      volunteer: 'Yuki T., Japan',
      likes: 289,
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      id: 9,
      category: 'healthcare',
      emoji: '💊',
      title: 'Community Health Outreach',
      description: 'Distributing medications and health education materials',
      location: 'Rural Health Clinic',
      volunteer: 'Dr. Aisha P., Canada',
      likes: 223,
      gradient: 'from-teal-400 to-green-500'
    },
    {
      id: 10,
      category: 'safari',
      emoji: '🐘',
      title: 'Red Elephants of Tsavo',
      description: 'Majestic elephants bathing in the red dust of Tsavo',
      location: 'Tsavo National Park',
      volunteer: 'Michael O., Ireland',
      likes: 401,
      gradient: 'from-red-400 to-orange-500'
    },
    {
      id: 11,
      category: 'beach',
      emoji: '🏖️',
      title: 'Secret Beach Sunset',
      description: 'Volunteers relaxing after a week of meaningful work',
      location: 'Secret Beach',
      volunteer: 'Anna K., Poland',
      likes: 345,
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 12,
      category: 'education',
      emoji: '⚽',
      title: 'Sports Day Fun',
      description: 'Playing football with students during break time',
      location: 'Mtitu Primary',
      volunteer: 'Lucas S., Portugal',
      likes: 256,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 13,
      category: 'farming',
      emoji: '🥕',
      title: 'Vegetable Garden',
      description: 'Harvesting organic vegetables from the community garden',
      location: 'Kilifi',
      volunteer: 'Nina M., Germany',
      likes: 187,
      gradient: 'from-lime-400 to-green-500'
    },
    {
      id: 14,
      category: 'culture',
      emoji: '🎭',
      title: 'Traditional Dance Performance',
      description: 'Learning traditional Kenyan dances with local youth group',
      location: 'Kwale Cultural Center',
      volunteer: 'Carlos V., Mexico',
      likes: 298,
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      id: 15,
      category: 'healthcare',
      emoji: '🩺',
      title: 'Health Checkup Day',
      description: 'Assisting nurses during community health screening',
      location: 'Malindi Clinic',
      volunteer: 'Fatima A., Morocco',
      likes: 212,
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: 16,
      category: 'safari',
      emoji: '🦒',
      title: 'Giraffe Encounter',
      description: 'Up close with graceful giraffes against African sunset',
      location: 'Maasai Mara',
      volunteer: 'David L., Australia',
      likes: 367,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 17,
      category: 'beach',
      emoji: '🤿',
      title: 'Snorkeling Adventure',
      description: 'Exploring vibrant coral reefs and tropical fish',
      location: 'Wasini Marine Park',
      volunteer: 'Isabella R., Italy',
      likes: 334,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      id: 18,
      category: 'culture',
      emoji: '🎵',
      title: 'Music and Drums',
      description: 'Learning to play traditional African drums',
      location: 'Village Square',
      volunteer: 'Andre P., Brazil',
      likes: 245,
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.2) 35px, rgba(255,255,255,.2) 70px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider mb-6">
            MOMENTS THAT MATTER
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Photo Gallery
          </h1>

          <p className="text-2xl text-orange-100 max-w-3xl mx-auto mb-8" style={{ fontFamily: '"Lora", serif' }}>
            See the impact, joy, and adventure through the eyes of our volunteers
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <Camera className="w-5 h-5" />
              <span className="font-medium">2000+ Photos</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <Users className="w-5 h-5" />
              <span className="font-medium">500+ Volunteers</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">50+ Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(photo)}
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both` }}
              >
                {/* Image Placeholder with Gradient and Emoji */}
                <div className={`relative h-80 bg-gradient-to-br ${photo.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                  </div>
                  
                  {/* Emoji as Image Placeholder */}
                  <div className="text-9xl transform group-hover:scale-110 transition-transform duration-500 relative z-10">
                    {photo.emoji}
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-semibold mb-1">Click to view details</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{photo.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Camera className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {photo.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {photo.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-orange-600">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{photo.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span>{photo.likes}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold text-gray-700">By:</span> {photo.volunteer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📸</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No photos in this category yet</h3>
              <p className="text-gray-500">Check back soon for more amazing moments!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div 
            className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className={`relative h-96 md:h-auto bg-gradient-to-br ${selectedImage.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>
                <div className="text-9xl relative z-10">
                  {selectedImage.emoji}
                </div>
              </div>

              {/* Details Side */}
              <div className="p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4 capitalize">
                      {selectedImage.category}
                    </span>
                    <h2 className="text-4xl font-bold mb-3 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                      {selectedImage.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: '"Lora", serif' }}>
                  {selectedImage.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{selectedImage.volunteer}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Heart className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{selectedImage.likes} people loved this</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Like Photo
                  </button>
                  <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instagram-style CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-8">📷✨</div>
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Share Your Story
          </h2>
          <p className="text-xl mb-10 text-purple-100" style={{ fontFamily: '"Lora", serif' }}>
            Join our volunteer family and create your own unforgettable moments in Kenya
          </p>
          <button className="px-12 py-5 bg-white text-purple-700 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your Journey
          </button>
          <p className="mt-8 text-purple-200">
            Follow us @mineinternationalkenya for daily inspiration
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                2,000+
              </div>
              <div className="text-gray-600 font-medium">Photos Shared</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                500+
              </div>
              <div className="text-gray-600 font-medium">Volunteers Featured</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                50+
              </div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                10K+
              </div>
              <div className="text-gray-600 font-medium">Happy Moments</div>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Gallery;