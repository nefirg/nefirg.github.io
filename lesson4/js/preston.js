window.addEventListener('load', () => {
    let d = new Date();

    let fulldate = d.getMonth() + '/' + d.getDay() + '/' + d.getFullYear() + ' ';
    let fulltime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    let both = fulldate + ' ' + fulltime;
    document.getElementById("currentdate").innerHTML = both;
})

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

