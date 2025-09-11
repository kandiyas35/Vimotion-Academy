import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialModal = ({ isOpen, onClose }: TrialModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.program) {
      toast({
        title: "Form Tidak Lengkap",
        description:
          "Mohon isi nama, nomor HP, dan pilih program yang diminati.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Pendaftaran Trial Berhasil!",
      description:
        "Tim kami akan segera menghubungi Anda untuk mengatur jadwal trial class gratis.",
    });

    // Reset form and close modal
    setFormData({
      name: "",
      phone: "",
      email: "",
      program: "",
      message: "",
    });
    onClose();
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Trial Class <span className="text-primary">Gratis!</span>
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Isi form di bawah untuk mendapatkan trial class gratis
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Nama Lengkap *
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Nomor WhatsApp *
            </label>
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
            <label className="text-sm font-medium mb-2 block">
              Program yang Diminati *
            </label>
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
            <label className="text-sm font-medium mb-2 block">
              Pesan (Opsional)
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Ceritakan tentang minat dan tujuan belajarmu..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Batal
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              Daftar Trial Gratis
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TrialModal;
