// Editable variables
const MYAPP_SHOULD_WORK = {
  "https://springpoint-dev-6e43510d71e330dd345ca57.webflow.io/": true,
  "www.example.com": true,
};
const MYAPP_WORK_ON_BROWSER = undefined;

// Minified script
(function () {
  const n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    o =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  const t = () => {
    if (MYAPP_WORK_ON_BROWSER === undefined) return !0;
    return MYAPP_WORK_ON_BROWSER ? n : o;
  };
  document.addEventListener("DOMContentLoaded", () => {
    const e = window.location.hostname;
    if (!MYAPP_SHOULD_WORK[e] || !t()) return;
    const r = document.querySelector("[data-myapp-animated-element]");
    if (!r) return;
    window.addEventListener("scroll", () => {
      const e = "1" === r.style.opacity || "" === r.style.opacity;
      (r.style.opacity = e ? "0.1" : "1"),
        (r.style.transform = e ? "translateY(-2px)" : "translateY(0px)");
    });
  });
})();
