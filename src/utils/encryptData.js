import CryptoJS from 'crypto-js';

const encryptData = (data, key) => {
  // Encrypt data using AES encryption with the provided key
  const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
  return encryptedData;
};

export default encryptData;