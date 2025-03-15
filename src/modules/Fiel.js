const fs = require('fs').promises;
const path = require('path');

module.exports = {
  crDir: async function (dir) {
    try {
      await fs.mkdir(dir, { recursive: true });
      console.log(`Директория ${dir} создана.`);
    } catch (er) {
      console.error(`Ошибка при создании директории ${dir}: ${error.message}`);
    }
  },

  crFile: async function (file, data) {
    try {
      await fs.writeFile(file, content);
      console.log(`Файл ${file} создан.`);
    } catch (er) {
      console.error(`Ошибка при создании файла ${file}: ${error.message}`);
    }
  }
};

