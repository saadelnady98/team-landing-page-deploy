function updateFeaturesChecklist() {
  const checklist = i18next.t("features.checklist", { returnObjects: true });
  const ul = document.querySelector("[data-i18n='features.checklist']");
  if (!ul) return;

  ul.innerHTML = "";
  checklist.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (key === "features.checklist") return;

    // تحديث النصوص العادية
    el.innerHTML = i18next.t(key);
  });

  // تحديث قائمة الميزات
  updateFeaturesChecklist();

  // تحديث الزرار (current language) لو موجود
  const langBtn = document.querySelector("#langDropdownBtn");
  // if (langBtn) {
  //   langBtn.innerHTML = i18next.t("header.language.current");
  // }
  //  updateFlagIcon(lang);
  // RTL / LTR
  if (i18next.language === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
    document.body.classList.add("rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "en");
    document.body.classList.remove("rtl");
  }

  // Re-render projects with current language
  if (typeof window.rerenderProjects === 'function') {
    window.rerenderProjects();
  }
}

