import { Music, Palette, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-secondary to-highlight p-2 rounded-lg">
                <div className="flex items-center space-x-1">
                  <Palette className="w-5 h-5 text-white" />
                  <Music className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">ViMotion Academy</h1>
                <p className="text-white/80 text-sm">Create. Play. Inspire.</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              ViMotion Academy adalah tempat di mana kreativitas bertemu dengan pembelajaran yang menyenangkan. 
              Wujudkan impian seni dan musikmu bersama kami.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Jl. Kreatif No. 123, Bandung</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@vimotionacademy.com</span>
              </div>
            </div>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Program</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Seni Visual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lukis Manual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Art</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Musik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gitar & Bass</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Piano</a></li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Program</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galeri</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimoni</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 ViMotion Academy. All rights reserved. Made with ❤️ for creative minds.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;