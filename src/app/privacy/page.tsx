'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, FileText, AlertCircle } from 'lucide-react'

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Ringkasan', icon: FileText },
    { id: 'collection', title: 'Pengumpulan Data', icon: UserCheck },
    { id: 'usage', title: 'Penggunaan Data', icon: Eye },
    { id: 'protection', title: 'Perlindungan Data', icon: Shield },
    { id: 'rights', title: 'Hak Anda', icon: Lock },
  ]

  const content = {
    overview: {
      title: 'Kebijakan Privasi',
      subtitle: 'PT CLATECH GEMILANG SEJAHTERA',
      lastUpdated: '1 Desember 2024',
      content: `
        <p class="mb-4">Di PT CLATECH GEMILANG SEJAHTERA, kami sangat memegang teguh privasi dan keamanan data pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan instalasi mekanikal kami.</p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">Komitmen Kami</h3>
        <p class="mb-4">Kami berkomitmen untuk:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Melindungi privasi data pribadi Anda dengan standar keamanan tertinggi</li>
          <li>Transparan dalam pengumpulan dan penggunaan data</li>
          <li>Memberikan kontrol penuh kepada Anda atas data pribadi Anda</li>
          <li>Mematuhi semua peraturan privasi yang berlaku di Indonesia</li>
        </ul>
      `
    },
    collection: {
      title: 'Pengumpulan Data Pribadi',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">Data yang Kami Kumpulkan</h3>
        <p class="mb-4">Kami dapat mengumpulkan jenis informasi berikut:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">Informasi Identifikasi Pribadi</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Nama lengkap</li>
          <li>Alamat email</li>
          <li>Nomor telepon</li>
          <li>Alamat perusahaan atau rumah</li>
          <li>Informasi kontak lainnya</li>
        </ul>

        <h4 class="text-lg font-semibold mt-4 mb-2">Informasi Bisnis</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Nama perusahaan</li>
          <li>Jenis industri</li>
          <li>Kebutuhan instalasi mekanikal</li>
          <li>Informasi proyek</li>
        </ul>

        <h4 class="text-lg font-semibold mt-4 mb-2">Cara Pengumpulan</h4>
        <p class="mb-4">Kami mengumpulkan data melalui:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Formulir kontak di website</li>
          <li>Komunikasi langsung (telepon, email)</li>
          <li>Penawaran dan konsultasi layanan</li>
          <li>Interaksi selama proyek berlangsung</li>
        </ul>
      `
    },
    usage: {
      title: 'Penggunaan Data Pribadi',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">Tujuan Penggunaan Data</h3>
        <p class="mb-4">Kami menggunakan data pribadi Anda untuk:</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Layanan Pelanggan:</strong> Menyediakan layanan instalasi mekanikal yang berkualitas</li>
          <li><strong>Komunikasi:</strong> Menghubungi Anda terkait penawaran, konfirmasi, dan update proyek</li>
          <li><strong>Penawaran Harga:</strong> Membuat penawaran yang disesuaikan dengan kebutuhan Anda</li>
          <li><strong>Penagihan:</strong> Proses invoice dan pembayaran</li>
          <li><strong>Improvement Layanan:</strong> Menganalisis kebutuhan untuk meningkatkan kualitas layanan</li>
          <li><strong>Legal Compliance:</strong> Memenuhi kewajiban hukum dan peraturan</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">Basis Hukum Penggunaan</h3>
        <p class="mb-4">Penggunaan data Anda didasarkan pada:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Persetujuan yang Anda berikan</li>
          <li>Kontrak layanan antara Anda dan perusahaan kami</li>
          <li>Kewajiban hukum yang harus kami penuhi</li>
          <li>Kepentingan sah yang sah dan wajar</li>
        </ul>
      `
    },
    protection: {
      title: 'Perlindungan Data Pribadi',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">Keamanan Data</h3>
        <p class="mb-4">PT CLATECH GEMILANG SEJAHTERA menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">Teknis Keamanan</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Enkripsi data saat transmisi dan penyimpanan</li>
          <li>Firewall dan sistem deteksi intrusi</li>
          <li>Access control yang ketat untuk data sensitif</li>
          <li>Regular security audit dan vulnerability scanning</li>
        </ul>

        <h4 class="text-lg font-semibold mt-4 mb-2">Prosedur Internal</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Training reguler untuk staf tentang keamanan data</li>
          <li>Kebijakan akses minimum privilege</li>
          <li>Prosedur backup dan recovery yang aman</li>
          <li>Incident response plan untuk breach data</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">Penyimpanan Data</h3>
        <p class="mb-4">Data pribadi Anda disimpan dengan:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Server yang aman dan terenkripsi</li>
          <li>Lokasi penyimpanan yang memenuhi standar keamanan</li>
          <li>Periode retensi yang sesuai dengan kebutuhan bisnis</li>
          <li>Prosedur penghapusan data yang aman</li>
        </ul>
      `
    },
    rights: {
      title: 'Hak Privasi Anda',
      content: `
        <h3 class="text-xl font-semibold mt-6 mb-3">Hak Data Pribadi Anda</h3>
        <p class="mb-4">Sebagai pemilik data, Anda memiliki hak-hak berikut:</p>
        
        <h4 class="text-lg font-semibold mt-4 mb-2">Hak Akses</h4>
        <p class="mb-4">Anda berhak mengetahui data pribadi apa yang kami simpan tentang Anda dan bagaimana kami menggunakannya.</p>

        <h4 class="text-lg font-semibold mt-4 mb-2">Hak Koreksi</h4>
        <p class="mb-4">Anda dapat meminta perbaikan data pribadi yang tidak akurat atau tidak lengkap.</p>

        <h4 class="text-lg font-semibold mt-4 mb-2">Hak Penghapusan</h4>
        <p class="mb-4">Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu.</p>

        <h4 class="text-lg font-semibold mt-4 mb-2">Hak Pembatasan</h4>
        <p class="mb-4">Anda dapat membatasi pemrosesan data pribadi Anda dalam kondisi tertentu.</p>

        <h4 class="text-lg font-semibold mt-4 mb-2">Hak Portabilitas</h4>
        <p class="mb-4">Anda berhak menerima data pribadi Anda dalam format yang terstruktur dan dapat digunakan.</p>

        <h3 class="text-xl font-semibold mt-6 mb-3">Cara Menjalankan Hak Anda</h3>
        <p class="mb-4">Untuk menjalankan hak-hak Anda, silakan hubungi kami melalui:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Email: privacy@clatech.co.id</li>
          <li>Telepon: 085353876138</li>
          <li>Alamat: PERUMAHAN CIKANDE PERMAI BLOK P.20/17, Cikande, Serang, Banten</li>
        </ul>

        <p class="mb-4">Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.</p>
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
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Navigasi Kebijakan
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
                
                {activeSection === 'overview' && (
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Pertanyaan atau Kekhawatiran?</h4>
                        <p className="text-blue-800 mb-3">
                          Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau cara kami menangani data pribadi Anda, jangan ragu untuk menghubungi kami.
                        </p>
                        <div className="space-y-1 text-sm text-blue-700">
                          <p><strong>Email:</strong> privacy@clatech.co.id</p>
                          <p><strong>Telepon:</strong> 085353876138</p>
                          <p><strong>Alamat:</strong> PERUMAHAN CIKANDE PERMAI BLOK P.20/17, Cikande, Serang, Banten</p>
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