const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      return callback(error); //callback function is in index.js, for better understanding
    };

    const data = JSON.parse(body);
    const catBreed = data[0];

    if (catBreed) {
      callback(null, catBreed.description); //callback fn in index.js, for better understanding
    } else {
      callback('Breed Not Found');
    }
  })
};



module.exports = { fetchBreedDescription };