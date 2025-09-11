import { Card, CardContent } from "@/components/ui/card";
import { Music, Palette, Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> ViMotion Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tempat di mana kreativitas bertemu dengan pembelajaran yang menyenangkan. 
            Kami hadir untuk mengembangkan bakat seni dan musik dengan pendekatan modern dan personal.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Cerita Kami</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ViMotion Academy lahir dari passion untuk memberikan pendidikan seni dan musik 
                yang berkualitas namun tetap menyenangkan. Kami percaya bahwa setiap orang 
                memiliki potensi kreatif yang unik.
              </p>
              <p>
                Dengan menggabungkan metode pembelajaran tradisional dan teknologi modern, 
                kami menciptakan lingkungan belajar yang inspiratif dan mendukung 
                perkembangan kreativitas tanpa batas.
              </p>
              <p>
                Sejak berdiri, kami telah membantu ratusan siswa menemukan passion mereka 
                dan mengembangkan keterampilan seni yang mengagumkan.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-0 shadow-creative">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">Misi Kami</h4>
                </div>
                <p className="text-muted-foreground">
                  Menghadirkan pendidikan seni dan musik yang berkualitas, terjangkau, 
                  dan dapat diakses oleh semua kalangan untuk mengembangkan kreativitas 
                  dan ekspresi diri.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-creative">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold">Visi Kami</h4>
                </div>
                <p className="text-muted-foreground">
                  Menjadi akademi seni dan musik terdepan yang melahirkan generasi 
                  kreatif Indonesia yang berprestasi dan berkarakter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Siswa Aktif</p>
          </div>
          
          <div className="text-center">
            <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <p className="text-muted-foreground">Prestasi Siswa</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <p className="text-muted-foreground">Tahun Pengalaman</p>
          </div>
          
          <div className="text-center">
            <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Palette className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <p className="text-muted-foreground">Program Kursus</p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Nilai-Nilai Kami</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-creative text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Kreativitas</h4>
                <p className="text-muted-foreground">
                  Mendorong setiap siswa untuk berekspresi dan mengeksplorasi 
                  ide-ide kreatif tanpa batas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-creative text-center">
              <CardContent className="p-8">
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Music className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Passion</h4>
                <p className="text-muted-foreground">
                  Mengajar dengan hati dan membantu siswa menemukan 
                  passion sejati mereka dalam seni dan musik.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-creative text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Komunitas</h4>
                <p className="text-muted-foreground">
                  Membangun komunitas kreatif yang saling mendukung 
                  dan menginspirasi satu sama lain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;