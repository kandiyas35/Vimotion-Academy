import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Memulai
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Perjalanan Kreatifmu?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hubungi kami sekarang untuk trial class gratis atau konsultasi program yang sesuai dengan minatmu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-creative">
            <CardHeader>
              <CardTitle className="text-2xl">Daftar Trial Class Gratis</CardTitle>
              <p className="text-muted-foreground">Isi form di bawah ini dan dapatkan trial class gratis!</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nama Lengkap</label>
                  <Input placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Nomor WhatsApp</label>
                  <Input placeholder="08xx-xxxx-xxxx" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="nama@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Program yang Diminati</label>
                <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                  <option value="">Pilih Program</option>
                  <option value="visual-arts">Seni Visual</option>
                  <option value="music">Musik</option>
                  <option value="both">Seni Visual & Musik</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Pesan (Opsional)</label>
                <Textarea placeholder="Ceritakan tentang minat dan tujuan belajarmu..." rows={4} />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Daftar Trial Gratis Sekarang
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-0 shadow-creative">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Alamat</p>
                      <p className="text-muted-foreground">
                        Jl. Kreatif No. 123, Kota Bandung<br />
                        Jawa Barat 40123
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Telepon / WhatsApp</p>
                      <p className="text-muted-foreground">+62 812-3456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@vimotionacademy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Jam Operasional</p>
                      <p className="text-muted-foreground">
                        Senin - Sabtu: 09:00 - 20:00<br />
                        Minggu: 10:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-creative">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                    <Youtube className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-muted-foreground mt-4">
                  Lihat karya-karya siswa kami dan tips belajar seni & musik di media sosial!
                </p>
              </CardContent>
            </Card>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">Promo Spesial!</h3>
              <p className="mb-4">Daftar sekarang dan dapatkan diskon 30% untuk bulan pertama!</p>
              <Button variant="creative" className="bg-white text-primary hover:bg-white/90">
                Ambil Promo Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;