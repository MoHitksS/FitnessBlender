const calender = document.getElementById('calender')
const days = document.getElementById('days')
// console.log(calender)
let output = ""
let dayName = ""


// for (let j=0; j<=12; j++){
    
// }

for(let i = 1; i <= 31; i++){

    const datee = new Date(2021, 0, i);
    const options = {weekday: "long"};

    const day = new Intl.DateTimeFormat("en-US", options).format(datee);
    // console.log(day)

    if (i<=7) {
        dayName += `<div class="daysName">${day}</div>`
    }
    output += `<div class="day">${i}</div>`
}
calender.innerHTML = output
days.innerHTML = dayName