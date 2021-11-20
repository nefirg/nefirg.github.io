function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const prestonAPI = 'https://api.openweathermap.org/data/2.5/weather?q=rexburg&units=imperial&appid=7c82d6533a95c63f9db98ef04dbc9973';
    
fetch(prestonAPI)
  .then(function (response) {
     if(response.ok) {
         return response.json();
     }
    throw new ERROR('Network response was not ok');
  })
  .then(function (jsonObject) {
    console.log(jsonObject); // temporary checking for valid response and data parsing
    
    // let iconPath = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
    // icon = document.querySelector('#img').innerHTML = 'Image Icon Path: ' + iconpath + ' <img src=" ' +
    // iconPath + ' " alt="current weather icon">';
    document.querySelector('current_conditions').innerHTML = jsonObject.weather.main;
    document.querySelector('high').innerHTML = jsonObject.main.temp_max + '&deg;F';
    document.querySelector('humidity').innerHTML = jsonObject.main.humidity + '&deg;F';
    document.querySelector('currentTemp').innerHTML = jsonObject.main.temp + '&deg;F';
    document.querySelector('windSpeed').innerHTML = jsonObject.wind.speed + 'mph';
    document.querySelector('windChill').innerHTML = jsonObject.main.feels_like + '&deg;F';
    })
.catch(function(error){
   console.log('Fetch error: ', error.message);
})

var u = new Date(document.lastModified);
var m = new Array ("January","February","March","April","May","June","July",
"August","September","October","November","December");
var d = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday");
var edited = d[u.getDay()] + ', ' + u.getDate() + ' ' + m[u.getMonth()] + ' ' + u.getFullYear();
document.getElementById("lastmodified").innerHTML = edited;

var today = new Date();
var cday = today.getDay();
if (cday != '5') {
    document.getElementById('friday').style.display = "none";
}


// document.addEventListener("DOMContentLoaded", () => {
//         const temp = document.querySelector("#currentTemp").innerText;
//         const speed = document.querySelector("#windSpeed").innerText;
//         buildWC(speed, temp);
//     });

/*   function buildWC(speed, temp) {
        let wcTemp = document.getElementById('windChill');
    
        //COMPUTING THE WINDCHILL
        let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        console.log(wc);
    
        wc=Math.floor(wc);
    
        wc=(wc > temp) ? temp : wc;
    
        console.log(wc);
        wc=wc + '&#8457';
        wcTemp.innerHTML = wc;
    }
*/
    
   