'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Users, DollarSign, Shield, AlertTriangle, CheckCircle, Clock, Gavel } from 'lucide-react'

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('general')

  const sections = [
    { id: 'general', title: 'Ketentuan Umum', icon: FileText },
    { id: 'services', title: 'Layanan', icon: Users },
    { id: 'payment', title: 'Pembayaran', icon: DollarSign },
    { id: 'warranty', title: 'Garansi', icon: Shield },
    { id: 'liability', title: 'Tanggung Jawab', icon: Gavel },
    { id: 'termination', title: 'Pemutusan', icon: AlertTriangle },
  ]

  const content = {
    general: {
      title: 'Ketentuan Umum',
      subtitle: 'Syarat dan Ketentuan Layanan PT CLATECH GEMILANG SEJAHTERA',
      lastUpdated: '1 Desember 2024',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Penerimaan Ketentuan</h3>
        <p class="mb-4">Dengan menggunakan layanan instalasi mekanikal dari PT CLATECH GEMILANG SEJAHTERA, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda tidak boleh menggunakan layanan kami.</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">2. Definisi</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>"Perusahaan"</strong> merujuk pada PT CLATECH GEMILANG SEJAHTERA</li>
          <li><strong>"Klien"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan kami</li>
          <li><strong>"Layanan"</strong> merujuk pada semua layanan instalasi mekanikal yang kami sediakan</li>
          <li><strong>"Proyek"</strong> merujuk pada pekerjaan instalasi mekanikal spesifik yang dilakukan untuk Klien</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Hubungan Kontraktual</h3>
        <p class="mb-4">Hubungan antara Perusahaan dan Klien adalah hubungan kontraktual independen. Tidak ada kemitraan, joint venture, atau hubungan kerja yang dibuat melalui penggunaan layanan kami.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">4. Perubahan Ketentuan</h3>
        <p class="mb-4">Perusahaan berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif setelah diumumkan melalui website atau komunikasi langsung dengan Klien.</p>
      `
    },
    services: {
      title: 'Ketentuan Layanan',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Ruang Lingkup Layanan</h3>
        <p class="mb-4">PT CLATECH GEMILANG SEJAHTERA menyediakan layanan instalasi mekanikal meliputi:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Instalasi sistem mekanikal industri</li>
          <li>Perawatan dan maintenance sistem mekanikal</li>
          <li>Repair dan troubleshooting sistem mekanikal</li>
          <li>Konsultasi teknis untuk instalasi mekanikal</li>
          <li>Emergency service untuk keadaan darurat</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Standar Kualitas</h3>
        <p class="mb-4">Semua layanan akan dilakukan sesuai dengan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Standar keselamatan kerja yang berlaku di Indonesia</li>
          <li>Spesifikasi teknis yang disepakati dalam kontrak</li>
          <li>Best practice industri instalasi mekanikal</li>
          <li>Peraturan dan perundang-undangan yang relevan</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Waktu Pelaksanaan</h3>
        <p class="mb-4">Waktu pelaksanaan proyek akan ditentukan berdasarkan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kompleksitas dan skala proyek</li>
          <li>Ketersediaan material dan peralatan</li>
          <li>Kondisi lapangan dan akses lokasi</li>
          <li>Faktor eksternal yang memengaruhi pekerjaan</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">4. Kewajiban Klien</h3>
        <p class="mb-4">Klien berkewajiban untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Memberikan informasi yang akurat tentang kebutuhan proyek</li>
          <li>Menyediakan akses yang aman ke lokasi kerja</li>
          <li>Memastikan lokasi memenuhi persyaratan keselamatan</li>
          <li>Memberikan izin yang diperlukan untuk pelaksanaan pekerjaan</li>
        </ul>
      `
    },
    payment: {
      title: 'Ketentuan Pembayaran',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Struktur Pembayaran</h3>
        <p class="mb-4">Pembayaran untuk layanan kami mengikuti struktur berikut:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Uang Muka (DP):</strong> 30-50% dari total nilai kontrak</li>
          <li><strong>Progress Payment:</strong> Sesuai milestone yang disepakati</li>
          <li><strong>Pelunasan:</strong> Setelah pekerjaan selesai dan diserahkan</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Metode Pembayaran</h3>
        <p class="mb-4">Kami menerima metode pembayaran berikut:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Transfer bank ke rekening perusahaan</li>
          <li>Check (dengan konfirmasi clearance)</li>
          <li>Metode lain yang disepakati dalam kontrak</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Jatuh Tempo Pembayaran</h3>
        <p class="mb-4">Semua invoice harus dibayar dalam waktu:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>7 hari kerja untuk invoice uang muka</li>
          <li>14 hari kerja untuk invoice progress</li>
          <li>7 hari kerja setelah penyerahan untuk invoice pelunasan</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">4. Keterlambatan Pembayaran</h3>
        <p class="mb-4">Jika pembayaran terlambat:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Akan dikenakan bunga keterlambatan 2% per bulan</li>
          <li>Perusahaan berhak menangguhkan pekerjaan</li>
          <li>Biaya penagihan dapat dibebankan kepada Klien</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">5. Biaya Tambahan</h3>
        <p class="mb-4">Biaya tambahan mungkin berlaku untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Perubahan scope pekerjaan yang disetujui</li>
          <li>Material tambahan di luar spesifikasi awal</li>
          <li>Lembur dan kerja di luar jam normal</li>
          <li>Emergency service di luar jam kerja</li>
        </ul>
      `
    },
    warranty: {
      title: 'Ketentuan Garansi',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Masa Garansi</h3>
        <p class="mb-4">PT CLATECH GEMILANG SEJAHTERA memberikan garansi untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Instalasi Baru:</strong> 12 bulan dari tanggal penyerahan</li>
          <li><strong>Repair:</strong> 6 bulan dari tanggal penyelesaian</li>
          <li><strong>Maintenance:</strong> 3 bulan dari tanggal layanan</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Cakupan Garansi</h3>
        <p class="mb-4">Garansi mencakup:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kesalahan instalasi dari pihak kami</li>
          <li>Defect material yang kami sediakan</li>
          <li>Kegagalan fungsi akibat kesalahan pemasangan</li>
          <li>Service call untuk issue yang terkait dengan pekerjaan kami</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Tidak Termasuk Garansi</h3>
        <p class="mb-4">Garansi tidak berlaku untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kerusakan akibat penggunaan yang tidak semestinya</li>
          <li>Modifikasi yang dilakukan tanpa persetujuan kami</li>
          <li>Kerusakan akibat bencana alam atau force majeure</li>
          <li>Maintenance yang tidak dilakukan sesuai anjuran</li>
          <li>Penggunaan spare part yang bukan dari kami</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">4. Klaim Garansi</h3>
        <p class="mb-4">Untuk mengajukan klaim garansi:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Laporkan masalah secara tertulis dalam 7 hari kerja</li>
          <li>Sediakan dokumentasi yang relevan</li>
          <li>Berikan akses untuk inspeksi dan perbaikan</li>
          <li>Biaya transportasi dan akomodasi ditanggung Klien untuk lokasi di luar area kami</li>
        </ul>
      `
    },
    liability: {
      title: 'Batasan Tanggung Jawab',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Tanggung Jawab Perusahaan</h3>
        <p class="mb-4">PT CLATECH GEMILANG SEJAHTERA bertanggung jawab untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Melaksanakan pekerjaan sesuai standar profesional</li>
          <li>Memastikan keselamatan kerja selama pelaksanaan proyek</li>
          <li>Memberikan garansi untuk pekerjaan yang dilakukan</li>
          <li>Mengindahkan peraturan dan hukum yang berlaku</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Batasan Tanggung Jawab</h3>
        <p class="mb-4">Tanggung jawab Perusahaan dibatasi oleh:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Maksimal nilai kontrak untuk setiap insiden</li>
          <li>Kerusakan langsung yang dapat diprediksi</li>
          <li>Tidak termasuk kehilangan keuntungan atau bisnis</li>
          <li>Tidak termasuk kerusakan akibat force majeure</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Force Majeure</h3>
        <p class="mb-4">Perusahaan tidak bertanggung jawab atas keterlambatan atau kegagalan akibat:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Bencana alam (gempa, banjir, tsunami)</li>
          <li>Perang, kerusuhan, atau kondisi sosial</li>
          <li>Kebijakan pemerintah yang memengaruhi operasi</li>
          <li>Pemogokan atau lockout</li>
          <li>Kondisi cuaca ekstrem yang tidak dapat dihindari</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">4. Asuransi</h3>
        <p class="mb-4">Perusahaan memiliki asuransi untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Kecelakaan kerja untuk tenaga kerja</li>
          <li>Liability umum selama operasional</li>
          <li>Perlindungan aset perusahaan</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">5. Indemnifikasi</h3>
        <p class="mb-4">Klien setuju untuk mengganti rugi Perusahaan dari:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Klaim pihak ketiga akibat kelalaian Klien</li>
          <li>Kerusakan properti akibat instruksi Klien</li>
          <li>Pelanggaran hak kekayaan intelektual</li>
        </ul>
      `
    },
    termination: {
      title: 'Pemutusan Kontrak',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">1. Pemutusan oleh Perusahaan</h3>
        <p class="mb-4">Perusahaan berhak memutuskan kontrak jika:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Klien gagal membayar sesuai jadwal</li>
          <li>Klien melanggar ketentuan kontrak material</li>
          <li>Klien memberikan informasi yang palsu atau menyesatkan</li>
          <li>Kondisi kerja menjadi tidak aman untuk tim kami</li>
          <li>Force majeure yang membuat pelaksanaan tidak mungkin</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Pemutusan oleh Klien</h3>
        <p class="mb-4">Klien dapat memutuskan kontrak dengan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Pemberitahuan tertulis 30 hari sebelumnya</li>
          <li>Pembayaran semua pekerjaan yang telah selesai</li>
          <li>Pembayaran biaya pembatalan sesuai ketentuan</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Konsekuensi Pemutasan</h3>
        <p class="mb-4">Setelah pemutusan kontrak:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Semua pembayaran yang jatuh tempo menjadi segera lunas</li>
          <li>Perusahaan akan menyerahkan pekerjaan yang sudah selesai</li>
          <li>Klien bertanggung jawab atas biaya material yang sudah dipesan</li>
          <li>Hak dan kewajiban yang sudah timbul tetap berlaku</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">4. Penyelesaian Sengketa</h3>
        <p class="mb-4">Sengketa akan diselesaikan melalui:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Negosiasi damai terlebih dahulu</li>
            <li>Mediasi jika negosiasi gagal</li>
          <li>Arbitrase di Badan Arbitrase Nasional Indonesia (BANI)</li>
          <li>Pengadilan jika semua cara lain gagal</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">5. Yurisdiksi</h3>
        <p class="mb-4">Kontrak ini diatur oleh hukum Indonesia dan semua sengketa akan diselesaikan di pengadilan yang memiliki yurisdiksi di lokasi Perusahaan berkedudukan.</p>
      `
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-blue-900">PT CLATECH</h1>
                <p className="text-xs text-gray-600">GEMILANG SEJAHTERA</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gavel className="h-5 w-5 mr-2 text-blue-600" />
                  Navigasi Syarat
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-3 flex items-center transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="h-4 w-4 mr-3" />
                        {section.title}
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {content[activeSection].title}
                    </CardTitle>
                    {content[activeSection].subtitle && (
                      <p className="text-gray-600">{content[activeSection].subtitle}</p>
                    )}
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>Diperbarui:</p>
                    <p>{content[activeSection].lastUpdated || '1 Desember 2024'}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: content[activeSection].content }}
                />
                
                {activeSection === 'general' && (
                  <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Penting Dibaca</h4>
                        <p className="text-amber-800 mb-3">
                          Syarat dan ketentuan ini merupakan bagian integral dari kontrak layanan kami. Pastikan Anda membaca dan memahami semua ketentuan sebelum menggunakan layanan PT CLATECH GEMILANG SEJAHTERA.
                        </p>
                        <div className="space-y-1 text-sm text-amber-700">
                          <p><strong>Hubungi kami untuk pertanyaan:</strong></p>
                          <p>📞 085353876138</p>
                          <p>📧 info@clatech.co.id</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'services' && (
                  <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Komitmen Kualitas</h4>
                        <p className="text-green-800">
                          Kami berkomitmen untuk memberikan layanan terbaik dengan standar keselamatan tertinggi dan kualitas yang dapat diandalkan untuk setiap proyek instalasi mekanikal Anda.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'payment' && (
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Informasi Pembayaran</h4>
                        <p className="text-blue-800 mb-3">
                          Semua pembayaran harus dilakukan ke rekening resmi PT CLATECH GEMILANG SEJAHTERA. Kami tidak bertanggung jawab atas pembayaran ke rekening pribadi atau pihak ketiga.
                        </p>
                        <div className="text-sm text-blue-700">
                          <p>Untuk informasi rekening, silakan hubungi tim keuangan kami.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}