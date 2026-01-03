export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      <section
        className="relative text-white py-20 md:py-32"
        style={{
          backgroundImage: "url('/assets/images/background-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-700 opacity-80"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ketahui Risiko Diabetes Anda Lebih Awal
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Gunakan alat pemeriksaan risiko diabetes kami yang canggih, cepat,
            dan berbasis data untuk menjaga kesehatan Anda.
          </p>
          <a
            href="/diabetes-check"
            className="bg-teal-500 hover:bg-teal-600 text-white hover:text-white font-semibold px-10 py-4 text-lg rounded-lg 
             transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 
             focus:ring-teal-400 focus:ring-opacity-75"
          >
            <i className="fas fa-play-circle mr-2"></i>
            Mulai Pemeriksaan
          </a>
        </div>
      </section>

      <section
        id="features"
        className="py-16 lg:py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-6 pb-6">
          {/* Container pertama: Counter Features */}
          <div className="container mx-auto px-6 pt-8 pb-12">
            {/* Features Analyisis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-blue-600 text-5xl font-extrabold mb-2">
                  250+
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  Pemeriksaan Dilakukan
                </p>
              </div>

              <div className="p-6">
                <div className="text-teal-500 text-5xl font-extrabold mb-2">
                  150+
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  Pengguna Terpercaya
                </p>
              </div>

              <div className="p-6">
                <div className="text-purple-600 text-5xl font-extrabold mb-2">
                  98%
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  Tingkat Kepuasan
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl pt-16 pb-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Mengapa Memilih
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Alat Kami?
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Teknologi terdepan untuk deteksi dini diabetes dengan akurasi
                tinggi dan rekomendasi yang dipersonalisasi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out text-center transform hover:-translate-y-4">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  Cepat & Mudah
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dapatkan hasil penilaian risiko dalam hitungan menit melalui
                  antarmuka yang intuitif dan user-friendly.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out text-center transform hover:-translate-y-4">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  Akurat & Terpercaya
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Analisis berdasarkan standar medis internasional dan
                  penelitian ilmiah terkini dari berbagai institusi kesehatan.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out text-center transform hover:-translate-y-4 md:col-span-2 lg:col-span-1">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  Rekomendasi Personal
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dapatkan saran langkah preventif yang disesuaikan dengan
                  profil kesehatan dan gaya hidup Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Bagaimana{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Cara Kerjanya?
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proses sederhana dalam 3 langkah untuk mendapatkan analisis risiko
              diabetes yang komprehensif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="relative flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full text-2xl font-bold mb-6 shadow-xl relative z-10">
                1
              </div>
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-green-300 transform translate-x-1/2 z-0"></div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl mb-6 shadow-lg">
                <i className="fas fa-edit fa-3x text-blue-500 mb-4"></i>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Isi Data Anda
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lengkapi informasi dasar mengenai kesehatan, riwayat keluarga,
                dan gaya hidup Anda dengan aman dan terenkripsi.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full text-2xl font-bold mb-6 shadow-xl relative z-10">
                2
              </div>
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-300 to-purple-300 transform translate-x-1/2 z-0"></div>

              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl mb-6 shadow-lg">
                <i className="fas fa-cogs fa-3x text-green-500 mb-4"></i>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Proses Analisis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sistem AI kami menganalisis data menggunakan algoritma machine
                learning yang telah divalidasi secara klinis.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full text-2xl font-bold mb-6 shadow-xl">
                3
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl mb-6 shadow-lg">
                <i className="fas fa-file-alt fa-3x text-purple-500 mb-4"></i>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Lihat Hasilnya
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dapatkan laporan detail risiko diabetes beserta rekomendasi
                tindak lanjut dan konsultasi dengan dokter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Apa Kata
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pengguna Kami?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ribuan pengguna telah merasakan manfaat deteksi dini diabetes
              dengan alat kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">
                  AR
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Aisha R.</h4>
                  <p className="text-sm text-green-600 font-medium">
                    Pengguna Aktif • Jakarta
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Sangat membantu untuk deteksi dini! Antarmukanya mudah dipahami
                dan sarannya sangat bermanfaat. Saya jadi lebih aware dengan
                kesehatan saya."
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">
                  BS
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Budi S.</h4>
                  <p className="text-sm text-green-600 font-medium">
                    Peduli Kesehatan • Bandung
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Aplikasi yang sangat berguna untuk memonitor risiko kesehatan.
                Hasil analisisnya detail dan mudah dipahami. Saya
                merekomendasikannya untuk keluarga!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>

        <div className="container mx-auto relative z-10 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Jaga Kesehatan Anda,
            <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent">
              Mulai Hari Ini
            </span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Jangan tunda lagi, lakukan pemeriksaan risiko diabetes sekarang dan
            ambil langkah proaktif untuk masa depan yang lebih sehat bersama
            keluarga.
          </p>
          <a
            href="/diabetes-check"
            className="bg-teal-500 hover:bg-teal-600 text-white hover:text-white font-semibold px-10 py-4 text-lg rounded-lg 
             transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 
             focus:ring-teal-400 focus:ring-opacity-75"
          >
            <i className="fas fa-play-circle mr-2"></i>
            Konsultasi dengan Dokter Asli
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4">
              <img
                src="/assets/images/logo-capstone-removebg.png"
                alt="Logo Capstone"
                className="w-20 h-20 object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Diabetes Risk Checker
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Deteksi dini untuk hidup yang lebih sehat
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="mb-2 text-gray-400">
              &copy; {new Date().getFullYear()} Diabetes Risk Checker. Semua Hak
              Dilindungi.
            </p>
            <p className="text-sm text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              <i className="fas fa-exclamation-triangle text-red-500 mr-1"></i>
              <strong>Peringatan:</strong> Alat ini adalah alat bantu skrining
              dan tidak menggantikan konsultasi medis profesional. Segera
              hubungi dokter untuk diagnosis dan penanganan lebih lanjut.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <img
                    src="https://cdn.simpleicons.org/instagram/ffffff"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </div>
              </a>

              <a
                href="https://wa.me/628xxxxxxxxx"
                aria-label="WhatsApp"
                className="group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <img
                    src="https://cdn.simpleicons.org/whatsapp/ffffff"
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />
                </div>
              </a>

              <a
                href="https://t.me/username"
                aria-label="Telegram"
                className="group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <img
                    src="https://cdn.simpleicons.org/telegram/ffffff"
                    alt="Telegram"
                    className="w-6 h-6"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
