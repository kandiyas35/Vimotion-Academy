import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Music, Monitor, Users, Clock, Award, Gift } from "lucide-react";
import digitalArt from "@/assets/digital-art.jpg";
import musicStudio from "@/assets/music-studio.jpg";
import RegisterModal from "./RegisterModal";

const Programs = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const programs = [
    {
      id: "visual-arts",
      title: "Seni Visual",
      description: "Lukis manual, digital art, sketsa, dan teknik menggambar modern",
      image: digitalArt,
      icon: Palette,
      features: ["Lukis Manual & Digital", "Adobe Illustrator & Photoshop", "Sketsa & Portrait", "Manga & Anime Style"],
      duration: "3-6 Bulan",
      level: "Pemula - Mahir",
      price: "Mulai 350K/bulan"
    },
    {
      id: "music",
      title: "Musik",
      description: "Gitar, piano, drum, vokal dan produksi musik digital",
      image: musicStudio,
      icon: Music,
      features: ["Gitar & Bass", "Piano & Keyboard", "Drum & Perkusi", "Vokal & Bernyanyi"],
      duration: "3-6 Bulan",
      level: "Pemula - Mahir", 
      price: "Mulai 400K/bulan"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Program
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Unggulan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pilih program yang sesuai dengan minat dan bakatmu. Semua program dirancang untuk mengembangkan 
            kreativitas dengan pendekatan yang menyenangkan dan efektif.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card key={program.id} className="group overflow-hidden hover:shadow-creative transition-all duration-300 border-0 bg-card">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                    <p className="text-white/80">{program.description}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{program.level}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Yang Akan Dipelajari:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{program.price}</div>
                      <div className="text-sm text-muted-foreground">*Termasuk materi</div>
                    </div>
                    <Button 
                      variant="hero" 
                      className="ml-4"
                      onClick={() => setShowRegisterModal(true)}
                    >
                      Daftar Program
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Promo Section */}
        <div className="bg-gradient-to-r from-highlight/10 to-secondary/10 rounded-3xl p-8 md:p-12 mb-16 border border-highlight/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-highlight to-secondary text-white px-4 py-2 rounded-full mb-4">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">PROMO SPESIAL</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Diskon 30% untuk Pendaftar Baru!</h3>
            <p className="text-lg text-muted-foreground mb-6">Dapatkan kesempatan belajar dengan harga terjangkau. Promo terbatas hingga akhir bulan!</p>
            <Button 
              variant="creative" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setShowRegisterModal(true)}
            >
              <Gift className="w-5 h-5 mr-2" />
              Ambil Promo Sekarang
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Mengapa Memilih ViMotion Academy?</h3>
            <p className="text-muted-foreground text-lg">Fasilitas dan metode pembelajaran terbaik untuk mengembangkan kreativitasmu</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Kelas Kecil</h4>
              <p className="text-muted-foreground">Maksimal 8 siswa per kelas untuk perhatian personal yang optimal</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-secondary to-highlight p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Fasilitas Modern</h4>
              <p className="text-muted-foreground">Studio musik profesional dan lab komputer dengan software terkini</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-accent to-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Instruktur Berpengalaman</h4>
              <p className="text-muted-foreground">Tim pengajar profesional dengan pengalaman industri kreatif</p>
            </div>
          </div>
        </div>
      </div>

      <RegisterModal 
        isOpen={showRegisterModal} 
        onClose={() => setShowRegisterModal(false)} 
      />
    </section>
  );
};

export default Programs;