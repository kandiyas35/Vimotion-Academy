import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-vimotion.jpg";
import TrialModal from "./TrialModal";

const Hero = () => {
  const [showTrialModal, setShowTrialModal] = useState(false);

  const handleViewPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="ViMotion Academy - Creative Arts and Music" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-highlight" fill="currentColor" />
            <span className="text-white text-sm font-medium">Academy Seni & Musik Terdepan</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Temukan & Kembangkan
            <span className="bg-gradient-to-r from-highlight to-secondary bg-clip-text text-transparent block">
              Bakatmu
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan ViMotion Academy dan rasakan pengalaman belajar seni visual & musik 
            yang menyenangkan dengan instruktur berpengalaman dan fasilitas modern.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              variant="creative" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setShowTrialModal(true)}
            >
              <Play className="w-5 h-5 mr-2" />
              Trial Class Gratis
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              onClick={handleViewPrograms}
            >
              Lihat Program
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Instruktur Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Kepuasan Siswa</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>

      <TrialModal 
        isOpen={showTrialModal} 
        onClose={() => setShowTrialModal(false)} 
      />
    </section>
  );
};

export default Hero;