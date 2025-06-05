document.addEventListener("DOMContentLoaded", () => {

  // Salin ini ya
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");
  const mobileLinks = document.querySelectorAll(".mobile-menu ul li a");

  if (hamburgerBtn && mobileMenu && closeBtn) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        mobileMenu.classList.remove("active");
      });
    });
  }

  // Sampai sini

  const videoModal = document.getElementById("video-modal");
  const youtubeIframe = document.getElementById("youtube-video-iframe");
  const modalCloseBtn = videoModal
    ? videoModal.querySelector(".modal-close-btn")
    : null;

  const playButtons = document.querySelectorAll(".card-trailer .button-play");

  playButtons.forEach((button) => {
    button.style.cursor = "pointer";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const card = button.closest(".card-trailer");
      const youtubeId = card ? card.dataset.youtubeId : null;
      if (youtubeId && videoModal && youtubeIframe) {
        youtubeIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
        videoModal.classList.add("active");
      } else {
        if (!card)
          console.warn("Tombol play tidak berada di dalam .card-trailer");
        if (!youtubeId)
          console.warn("Tombol play ini tidak memiliki data-youtube-id:", card);
        if (!videoModal) console.warn("Elemen modal video tidak ditemukan.");
        if (!youtubeIframe)
          console.warn("Elemen iframe video tidak ditemukan.");
      }
    });
  });

  function closeModal() {
    if (videoModal && youtubeIframe) {
      videoModal.classList.remove("active");
      setTimeout(() => {
        youtubeIframe.src = "";
      }, 300);
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (videoModal) {
    videoModal.addEventListener("click", (event) => {
      if (event.target === videoModal) {
        closeModal();
      }
    });
  }

  const heroSliderSection = document.querySelector(".slider-section");

  if (heroSliderSection) {
    const slideData = [
      {
        imgSrc:
          "https://miro.medium.com/v2/resize:fit:1400/0*gmoNFDJEnzHEFzj5.jpg",
        label: "Epic Sci-Fi",
        title: "Dune: Part One",
        description:
          "Paul Atreides, pemuda brilian dan berbakat yang ditakdirkan untuk hal besar, harus melakukan perjalanan ke planet paling berbahaya di alam semesta demi masa depan keluarga dan rakyatnya.",
        genreText: "Sci-fi, Adventure, Drama",
        youtubeId: "n9xhJrPXop4",
      },
      {
        imgSrc:
          "https://cineverse.id/wp-content/uploads/2023/05/review-122-spider-man-across-the-spider-verse-6.jpg",
        label: "Animasi Terbaik",
        title: "Spider-Man: Across the Spider-Verse",
        description:
          "Miles Morales melintasi Multiverse, bertemu tim Spider-People yang bertugas melindungi keberadaannya. Ketika para pahlawan berselisih, Miles harus melawan para Spider lainnya.",
        genreText: "Animation, Action, Adventure",
        youtubeId: "shW9i6k8cB0",
      },
      {
        imgSrc:
          "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        label: "Karya Kritis",
        title: "Oppenheimer",
        description:
          "Kisah ilmuwan Amerika J. Robert Oppenheimer dan perannya yang monumental dalam pengembangan bom atom selama Perang Dunia II.",
        genreText: "Biography, Drama, History",
        youtubeId: "uYPbbksJxIg",
      },
    ];

    const bgImageEl = document.getElementById("hero-slider-bg");
    const labelEl = document.getElementById("hero-slider-label");
    const titleEl = document.getElementById("hero-slider-title");
    const descriptionEl = document.getElementById("hero-slider-description");
    const genreTextEl = document.getElementById("hero-slider-genre-text");
    const prevBtn = document.getElementById("hero-slider-prev-btn");
    const nextBtn = document.getElementById("hero-slider-next-btn");
    const mainPlayBtn = document.getElementById("hero-slider-play-btn");
    const sliderTextContentEl =
      heroSliderSection.querySelector(".slider-content");

    let currentSlideIndex = 0;
    const maxSlides = 3;
    const actualSlideCount = Math.min(slideData.length, maxSlides);

    function renderSlide(index) {
      if (
        !slideData[index] ||
        !bgImageEl ||
        !labelEl ||
        !titleEl ||
        !descriptionEl ||
        !genreTextEl
      ) {
        return;
      }
      const data = slideData[index];

      if (sliderTextContentEl) {
        sliderTextContentEl.style.animation = "none";
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            sliderTextContentEl.style.animation =
              "contentEntry 0.8s ease-out forwards";
          });
        });
      }

      if (bgImageEl) {
        bgImageEl.style.opacity = 0.3;
        setTimeout(() => {
          bgImageEl.src = data.imgSrc;
          bgImageEl.alt = data.title + " background";
          bgImageEl.style.opacity = 1;
        }, 200);
      }

      labelEl.textContent = data.label;
      titleEl.textContent = data.title;
      descriptionEl.textContent = data.description;
      genreTextEl.textContent = data.genreText;

      if (mainPlayBtn) {
        mainPlayBtn.dataset.currentYoutubeId = data.youtubeId;
      }
    }

    function showNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % actualSlideCount;
      renderSlide(currentSlideIndex);
    }

    function showPrevSlide() {
      currentSlideIndex =
        (currentSlideIndex - 1 + actualSlideCount) % actualSlideCount;
      renderSlide(currentSlideIndex);
    }

    if (actualSlideCount > 0) {
      renderSlide(currentSlideIndex);

      if (prevBtn && nextBtn) {
        if (actualSlideCount > 1) {
          prevBtn.addEventListener("click", showPrevSlide);
          nextBtn.addEventListener("click", showNextSlide);
        } else {
          prevBtn.style.display = "none";
          nextBtn.style.display = "none";
        }
      }

      if (mainPlayBtn) {
        mainPlayBtn.addEventListener("click", () => {
          const youtubeId = mainPlayBtn.dataset.currentYoutubeId;
          if (youtubeId && videoModal && youtubeIframe) {
            youtubeIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
            videoModal.classList.add("active");
          } else {
            if (!youtubeId)
              console.warn("ID YouTube untuk slide ini tidak ditemukan.");
          }
        });
      }
    } else {
      if (heroSliderSection) heroSliderSection.style.display = "none";
    }
  }
});
