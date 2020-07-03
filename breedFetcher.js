const request = require ('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }
    
    const data = JSON.parse(body);
    const breedOfCat = data[0];
    
    if (breedOfCat) {
      callback(null, breedOfCat.description);
    } else {
      callback('Breed not Found')
    }
  });
};

module.exports = { fetchBreedDescription };























