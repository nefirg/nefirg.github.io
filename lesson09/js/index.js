const requestURL = 'https://nefirg.github.io/lesson09/towndata.json';

fetch(requestURL)
  .then(function (response) {
     if(response.ok) {
         return response.json();
     }
    throw new ERROR('Network response was not ok');
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject['towns'];  
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let image = document.createElement('img');


h2.textContent = towns[i].name;
h3.textContent = towns[i].motto;
p1.textContent = "Year Founded: " + towns[i].yearFounded;
p2.textContent = "Population: " + towns[i].currentPopulation;
p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
image.setAttribute('src', towns[i].photo);
image.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + ' - ' + towns[i].order);

card.appendChild(h2);
card.appendChild(p1);
card.appendChild(p2);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
};})
.catch(function(error){
   console.log('Fetch error: ', error.message);
})