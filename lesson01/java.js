/*var string = document.lastModified;
alert(document.lastModified);
document.getElementById("currentdate").innertHTML = string;*/
/*let daynames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
let months = [
    "January", 
    "February",  
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"];*/
    
window.addEventListener('load', () => {
    let d = new Date();
    
    let fulldate = d.getMonth() + '/' + d.getDay() + '/' + d.getFullYear() + ' ';
    let fulltime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    let both = fulldate + ' ' + fulltime;
    document.getElementById("currentdate").innerHTML = both;
})

// WebFont.load({
//     google: {
//       families: [
//          'Open Sans'
//       ]
//     }
//   });