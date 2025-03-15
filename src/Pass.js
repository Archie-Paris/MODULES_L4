const bcrypt = require('bcrypt');
const passwords = [
  'p1', 'p2', 'p3', 'p4', 'p5','p6', 'p7', 'p8', 'p9', 'p10','p11', 'p12', 'p13'
];

passwords.forEach(async (password, index) => {
  const start = Date.now();
  const hash = await bcrypt.hash(password, 10);
  const end = Date.now();
  console.log(`Пароль ${index + 1} зашифрован за ${end - start} мс`);
});

// Почему не знаю но из наблюдений. При шифровке больше интервалы между 4 и 5 , 8 и 9 , 12 и 13 .