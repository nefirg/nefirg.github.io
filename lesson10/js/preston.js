function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// function fetchData() {
//     fetch('https://nefirg.github.io/lesson10/preston.json').then(response => {
//         return response.json();
// }).then{}
//     })
// }
const prestonAPI = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7c82d6533a95c63f9db98ef04dbc9973';

fetch(prestonAPI)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })
    .then(function (jsonObject) {
        console.log(jsonObject); // temporary checking for valid response and data parsing

        // let iconPath = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
        // icon = document.querySelector('#img').innerHTML = 'Image Icon Path: ' + iconpath + ' <img src=" ' +
        // iconPath + ' " alt="current weather icon">';
        document.querySelector('#current_conditions').innerHTML = jsonObject.weather[0].description;
        document.querySelector('#high').innerHTML = jsonObject.main.temp_max + ' &deg;F';
        document.querySelector('#humidity').innerHTML = jsonObject.main.humidity + ' %';
        document.querySelector('#currentTemp').innerHTML = jsonObject.main.temp + ' &deg;F';
        document.querySelector('#windSpeed').innerHTML = jsonObject.wind.speed + ' mph';
        document.querySelector('#windChill').innerHTML = jsonObject.main.feels_like + ' &deg;F';
    })
    .catch(function (error) {
        console.log('Fetch error: ', error.message);
    })

/* 5 day forecast */

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7c82d6533a95c63f9db98ef04dbc9973";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        // document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('current-temp').textContent = ((((jsObject.main.temp) - 273.15) * 1.8 + 32).toFixed(2));

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });

const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=7c82d6533a95c63f9db98ef04dbc9973";
fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var day_count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {

                const f = (day.main.temp);
                var fahrenheit = f;
                document.getElementById("data" + day_count).textContent = ((fahrenheit - 273.15) * 1.8 + 32).toFixed(0);
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
                console.log(imagesrc);
                const desc = day.weather[0].description;
                let idimg = 'temp' + day_count;
                document.getElementById(idimg).setAttribute('src', imagesrc); // focus on the setAttribute() method
                document.getElementById(idimg).setAttribute('alt', desc);
                day_count = day_count + 1;
            }
        }

    });


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