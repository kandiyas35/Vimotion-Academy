import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    schedule: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.program || !formData.schedule) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon isi semua field yang wajib diisi.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Terima kasih! Tim kami akan segera menghubungi Anda untuk konfirmasi pendaftaran dan pembayaran.",
    });

    // Reset form and close modal
    setFormData({
      name: "",
      phone: "",
      email: "",
      program: "",
      schedule: "",
      message: ""
    });
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Daftar <span className="text-primary">Sekarang!</span>
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Wujudkan impian kreatifmu bersama ViMotion Academy
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Nama Lengkap *</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Nomor WhatsApp *</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="08xx-xxxx-xxxx"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="nama@email.com"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Program yang Dipilih *</label>
            <select 
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
              required
            >
              <option value="">Pilih Program</option>
              <option value="visual-arts">Seni Visual</option>
              <option value="music">Musik</option>
              <option value="both">Seni Visual & Musik</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Jadwal Preferensi *</label>
            <select 
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
              required
            >
              <option value="">Pilih Jadwal</option>
              <option value="weekday-morning">Weekday Pagi (09:00-12:00)</option>
              <option value="weekday-afternoon">Weekday Siang (13:00-16:00)</option>
              <option value="weekday-evening">Weekday Sore (16:00-19:00)</option>
              <option value="weekend-morning">Weekend Pagi (09:00-12:00)</option>
              <option value="weekend-afternoon">Weekend Siang (13:00-16:00)</option>
              <option value="weekend-evening">Weekend Sore (16:00-19:00)</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Pesan Tambahan</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Ceritakan tujuan belajar, pengalaman sebelumnya, atau pertanyaan lainnya..."
              rows={3}
            />
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Promo Spesial!</span><br />
              Dapatkan diskon 30% untuk bulan pertama
            </p>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Batal
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              Daftar Sekarang
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;