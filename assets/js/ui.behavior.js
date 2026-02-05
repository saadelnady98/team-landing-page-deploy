window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header?.classList.toggle("scrolled", window.scrollY > 50);
});

$(document).ready(function () {

  // Remove Bootstrap's data-bs-toggle to prevent conflicts
  $('#langDropdownBtn').removeAttr('data-bs-toggle');

  // IMPORTANT: Ensure dropdown starts hidden
  $('.language-switcher .dropdown-menu').removeClass('show');

  // Manual click handler for dropdown
  $('#langDropdownBtn').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const $dropdown = $('.language-switcher .dropdown-menu');
    const isShown = $dropdown.hasClass('show');


    // Close all other dropdowns
    $('.dropdown-menu').removeClass('show');

    // Toggle this dropdown
    if (!isShown) {
      $dropdown.addClass('show');
    } else {
    }
  });

  // Close dropdown when clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.language-switcher').length) {
      $('.language-switcher .dropdown-menu').removeClass('show');
    }
  });

  // Close dropdown after selecting a language
  $('.language-switcher .dropdown-item').on('click', function () {
    $('.language-switcher .dropdown-menu').removeClass('show');
  });
});

function openWhatsApp() {
  const phoneNumber = "+966566955044";
  const message = encodeURIComponent("مرحبًا، أريد الاستفسار عن ...");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}


const burgerBtn = document.querySelector(".burger-btn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("sideOverlay");

burgerBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

function closeSidebar() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
}

// Close on link click
document.querySelectorAll(".side-links a").forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});

document.querySelectorAll('.side-links a, .navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
