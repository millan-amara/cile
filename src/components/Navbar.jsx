import { useState } from 'react';
import { Menu, X, Heart, MessageCircle } from 'lucide-react';

const Navigation = ({ currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // WhatsApp configuration
  const whatsappNumber = '+254796667249'; // Replace with your actual WhatsApp number
  const whatsappMessage = 'Hello Cile International! I\'m interested in your volunteer programs and would like to apply.';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'programs', label: 'Programs', href: '/programs' },
    { id: 'safaris', label: 'Safaris', href: '/safaris' },
    { id: 'gallery', label: 'Gallery', href: '/gallery' },
    { 
      id: 'whatsapp', 
      label: 'Apply Now', 
      href: whatsappUrl, 
      highlight: true,
      external: true,
      icon: <MessageCircle className="w-4 h-4" />
    }
  ];

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center gap-3 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="p-2 bg-linear-to-r from-orange-600 to-red-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Cile International
                </div>
                <div className="text-xs text-orange-600 font-semibold tracking-wide">Volunteering in Kenya</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                if (item.id === 'whatsapp') {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 bg-linear-to-r from-orange-600 to-red-600 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-green-700 hover:to-green-600 flex items-center gap-2 group/whatsapp"
                    >
                      <MessageCircle className="w-4 h-4 group-hover/whatsapp:scale-110 transition-transform duration-300" />
                      {item.label}
                    </a>
                  );
                }
                
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-orange-100 text-orange-700 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={() => currentPage === item.id && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                if (item.id === 'whatsapp') {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="block px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-green-600 to-green-500 text-white text-center shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/whatsapp-mobile"
                    >
                      <MessageCircle className="w-5 h-5 group-hover/whatsapp-mobile:scale-110 transition-transform duration-300" />
                      {item.label}
                    </a>
                  );
                }
                
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`block px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-20"></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navigation;