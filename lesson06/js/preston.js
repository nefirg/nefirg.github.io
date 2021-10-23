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

var today = new Date();
var cday = today.getDay();
if (cday != '5') {
    document.getElementById('friday').style.display = "none";
}



document.addEventListener("DOMContentLoaded", () => {
        const temp = document.querySelector("#currentTemp").innerText;
        const speed = document.querySelector("#windSpeed").innerText;
        buildWC(speed, temp);
    });

let imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 100px 0px"
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute("data=src"));
    image.onload = () => {
        image.removeAttribute('data-src)');
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

function buildWC(speed, temp) {
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


// banner closing using an icon to close
// document.querySelector(".banner-close").addEventListener("click", function() {
//     this.closest(".banner").style.display = "none";
// });