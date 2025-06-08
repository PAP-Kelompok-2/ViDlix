document.addEventListener("DOMContentLoaded", () => {
  const videoModal = document.getElementById("video-modal");
  const youtubeIframe = document.getElementById("youtube-video-iframe");

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
      }
    });
  });

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
          if (youtubeId && videoModal && youtubeIframe) {
            youtubeIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
            videoModal.classList.add("active");
          }
        });
      }
    } else {
      if (heroSliderSection) heroSliderSection.style.display = "none";
    }

    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;
    heroSliderSection.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].screenX;
      },
      { passive: true }
    );

    heroSliderSection.addEventListener(
      "touchend",
      (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipeGesture();
      },
      { passive: true }
    );

    function handleSwipeGesture() {
      const swipeDistance = touchEndX - touchStartX;

      if (Math.abs(swipeDistance) < swipeThreshold) {
        return;
      }

      if (swipeDistance < 0) {
        showNextSlide();
      } else {
        showPrevSlide();
      }
    }
  }

  function renderNewestMovies() {
    const listMovieContainer = document.querySelector(".list-movie");
    if (!listMovieContainer) return;

    const moviesToRender = ALL_MOVIE_DATA.filter(
      (movie) => movie.isNewRelease || movie.isTrending
    ).slice(0, 6);

    listMovieContainer.innerHTML = "";

    moviesToRender.forEach((movie) => {
      const movieCardHTML = `
      <a href="page/detail-movie.html" class="card-movie-link">
        <div class="card-movie">
          <img src="${movie.posterSrc}" alt="${movie.title} Poster">
          
          <button class="favorite-btn" data-movie-id="${
            movie.id
          }" aria-label="Add to favorites">
            <svg data-lucide="heart"></svg>
          </button>
          
          <div class="card-movie-info">
            <h3>${movie.title} (${movie.year})</h3>
            <div class="info-meta">
              <span class="genres">${movie.genres.join(", ")}</span>
              <span class="duration">
                <svg data-lucide="clock-5"></svg> 
                ${movie.duration}
              </span>
            </div>
          </div>
        </div>
      </a>
    `;
      listMovieContainer.innerHTML += movieCardHTML;
    });

    lucide.createIcons();
    addFavoriteButtonListeners();
  }

  function addFavoriteButtonListeners() {
    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        button.classList.toggle("favorited");
      });
    });
  }

  renderNewestMovies();
});
