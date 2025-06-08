// Gunakan ini buat data fil nya ya brok
const ALL_MOVIE_DATA = [
  {
    id: 1,
    title: "Dune: Part One",
    year: 2021,
    rating: "PG-13",
    duration: "2h 35m",
    label: "Epic Sci-Fi",
    description:
      "Paul Atreides, pemuda brilian dan berbakat yang ditakdirkan untuk hal besar, harus melakukan perjalanan ke planet paling berbahaya di alam semesta demi masa depan keluarga dan rakyatnya.",
    genres: ["Sci-fi", "Adventure", "Drama"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    posterSrc:
      "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_.jpg",
    backdropSrc:
      "https://a.ltrbxd.com/resized/sm/upload/a6/8b/5j/zk/dune-2021a-1200-1200-675-675-crop-000000.jpg?v=7422445327",
    youtubeId: "n9xhJrPXop4",
    isTrending: true,
    isNewRelease: false,
  },
  {
    id: 2,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    rating: "PG",
    duration: "2h 20m",
    label: "Animasi Terbaik",
    description:
      "Miles Morales melintasi Multiverse, bertemu tim Spider-People yang bertugas melindungi keberadaannya. Ketika para pahlawan berselisih, Miles harus melawan para Spider lainnya.",
    genres: ["Animation", "Action", "Adventure"],
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
    posterSrc:
      "https://www.movieposters.com/cdn/shop/files/spider-man-across-the-spider-verse_tsm61wbo.jpg?v=1684521170",
    backdropSrc:
      "https://m.media-amazon.com/images/S/pv-target-images/418f791d94eeeea9599373167f26de3334882d9e4b15ec503d597de98af99dbb.jpg",
    youtubeId: "shW9i6k8cB0",
    isTrending: true,
    isNewRelease: true,
  },
  {
    id: 3,
    title: "Oppenheimer",
    year: 2023,
    rating: "R",
    duration: "3h 0m",
    label: "Karya Kritis",
    description:
      "Kisah ilmuwan Amerika J. Robert Oppenheimer dan perannya yang monumental dalam pengembangan bom atom selama Perang Dunia II.",
    genres: ["Biography", "Drama", "History"],
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
    posterSrc:
      "https://cinemags.org/?attachment_id=195382",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    youtubeId: "uYPbbksJxIg",
    isTrending: false,
    isNewRelease: true,
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    rating: "PG-13",
    duration: "3h 1m",
    label: "Blockbuster Hit",
    description:
      "Melanjutkan Avengers: Infinity War, dimana kejadian setelah Thanos berhasil mendapatkan semua infinity stones dan memusnahkan 50% semua mahluk hidup di alam semesta.",
    genres: ["Adventure", "Sci-fi", "Action"],
    director: "Anthony & Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    posterSrc:
      "https://images-cdn.ubuy.co.id/634ffe4b05d16a708944a5ec-avengers-endgame-movie-poster-2-sided.jpg",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/hP2i2C3s1aD2yfg3d2Uv3h2w2gC.jpg",
    youtubeId: "TcMBFSGVi1c",
    isTrending: true,
    isNewRelease: false,
  },
  {
    id: 5,
    title: "The Dark Knight",
    year: 2008,
    rating: "PG-13",
    duration: "2h 32m",
    label: "Ikonik",
    description:
      "Ketika ancaman yang dikenal sebagai Joker membuat kekacauan di Gotham City, Batman harus menerima salah satu ujian psikologis dan fisik terbesar dari kemampuannya untuk melawan ketidakadilan.",
    genres: ["Drama", "Action", "Crime", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    posterSrc: "https://i.pinimg.com/736x/ea/a2/6e/eaa26e2c3bfa234c3cdd3c4d9fabad35.jpg",
    backdropSrc:
      "https://reformasi.co.id/wp-content/uploads/2024/12/batman-begins-the-dark-knight.webp",
    youtubeId: "EXeTwQWrcwY",
    isTrending: true,
    isNewRelease: false,
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    rating: "PG-13",
    duration: "2h 28m",
    label: "Mind-Bending",
    description:
      "Seorang pencuri yang mencuri rahasia perusahaan melalui penggunaan teknologi berbagi mimpi diberi tugas mustahil untuk menanamkan ide ke dalam pikiran seorang CEO.",
    genres: ["Action", "Sci-fi", "Adventure"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    posterSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyjBC4dx19LTH6CBmbDIpNCrelbYJSplrUA&s",
    backdropSrc:
      "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
    youtubeId: "YoHD9XEInc0",
    isTrending: false,
    isNewRelease: false,
  },
  {
    id: 7,
    title: "Parasite",
    year: 2019,
    rating: "R",
    duration: "2h 12m",
    label: "Pemenang Oscar",
    description:
      "Keserakahan dan diskriminasi kelas mengancam hubungan simbiosis yang baru terbentuk antara keluarga kaya Park dan keluarga miskin Kim.",
    genres: ["Comedy", "Thriller", "Drama"],
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    posterSrc:
      "https://tabloidnyata.com/wp-content/uploads/2020/02/poster-film-parasite-2019-scaled.jpg",
    backdropSrc:
      "https://mmc.tirto.id/image/otf/640x0/2019/06/24/paraaasiteee-imdb_ratio-16x9.jpg",
    youtubeId: "5xH0HfJHsaY",
    isTrending: true,
    isNewRelease: false,
  },
  {
    id: 8,
    title: "John Wick: Chapter 4",
    year: 2023,
    rating: "R",
    duration: "2h 49m",
    label: "Aksi Terbaik",
    description:
      "John Wick mengungkap jalan untuk mengalahkan The High Table. Tapi sebelum dia bisa mendapatkan kebebasannya, Wick harus menghadapi musuh baru dengan aliansi kuat di seluruh dunia.",
    genres: ["Action", "Thriller", "Crime"],
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
    posterSrc: "https://m.media-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.jpg",
    backdropSrc:
      "https://thumbor.prod.vidiocdn.com/jIIobKxE5kOFjlp-PSrPGXP-afQ=/1920x1080/filters:quality(70)/vidio-web-prod-film/uploads/film/image_landscape/11217/john-wick-chapter-4-ec40d1.jpg",
    youtubeId: "qEVUtrk8_B4",
    isTrending: true,
    isNewRelease: true,
  },
];

window.ALL_MOVIE_DATA = ALL_MOVIE_DATA;
