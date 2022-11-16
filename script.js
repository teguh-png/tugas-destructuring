const mobil = ["avansa", "brio", "civic", "xenia", "rush"];

// destructur Array
const [mobilSatu, mobilDua, mobilTiga, ...mobilLainnya] = mobil;
console.log(mobilSatu, mobilDua, mobilTiga, mobilLainnya);

const mahasiswa = {
  nama: "Teguh Firmansyah",
  nidn: 12345,
  kelas: "A1",
  alamat: "Makassar",
  tglLahir: {
    tanggal: 13,
    bulan: "Juli",
    tahun: "1997",
  },
};

// destructur Object
const {
  nama,
  nidn,
  kelas,
  tglLahir: { tanggal, bulan },
  ...infoLainnya
} = mahasiswa;

console.log(nama, nidn, kelas, tanggal, bulan, infoLainnya);

// destructur function
function printData({ nama, nidn, kelas }) {
  console.log(nama, nidn, kelas);
}

printData(mahasiswa);

// destructur alias dan default value
const mahasiswa2 = {
  nama: "adam",
  nidn: 54321,
  kelas: "A3",
  alamat: "Makassar",
  tglLahir: {
    tanggal: 11,
    bulan: "Agustus",
    tahun: "1997",
  },
};

function printData({ nama, nidn: stambuk, kelas, jurusan = "Teknik Informatika" }) {
  console.log(nama, stambuk, kelas, jurusan);
}

printData(mahasiswa2);
