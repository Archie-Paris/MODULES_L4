const loader = require('./src/modules/loader');
const Sort = require('./src/modules/Sort');
const Fiel = require('./src/modules/Fiel');
require('./src/modules/index');

(async () => {

  const url = 'https://jsonplaceholder.typicode.com/users';
  const { data: users, isLoading, error } = await loader(url);
  if (error) return console.error('Ошибка загрузки данных:', error);

  const sortedNames = Sort(users.map(user => user.name));

  await Fiel.createDir('users');
  await Fiel.writeFile('users/names.txt', sortedNames.join('\n'));
  await Fiel.writeFile('users/emails.txt', users.map(user => user.email).join('\n'));

})();
