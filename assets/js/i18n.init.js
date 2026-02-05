Promise.all([
  fetch("../locales/en.json").then(r => r.json()),
  fetch("../locales/ar.json").then(r => r.json())
]).then(([en, ar]) => {
  i18next.init({
    lng: initialLang,
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    }
  }, () => {
    updateContent();
    setCookie("lang", initialLang);
  });
});
