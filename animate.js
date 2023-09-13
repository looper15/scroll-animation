(function () {
  // Replace the global SHOULD_WORK flag with an object
  const MYAPP_SHOULD_WORK = {
    "springpoint-dev-6e43510d71e330dd345ca57.webflow.io": true,
  };

  const MYAPP_WORK_ON_BROWSER = undefined;

  const MYAPP_IS_SAFARI = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    ),
    MYAPP_IS_CHROME =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
    isMyAppCompatibleBrowser = () =>
      void 0 === MYAPP_WORK_ON_BROWSER ||
      (MYAPP_WORK_ON_BROWSER ? MYAPP_IS_SAFARI : MYAPP_IS_CHROME);
  document.addEventListener("DOMContentLoaded", () => {
    let e = window.location.hostname;
    if (!MYAPP_SHOULD_WORK[e] || !isMyAppCompatibleBrowser()) return;
    let t = document.querySelector("[data-myapp-animated-element]");
    t &&
      window.addEventListener("scroll", () => {
        let e = "1" === t.style.opacity || "" === t.style.opacity;
        (t.style.opacity = e ? "0.1" : "1"),
          (t.style.transform = e ? "translateY(-10px)" : "translateY(10px)");
      });
  });
})();
