const crypto = require('crypto');
const https = require('https');

const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';

const url = 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/500-worst-passwords.txt';

const md5Hash = (data) => {
  return crypto.createHash('md5').update(data).digest('hex');
};


const dictionaryAttack = () => {
  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      const words = data.split('\n');

      for (const word of words) {
        const hash = md5Hash(word.trim());
        if (hash === targetHash) {
          console.log(`Kata sandi ditemukan: ${word}`);
          return;
        }
      }

      console.log('Kata sandi tidak ditemukan di dalam daftar.');
    });
  }).on('error', (err) => {
    console.error('Kesalahan saat mengunduh daftar kata sandi:', err.message);
  });
};

dictionaryAttack();