// Simple encryption and decryption using XOR bitwise operation
const xorEncrypt = (str, key) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) ^ key);
  }
  return result;
};

// Encrypted URLs
const MYAPP_SHOULD_WORK = {
  [xorEncrypt('https://springpoint-dev-6e43510d71e330dd345ca57.webflow.io/', 42)]: true,
};

// Editable variables
const MYAPP_WORK_ON_BROWSER = undefined; // undefined means both, true means Safari only, false means Chrome only

// Minified script
(function(){
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
