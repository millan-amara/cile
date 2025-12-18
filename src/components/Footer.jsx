import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Safaris', href: '/safaris' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Apply Now', href: '/booking' }
  ];

  const programs = [
    { label: 'Education', href: '/programs#education' },
    { label: 'Farming & Agriculture', href: '/programs#farming' },
    { label: 'Healthcare Support', href: '/programs#healthcare' },
    { label: 'Village Culture', href: '/programs#culture' }
  ];

  const safaris = [
    { label: 'Maasai Mara', href: '/safaris#maasai-mara' },
    { label: 'Wasini Island', href: '/safaris#wasini' },
    { label: 'Tsavo Safari', href: '/safaris#tsavo' },
    { label: 'Secret Beach', href: '/safaris#secret-beach' },
    { label: 'African Pool', href: '/safaris#african-pool' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Mine International
                </div>
                <div className="text-sm text-orange-400 font-semibold">Volunteering</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: '"Lora", serif' }}>
              Connecting hearts across borders through meaningful volunteer experiences in Kenya.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-gray-800 hover:bg-orange-600 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-orange-600 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-orange-600 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-orange-600 rounded-lg transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Mombasa, Kenya</p>
                  <p className="text-gray-500 text-sm">Coastal Region</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">+254 712 345 678</p>
                  <p className="text-gray-500 text-sm">9AM - 6PM EAT</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">info@mineinternational.com</p>
                  <p className="text-gray-500 text-sm">24hr response time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mine International Volunteering. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:ital,wght@0,400;0,600&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;