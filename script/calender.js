var d = new Date();
function renderCal (){
    const calender = document.getElementById('calender')

    let output = ""
    let dayName = ""
    

    // d.setMonth(5)
    const lastDay = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate()
    console.log(lastDay)
    var y = d.getFullYear();
    var month =
        ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December",]
    
        var n = month[d.getMonth()];
        document.getElementById("month").innerHTML = n + " " + y;

    const prev = new Date(d.getFullYear(), d.getMonth(), 0).getDate()
    const firstDayIndex = d.getDay()

    const lastDayC = new Date(d.getFullYear(), d.getMonth()+1, 0).getDay()
    const nextDays  = 7 - lastDayC - 1
    console.log(n, y, prev, firstDayIndex, nextDays)

    
    for (j = firstDayIndex-1; j>=0; j--){
        output += `<div class="prev-day">${prev - j}</div>`
    }
    for(let i = 1; i <= lastDay; i++){
        const textD = checkForDate(i)
        // console.log(textD)
        if (checkForDate(i) && d.getMonth() === textD[0].mo) {
            if (i === new Date().getDate() && d.getMonth() === new Date().getMonth()) {
                output += `<div class="today-day showingDay">${i}
                    <div class="message">
                        <div>${i}</div> 
                        <div class="text">${textD[0].te}</div>
                    </div>
                </div>`
            }else{                
                output += 
                `<div class="day showingDay">${i}
                    <div class="message">
                        <div>${i}</div> 
                        <div class="text">${textD[0].te}</div>
                    </div>
                </div>`
            }
        }else {
            if (i === new Date().getDate() && d.getMonth() === new Date().getMonth()) {
                output += `<div class="today-day">${i}</div>`
            }else{
                output += `<div class="day">${i}</div>`
            }
        }
    }
    for(k=1; k<=nextDays; k++){
        output += `<div class="prev-day">${k}</div>`
        calender.innerHTML = output
    }
}

function checkForDate (a, b) {
    let data = JSON.parse(localStorage.getItem('calender'));
    for (i in data){
        const text = data[i].des
        if (a === data[i].date) {
            return [{tr: true, te: text, mo: data[i].montH}]
        }
    }
}

document.getElementById('revBtn').addEventListener('click', () => {
    d.setMonth(d.getMonth()-1)
    renderCal()
})
document.getElementById('forBtn').addEventListener('click', () => {
    d.setMonth(d.getMonth()+1)
    renderCal()
})
renderCal()
// console.log(d.getMonth(), new Date().getMonth(), new Date().getDate())

