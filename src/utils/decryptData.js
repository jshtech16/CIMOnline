import CryptoJS from 'crypto-js';

const decryptData = (encryptedData, key) => {
  // Decrypt data using AES decryption with the provided key
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
  return decryptedData;
};

export default decryptData;