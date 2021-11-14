function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  }
  
  var u = new Date(document.lastModified);
  var m = new Array ("January","February","March","April","May","June","July",
  "August","September","October","November","December");
  var d = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday");
  var edited = d[u.getDay()] + ', ' + u.getDate() + ' ' + m[u.getMonth()] + ' ' + u.getFullYear();
  document.getElementById("lastmodified").innerHTML = edited;

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
    const towns = jsonObject['towns'];  
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
let h2 = document.createElement('h2');
let h4 = document.createElement('h4');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let image = document.createElement('img');


h2.textContent = towns[i].name;
h4.textContent = towns[i].motto;
p1.textContent = "Year Founded: " + towns[i].yearFounded;
p2.textContent = "Population: " + towns[i].currentPopulation;
p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
image.setAttribute('src', towns[i].photo);
image.setAttribute('alt', towns[i].name + ' - ' + towns[i].motto + ' - ' + towns[i].yearFounded);

card.appendChild(h2);
card.appendChild(h4);
card.appendChild(p1);
card.appendChild(p2);
card.appendChild(p3);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
};})
.catch(function(error){
   console.log('Fetch error: ', error.message);
})

