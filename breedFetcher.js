const request = require('request');
const args = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + args[0], (error, response, body) => {
  if (error) {
    console.log('error ', error);
  }
  const data = JSON.parse(body);
  const dataObject = data[0];
  console.log(dataObject.description);
});