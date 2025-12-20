import { useState, useMemo, useEffect } from 'react';
import { Camera, Users, MapPin } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});

  // Your Cloudinary images
  const cloudinaryImages = [
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082704/cile/IMG-20251216-WA0024_ogldpt.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082702/cile/IMG-20251216-WA0022_yy8rgs.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082690/cile/IMG-20251216-WA0020_gfc94z.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082690/cile/IMG-20251216-WA0023_vyyz0f.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082685/cile/IMG-20251216-WA0064_t5yitl.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082682/cile/IMG-20251216-WA0021_t3gu9k.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082677/cile/IMG-20251216-WA0029_ssfxio.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082662/cile/IMG-20251216-WA0073_vwr9f2.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082657/cile/IMG-20251216-WA0074_sdu5lg.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082657/cile/IMG-20251216-WA0030_zaey5b.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082656/cile/IMG-20251216-WA0071_qvz8mk.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082653/cile/IMG-20251216-WA0028_j7edxs.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082646/cile/IMG-20251216-WA0072_bzocrw.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082640/cile/IMG-20251216-WA0025_jmcjyk.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082634/cile/IMG-20251216-WA0069_lcksx5.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082630/cile/IMG-20251216-WA0026_xzyhp0.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082629/cile/IMG-20251216-WA0070_qzbgfd.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082625/cile/IMG-20251216-WA0067_yhwh9y.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082620/cile/IMG-20251216-WA0068_cusikv.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082615/cile/IMG-20251216-WA0065_uwuzo3.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082599/cile/IMG-20251216-WA0066_gjs6rt.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082593/cile/IMG-20251216-WA0012_yuruwt.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082593/cile/IMG-20251216-WA0013_oeez9y.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082592/cile/IMG-20251216-WA0053_duvvsj.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082592/cile/IMG-20251216-WA0014_yta9l8.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082591/cile/IMG-20251216-WA0009_dvbyae.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082589/cile/IMG-20251216-WA0010_nfeuhn.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082576/cile/IMG-20251216-WA0054_cfybd4.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082573/cile/IMG-20251216-WA0062_umbz5i.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082571/cile/IMG-20251216-WA0018_dtjvee.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082571/cile/IMG-20251216-WA0019_i5ywkt.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082569/cile/IMG-20251216-WA0063_qkhgdo.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082549/cile/IMG-20251216-WA0017_rnafh3.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082549/cile/IMG-20251216-WA0016_ovhdna.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082549/cile/IMG-20251216-WA0060_djquju.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082548/cile/IMG-20251216-WA0061_tubyfe.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082547/cile/IMG-20251216-WA0058_xtofuy.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082546/cile/IMG-20251216-WA0015_igqim2.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082518/cile/IMG-20251216-WA0056_xlsar6.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082517/cile/IMG-20251216-WA0059_ii14su.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082515/cile/IMG-20251216-WA0075_nesska.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082515/cile/IMG-20251216-WA0057_c6udyp.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082514/cile/IMG-20251216-WA0079_yyxpoa.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082514/cile/IMG-20251216-WA0055_tz9osf.jpg",
    "https://res.cloudinary.com/dcj3qavxy/image/upload/v1766082444/cile/IMG-20251216-WA0035_nqjhdt.jpg"
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'education', name: 'Education' },
    { id: 'farming', name: 'Farming' },
    { id: 'culture', name: 'Village Life' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'safari', name: 'Safari' },
    { id: 'beach', name: 'Beach & Coast' }
  ];

  // Create photo objects with optimized Cloudinary URLs
  const photos = useMemo(() => {
    return cloudinaryImages.map((url, index) => {
      // Create optimized URL with Cloudinary transformations
      const optimizedUrl = url.replace('/upload/', '/upload/w_800,h_600,c_fill,f_auto,q_auto/');
      
      return {
        id: index + 1,
        url: optimizedUrl,
        // Distribute images evenly among categories
        category: categories[(index % categories.length) + 1]?.id || 'culture'
      };
    });
  }, []);

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  // Preload images
  useEffect(() => {
    photos.forEach(photo => {
      const img = new Image();
      img.src = photo.url;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [photo.id]: true }));
      };
    });
  }, [photos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' 
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center text-white">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Volunteer Gallery
          </h1>

          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-10 opacity-90">
            Capturing moments that inspire and transform lives
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-3 px-5 py-2 bg-white/15 backdrop-blur-sm rounded-full">
              <Camera className="w-4 h-4" />
              <span className="font-medium">{photos.length} Photos</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2 bg-white/15 backdrop-blur-sm rounded-full">
              <Users className="w-4 h-4" />
              <span className="font-medium">Global Volunteers</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2 bg-white/15 backdrop-blur-sm rounded-full">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-30 py-8 px-6 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white"
                style={{ 
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                  aspectRatio: '4/3'
                }}
              >
                {/* Loading Skeleton */}
                {!loadedImages[photo.id] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                )}

                {/* Image */}
                <img
                  src={photo.url}
                  alt={`Volunteer moment ${photo.id}`}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    loadedImages[photo.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [photo.id]: true }))}
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">No photos in this category</h3>
              <p className="text-gray-500">Select another category to view more photos</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Be Part of the Story
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join our community of volunteers and create unforgettable memories while making a difference
          </p>
          <button className="px-10 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
            Volunteer With Us
          </button>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default Gallery;