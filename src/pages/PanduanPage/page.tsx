export default function PanduanPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Panduan Pemeriksaan Diabetes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Pelajari cara melakukan pemeriksaan risiko diabetes dengan dua
            metode yang tersedia di aplikasi kami.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Cek via Formulir
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  1. Persiapan Data
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Siapkan data berikut untuk hasil yang lebih akurat:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-6">
                  <li>Informasi Gender dan Usia.</li>
                  <li>Status riwayat Hipertensi & Penyakit Jantung.</li>
                  <li>Data Indeks Massa Tubuh (BMI) Anda.</li>
                  <li>Hasil tes lab: Kadar Glukosa Darah & HbA1c.</li>
                  <li>Informasi riwayat merokok.</li>
                </ul>

                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  2. Langkah-langkah
                </h3>
                <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
                  <li>
                    Buka halaman "Check Diabetes", lalu pilih tab "Form Check".
                  </li>
                  <li>
                    Isi semua kolom pada formulir sesuai data yang Anda miliki.
                  </li>
                  <li>
                    Klik tombol "Check Diabetes Risk" untuk memulai analisis.
                  </li>
                  <li>
                    Hasil analisis dan rekomendasi akan ditampilkan di bawah
                    formulir.
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Cek via Retina Mata
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  1. Persiapan Gambar
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Anda hanya memerlukan satu hal:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 mb-6">
                  <li>
                    File gambar retina mata Anda dalam format JPG atau PNG.
                    Pastikan gambar jelas dan tidak buram.
                  </li>
                </ul>

                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  2. Langkah-langkah
                </h3>
                <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
                  <li>
                    Buka halaman "Check Diabetes", lalu pilih tab "Check
                    Retina".
                  </li>
                  <li>
                    Klik pada area upload untuk memilih file gambar dari
                    perangkat Anda.
                  </li>
                  <li>
                    Setelah nama file muncul, klik tombol "Analyze Retina
                    Image".
                  </li>
                  <li>
                    Tunggu beberapa saat hingga sistem selesai menganalisis.
                  </li>
                  <li>
                    Hasil analisis berupa gambar dan diagnosis akan ditampilkan.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-yellow-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.168 16.5c-.77.833.192 2.5 1.732 2.5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Catatan Penting
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3 mt-6 text-center">
              <div>
                <h4 className="font-semibold text-gray-800">Prediktif</h4>
                <p className="text-gray-600 text-sm">
                  Hasil pemeriksaan adalah prediksi berbasis machine learning,
                  bukan diagnosis medis final.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Konsultasi</h4>
                <p className="text-gray-600 text-sm">
                  Selalu konsultasikan hasil apa pun dengan dokter atau tenaga
                  medis profesional.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Monitoring</h4>
                <p className="text-gray-600 text-sm">
                  Lakukan pemeriksaan kesehatan secara rutin untuk memonitor
                  kondisi Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
