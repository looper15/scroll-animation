// Function to load external JavaScript file
function loadScript(src, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = callback; // callback function to run after script loads
  document.head.appendChild(script);
}

// Load sites.js and then execute the rest of the code
loadScript('./sites.js', () => {
  // Editable variable
  const MYAPP_WORK_ON_BROWSER = undefined;

  // Minified script
  (function() {
    const n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          o = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const t = () => MYAPP_WORK_ON_BROWSER === undefined ? true : MYAPP_WORK_ON_BROWSER ? n : o;
    document.addEventListener("DOMContentLoaded", () => {
      const e = xorEncrypt(window.location.hostname, 42);
      if (!MYAPP_SHOULD_WORK[e] || !t()) return;
      const r = document.querySelector("[data-myapp-animated-element]");
      if (!r) return;
      window.addEventListener("scroll", () => {
        const e = r.style.opacity === "1" || r.style.opacity === "";
        r.style.opacity = e ? "0.1" : "1";
        r.style.transform = e ? "translateY(-2px)" : "translateY(0px)";
      });
    });
  })();
});
