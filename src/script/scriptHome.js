document.addEventListener("DOMContentLoaded", () => {
  const heroSliderSection = document.querySelector(".slider-section");
  if (heroSliderSection) {
    const slideData = ALL_MOVIE_DATA.slice(0, 3);

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
    const actualSlideCount = slideData.length;

    function renderSlide(index) {
      if (!slideData[index]) return;

      const data = slideData[index];
      setPageTitle(data.title);

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
          bgImageEl.src = data.backdropSrc;
          bgImageEl.alt = data.title + " background";
          bgImageEl.style.opacity = 1;
        }, 200);
      }

      labelEl.textContent = data.label;
      titleEl.textContent = data.title;
      descriptionEl.textContent = data.description;
      genreTextEl.textContent = data.genres.join(", ");

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
          const videoModal = document.getElementById("video-modal");
          const youtubeIframe = document.getElementById("youtube-video-iframe");
          if (youtubeId && videoModal && youtubeIframe) {
            youtubeIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
            videoModal.classList.add("active");
          }
        });
      }
    } else {
      if (heroSliderSection) heroSliderSection.style.display = "none";
    }
  }
});
