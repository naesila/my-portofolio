# 🚀 Portfolio Website - Setup Guide

## 📁 Struktur File yang Dibutuhkan

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Journey.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx
│   └── imports/
│       └── Group1000001751/
│           ├── (semua file .png dari Figma)
│           └── svg-cl4mrvounc.ts
├── package.json
└── (file konfigurasi lainnya)
```

## ✅ Langkah Setup

### 1. Download Proyek dari Figma Make
- Klik tombol "Download" atau "Export" di Figma Make
- Extract file ZIP yang di-download
- Semua file sudah siap pakai!

### 2. Atau Manual Setup di VS Code

Jika ingin setup manual:

1. Buat folder baru `my-portfolio`
2. Copy semua file dari dokumentasi ke folder yang sesuai
3. Pastikan folder `src/imports/Group1000001751/` berisi semua gambar dari Figma
4. Install dependencies dengan `npm install`
5. Jalankan dengan `npm run dev`

## 📝 File-file yang Sudah Dibuat

✅ App.tsx - Main component
✅ Navbar.tsx - Navigation bar dengan smooth scroll
✅ Hero.tsx - Hero section dengan foto dan CTA
✅ About.tsx - About section dengan statistik
✅ Skills.tsx - Skills cards dengan icons
✅ Portfolio.tsx - Portfolio grid dengan hover effects
✅ Journey.tsx - Organizational journey timeline
✅ Testimonials.tsx - Testimonial carousel
✅ Achievements.tsx - Achievement cards
✅ Contact.tsx - Contact form dan info
✅ Footer.tsx - Footer dengan social links

## 🎨 Customization

### Mengganti Warna Utama
Warna utama adalah `#fc3314` (merah). Untuk menggantinya:
- Search & replace `#fc3314` dengan warna baru Anda
- Search & replace `#1f1f1f` untuk warna hitam

### Mengganti Teks
Edit langsung di setiap komponen:
- **Hero.tsx** - Nama dan deskripsi
- **About.tsx** - Tentang Anda
- **Skills.tsx** - Keahlian Anda
- **Portfolio.tsx** - Project Anda
- **Journey.tsx** - Pengalaman Anda
- **Testimonials.tsx** - Testimoni
- **Achievements.tsx** - Pencapaian Anda
- **Contact.tsx** - Info kontak Anda

### Mengganti Gambar
- Ganti file gambar di folder `src/imports/Group1000001751/`
- Atau update import path di setiap komponen

## 🔧 Dependencies

Dependencies yang digunakan (sudah ada di package.json):
- React
- Tailwind CSS
- lucide-react (untuk icons)
- motion (untuk animasi - optional)

## 📱 Responsive Design

Website sudah responsive untuk:
- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

## 🌐 Deploy

Setelah selesai edit, Anda bisa deploy ke:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Atau hosting lainnya

## 💡 Tips

1. Edit satu section dulu, test, baru lanjut ke section lain
2. Gunakan browser DevTools untuk cek responsive
3. Ganti semua placeholder text dengan info Anda yang sebenarnya
4. Update link social media dengan link Anda
5. Test contact form sebelum publish

## 🆘 Troubleshooting

**Q: Gambar tidak muncul?**
A: Pastikan path import gambar sesuai dengan lokasi file

**Q: Font tidak sesuai?**
A: Install font yang dibutuhkan atau ganti dengan font yang Anda punya

**Q: Error saat npm install?**
A: Hapus folder node_modules dan package-lock.json, lalu install ulang

## 📞 Support

Jika ada pertanyaan, silakan edit file sesuai kebutuhan Anda!

---

© 2026 Portfolio Website - Built with React & Tailwind CSS
