const calender = document.getElementById('calender')
const days = document.getElementById('days')

let output = ""
let dayName = ""
var d = new Date();
var y = d.getFullYear();
var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
  
    var d = new Date();
    var n = month[d.getMonth()];
    document.getElementById("month").innerHTML = n + " " +y;



var m = d.getMonth();
console.log(n, m)
for(let i = 1; i <= 31; i++){
    const date = new Date(y, m, i);
    const options = {weekday: "long"};
    const optionsM = {month: "long"};

    const day = new Intl.DateTimeFormat("en-US", options).format(date);
    const Month = new Intl.DateTimeFormat("en-US", optionsM).format(date);
    console.log(day, Month)

    if (i<=7) {
        dayName += `<div class="daysName">${day}</div>`
    }
    output += `<div class="day">${i}</div>`
}
// count++
calender.innerHTML = output
days.innerHTML = dayName

// console.log(calender)
//  function showNextMonth () {
//     let count = -1
//    return count++
//  }

// const revBtn = document.getElementById('revBtn').addEventListener('click', showNextMonth)
// const forBtn = document.getElementById('forBtn').addEventListener('click', showPrevMonth)