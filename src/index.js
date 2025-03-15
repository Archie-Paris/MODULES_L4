const dotenv = require('dotenv');
const fs = require('fs');

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: envFile });

console.log(`Текущий режим работы: ${process.env.MODE}`);
