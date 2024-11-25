const crypto = require('crypto');

const targetHash = '5531a5834816222280f20d1ef9e95f69';

function md5(input) {
  return crypto.createHash('md5').update(input).digest('hex');
}

function bruteForcePin() {
  for (let i = 0; i <= 9999; i++) {
    const pin = i.toString().padStart(4, '0');
    const hash = md5(pin);
    
    if (hash === targetHash) {
      return pin; 
    }
  }
  return null; 
}

const pin = bruteForcePin();
if (pin) {
  console.log(`PIN dari Alice adalah: ${pin}`);
} else {
  console.log('PIN tidak ditemukan');
}