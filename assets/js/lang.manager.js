// -------------------- تعيين اللغة الأولية --------------------
const initialHash = window.location.hash.replace("#", ""); // #en أو #ar
const cookieLang = getCookie("lang");

// إذا hash موجود ومساوي "en" نعتبرها لغة إنجليزي
const initialLang = initialHash === "en" ? "en" : cookieLang || "ar";

// -------------------- تحديث صورة العلم في الزر الرئيسي --------------------
function updateFlagIcon(lang) {
  const flagImg = document.querySelector("#langDropdownBtn .flag-icon");

  if (flagImg) {
    if (lang === "en") {
      flagImg.src = "/assets/images/uk.svg";
      flagImg.alt = "English";
    } else {
      flagImg.src = "/assets/images/saudia.svg";
      flagImg.alt = "Arabic";
    }
  }
}

// -------------------- تغيير اللغة --------------------
function changeLang(lang) {
  i18next.changeLanguage(lang, function () {
    updateContent();

    // تحديث URL باستخدام hash
    if (lang === "en") {
      window.location.hash = "#en"; // يظهر #en
    } else {
      history.pushState("", document.title, window.location.pathname); // يحذف أي hash
    }

    // تحديث صورة العلم في الزر الرئيسي
    updateFlagIcon(lang);

    // تفعيل الزرار الحالي
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document
      .querySelector(`.lang-btn[onclick="changeLang('${lang}')"]`)
      ?.classList.add("active");
  });

  setCookie("lang", lang);
}

// -------------------- تحديث العلم عند التحميل الأولي --------------------
document.addEventListener("DOMContentLoaded", function () {
  updateFlagIcon(initialLang);
});
