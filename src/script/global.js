window.setPageTitle = function (pageName) {
  document.title = `ViDlix | ${pageName}`;
};

function setDefaultPageTitle() {
  const path = window.location.pathname;
  const pageFileName = path.substring(path.lastIndexOf("/") + 1);
  let pageName = pageFileName.replace(".html", "").replace(/-/g, " ");

  if (pageName === "" || pageName === "index" || pageName === "home") {
    pageName = "Home";
  } else {
    pageName = pageName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  setPageTitle(pageName);
}

function handleActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(
    ".navbar ul li a, .mobile-menu ul li a"
  );

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const linkHref = link.getAttribute("href");
    if (!linkHref || linkHref === "#") {
      return;
    }

    const isCurrentUrlRoot =
      currentPath === "/" ||
      currentPath.endsWith("/index.html") ||
      currentPath.endsWith("/home.html");
    const isLinkToRoot =
      linkHref === "index.html" ||
      linkHref === "home.html" ||
      linkHref === "./" ||
      linkHref === "/";

    if (isCurrentUrlRoot && isLinkToRoot) {
      link.classList.add("active");
      return;
    }

    if (currentPath.endsWith(linkHref)) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setDefaultPageTitle();
  handleActiveNav();

  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");
  
  // ===== PERUBAHAN DI SINI =====
  const mobileLinks = document.querySelectorAll(
    ".mobile-menu ul li a:not(.dropdown-toggle-mobile)"
  );
  // ============================

  if (hamburgerBtn && mobileMenu && closeBtn) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }

  const videoModal = document.getElementById("video-modal");
  const youtubeIframe = document.getElementById("youtube-video-iframe");
  const modalCloseBtn = videoModal
    ? videoModal.querySelector(".modal-close-btn")
    : null;

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

  const dropdownToggleMobile = document.querySelector(
    ".dropdown-toggle-mobile"
  );
  const dropdownContainerMobile = document.querySelector(
    ".dropdown-container-mobile"
  );

  if (dropdownToggleMobile && dropdownContainerMobile) {
    dropdownToggleMobile.addEventListener("click", (event) => {
      event.preventDefault();
      dropdownContainerMobile.classList.toggle("open");
    });
  }
});