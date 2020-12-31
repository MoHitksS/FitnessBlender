var calender = document.getElementById('dynamicCal')
function showCal () {
    calender.style.visibility = "visible"
    renderCal()
    document.createElement('revBtn').addEventListener('click', () => {
        d.setMonth(d.getMonth()-1)
        renderCal()
    })
    document.getElementById('forBtn').addEventListener('click', () => {
        d.setMonth(d.getMonth()+1)
        renderCal()
    })
}

function closeBtn () {
    calender.style.visibility = "hidden"
    console.log("clicked")
}
const btn = document.querySelectorAll('.fa-calendar')

for(i=0; i<btn.length; i++){
    btn[i].addEventListener('click', showCal)
}
const crossBtn = document.getElementById('cross-btn')
crossBtn.addEventListener('click', closeBtn)










var d = new Date();
function renderCal (){
    const cal = document.getElementById('cal')
    const days = document.getElementById('days')

    let output = ""
    let dayName = ""
    

    const lastDay = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate()
    console.log(lastDay)
    var y = d.getFullYear();
    var month =
        ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December",]
    
    const prev = new Date(d.getFullYear(), d.getMonth(), 0).getDate()
    const firstDayIndex = d.getDay()

    const lastDayC = new Date(d.getFullYear(), d.getMonth()+1, 0).getDay()
    const nextDays  = 7 - lastDayC - 1
    // console.log(n, y, prev, firstDayIndex, nextDays)

    for (j = firstDayIndex-1; j>=0; j--){
        output += `<div id="addEvent" class="prev-day">${prev - j}</div>`
    }
    for(let i = 1; i <= lastDay; i++){
        if (i === new Date().getDate() && d.getMonth() === new Date().getMonth()) {
            output += `<div id="addEvent" class="today-day">${i}</div>`
        }else{
            output += `<div id="addEvent" class="day">${i}</div>`
        }
    }
    for(k=1; k<=nextDays; k++){
        output += `<div id="addEvent" class="prev-day">${k}</div>`
        cal.innerHTML = output
    }
    days.innerHTML = dayName
}


