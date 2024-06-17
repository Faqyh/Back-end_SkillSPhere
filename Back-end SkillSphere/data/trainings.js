// data.js

const { v4: uuidv4 } = require('uuid');

let trainings = [
  {
    id: uuidv4(),
    nama_pelatihan: "Mobile App Developer",
    penyelenggara: "Dicoding Indonesia",
    durasi: 6,
    kelompok_umur : "15-30 Tahun",
    kategori: "Teknologi Informasi",
    deskripsi: "On the other hand we denounce with righteous indignation...",
    persyaratan: [
      "Pria/Wanita Berusia 18-40 Tahun",
      "Tidak Sedang Bekerja/Kuliah",
      "Memiliki Laptop/Komputer Minimum ram 4 GB",
      "Memahami dasar pemrograman mobile"
    ],
    fasilitas: [
      "E-Sertifikat",
      "Materi Pelatihan",
      "Akses Zoom"
    ],
    pendaftaran: "Agustus-September 2024",
    kontak: [
      "081234567890",
      "086231232132"
    ],
    link_pendaftaran: "www.dasdassd.com/daftar",
    sumber_informasi: "www.instagram.com/CAF7343ddere3"
  },
  {
    id: uuidv4(),
    nama_pelatihan: "Web Development Bootcamp",
    penyelenggara: "Codecademy",
    durasi: 8,
    kelompok_umur : "18-40 Tahun",
    kategori: "Teknologi Informasi",
    deskripsi: "This bootcamp will teach you the fundamentals of web development...",
    persyaratan: [
      "Pengalaman pemrograman tidak diperlukan",
      "Minat dalam pengembangan web"
    ],
    fasilitas: [
      "E-Sertifikat",
      "Materi Pelatihan",
      "Kelas online interaktif"
    ],
    pendaftaran: "Juli-Agustus 2024",
    kontak: [
      "email@codecademy.com",
      "08123123123"
    ],
    link_pendaftaran: "www.codecademy.com/bootcamps/web-development",
    sumber_informasi: "www.codecademy.com"
  },
  {
    id: uuidv4(),
    nama_pelatihan: "Data Science with Python",
    penyelenggara: "Coursera",
    durasi: 10,
    kelompok_umur : "30 Tahun ke atas",
    kategori: "Data Science",
    deskripsi: "Learn data science with Python in this comprehensive course...",
    persyaratan: [
      "Memiliki pengetahuan dasar tentang Python",
      "Minat dalam analisis data"
    ],
    fasilitas: [
      "Sertifikat kelulusan",
      "Materi pembelajaran",
      "Proyek akhir"
    ],
    pendaftaran: "September-Oktober 2024",
    kontak: [
      "support@coursera.org",
      "08123456789"
    ],
    link_pendaftaran: "www.coursera.org/datascience-python",
    sumber_informasi: "www.coursera.org"
  },
  // Tambahkan 5 data lainnya dengan format yang sama
];

module.exports = { trainings };
