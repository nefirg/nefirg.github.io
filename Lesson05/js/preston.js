function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

var u = new Date(document.lastModified);
var m = new Array ("January","February","March","April","May","June","July",
"August","September","October","November","December");
var d = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday");
var edited = d[u.getDay()] + ', ' + u.getDay() + ' ' + m[u.getMonth()] + ' ' + u.getFullYear();
document.getElementById("lastmodified").innerHTML = edited;

var today = new Date();
var cday = today.getDay();
if (cday != '5') {
    document.getElementById('friday').style.display = "none";
}


// banner closing using an icon to close
// document.querySelector(".banner-close").addEventListener("click", function() {
//     this.closest(".banner").style.display = "none";
// });