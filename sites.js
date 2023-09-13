// Simple encryption and decryption using XOR bitwise operation
function xorEncrypt(str, key) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) ^ key);
  }
  return result;
}

// Encrypted URLs
const MYAPP_SHOULD_WORK = {
  [xorEncrypt('springpoint-dev-6e43510d71e330dd345ca57.webflow.io', 42)]: true,
  [xorEncrypt('www.example.com', 42)]: true,
  [xorEncrypt('anotherexample.com', 42)]: false,
  [xorEncrypt('www.anotherexample.com', 42)]: true
};
