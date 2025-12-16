'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Wrench, Settings, Cog, ChevronRight, Shield, FileText, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.svg" alt="CLATECH Logo" className="h-10 w-10 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">PT CLATECH</h1>
                <p className="text-xs text-gray-600">GEMILANG SEJAHTERA</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privasi</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Syarat & Ketentuan</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">Beranda</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">Layanan</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">Privasi</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded">Syarat & Ketentuan</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Solusi <span className="text-blue-600">Instalasi Mekanikal</span> Terpercaya
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                PT CLATECH GEMILANG SEJAHTERA - Ahli dalam instalasi mekanikal profesional untuk industri Anda. Pengalaman bertahun-tahun dalam memberikan solusi teknis terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Hubungi Kami
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Lihat Layanan
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Instalasi Profesional</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Settings className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Maintenance</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Cog className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Konsultasi Teknis</h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Shield className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Garansi Kualitas</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan instalasi mekanikal untuk memenuhi kebutuhan industri Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Instalasi Mekanikal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Instalasi sistem mekanikal industri dengan standar keselamatan tertinggi dan kualitas terbaik.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Maintenance & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Layanan perawatan dan perbaikan sistem mekanikal untuk menjaga operasional optimal.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Cog className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Konsultasi Teknis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Konsultasi dan perencanaan sistem mekanikal yang disesuaikan dengan kebutuhan spesifik Anda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-blue-600">PT CLATECH GEMILANG SEJAHTERA</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="ml-4 text-gray-700">
                    <strong>Pengalaman Bertahun-tahun</strong> - Tim profesional dengan pengalaman luas dalam instalasi mekanikal industri
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="ml-4 text-gray-700">
                    <strong>Kualitas Terjamin</strong> - Standar kualitas internasional dengan garansi untuk setiap pekerjaan
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="ml-4 text-gray-700">
                    <strong>Harga Kompetitif</strong> - Solusi efisien dengan harga yang kompetitif di pasar
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="ml-4 text-gray-700">
                    <strong>Dukungan 24/7</strong> - Layanan support dan emergency response kapan saja dibutuhkan
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Statistik Kami</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Klien Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Dukungan Teknis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap membantu kebutuhan instalasi mekanikal Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-600">
                        PERUMAHAN CIKANDE PERMAI BLOK P.20/17<br />
                        Desa/Kelurahan Cikande, Kec. Cikande<br />
                        Kab. Serang, Provinsi Banten
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-600">085353876138</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@clatech.co.id</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subjek
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Subjek pesan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tuliskan pesan Anda..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.svg" alt="CLATECH Logo" className="h-8 w-8 mr-2" />
                <div>
                  <h3 className="text-lg font-bold">PT CLATECH</h3>
                  <p className="text-xs text-gray-400">GEMILANG SEJAHTERA</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Solusi instalasi mekanikal terpercaya untuk industri Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Instalasi Mekanikal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance & Repair</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Teknis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>📞 085353876138</p>
                <p>📧 info@clatech.co.id</p>
                <p>📍 Cikande, Serang, Banten</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PT CLATECH GEMILANG SEJAHTERA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}