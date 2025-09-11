import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Music, Award, Play } from "lucide-react";

const Gallery = () => {
  const artworks = [
    {
      id: 1,
      title: "Portrait Digital Art",
      category: "Digital Art",
      student: "Sarah M.",
      image: "/placeholder.svg",
      type: "visual"
    },
    {
      id: 2,
      title: "Landscape Painting",
      category: "Lukis Manual",
      student: "Ahmad R.",
      image: "/placeholder.svg",
      type: "visual"
    },
    {
      id: 3,
      title: "Guitar Performance",
      category: "Musik",
      student: "Dinda P.",
      image: "/placeholder.svg",
      type: "music"
    },
    {
      id: 4,
      title: "Character Design",
      category: "Digital Art",
      student: "Kevin L.",
      image: "/placeholder.svg",
      type: "visual"
    },
    {
      id: 5,
      title: "Piano Composition",
      category: "Musik",
      student: "Maya S.",
      image: "/placeholder.svg",
      type: "music"
    },
    {
      id: 6,
      title: "Abstract Painting",
      category: "Lukis Manual",
      student: "Rizky A.",
      image: "/placeholder.svg",
      type: "visual"
    }
  ];

  const achievements = [
    {
      title: "Juara 1 Lomba Lukis SMA Se-Bandung",
      student: "Sarah Martinez",
      year: "2024"
    },
    {
      title: "Best Performance Festival Musik Pemuda",
      student: "Ahmad Riski",
      year: "2024"
    },
    {
      title: "Juara 2 Digital Art Competition",
      student: "Kevin Leonardo",
      year: "2023"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Galeri
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Karya Siswa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihat hasil karya menakjubkan dari siswa-siswa ViMotion Academy. 
            Setiap karya adalah bukti dedikasi dan kreativitas tanpa batas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artworks.map((artwork) => (
            <Card key={artwork.id} className="border-0 shadow-creative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {artwork.category}
                      </Badge>
                      {artwork.type === 'music' ? (
                        <Play className="w-8 h-8 text-white" />
                      ) : (
                        <Palette className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                <p className="text-muted-foreground">Karya: {artwork.student}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl p-8 shadow-creative">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Prestasi Siswa</h3>
            <p className="text-muted-foreground">
              Bangga dengan pencapaian luar biasa siswa-siswa kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{achievement.student}</p>
                  <Badge variant="outline">{achievement.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ingin karya Anda tampil di galeri kami?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Daftar Sekarang
            </a>
            <a 
              href="#contact" 
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Trial Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;