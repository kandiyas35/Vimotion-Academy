import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Palette } from "lucide-react";
import TrialModal from "./TrialModal";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <div className="flex items-center space-x-1">
                  <Palette className="w-5 h-5 text-white" />
                  <Music className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ViMotion Academy
                </h1>
                <p className="text-xs text-muted-foreground">Create. Play. Inspire.</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">
              Program
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Tentang Kami
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Galeri
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => setShowTrialModal(true)}
            >
              Trial Gratis
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => setShowRegisterModal(true)}
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
      
      <TrialModal 
        isOpen={showTrialModal} 
        onClose={() => setShowTrialModal(false)} 
      />
      <RegisterModal 
        isOpen={showRegisterModal} 
        onClose={() => setShowRegisterModal(false)} 
      />
    </header>
  );
};

export default Header;