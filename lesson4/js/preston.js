window.addEventListener('load', () => {
    let d = new Date();

    let myDays = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    let myMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let thisDay = myDays[d.getDay()];
    let thisMonth = myMonths[d.getMonth()];
    let fulldate = thisDay + ', ' + d.getDay() + ' ' + thisMonth + ' ' + d.getFullYear();
    // let fulltime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    // let both = fulldate + fulltime;
    document.getElementById("currentdate").innerHTML = fulldate;
})

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

