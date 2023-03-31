

const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const amPm = document.getElementById("ampm")

function updateClock(){
	let h = new Date().getHours()
	let m = new Date().getMinutes()
	let s = new Date().getSeconds()
	let ampa = "AM"

	if (h > 24) {
		h = h - 24;
		ampm = "PM"
	}

 h = h<10 ?  "0" + h  : h;
 m = m<10 ?  "0" + m  : m;
 s = s<10 ?  "0" + s  : s;

	

	hoursEL.innerText = h;
	minutesEL.innerText = m;
	secondsEL.innerText = s;
	amPm, (innerText = ampm)
		setTimeout(()=>{
		updateClock()

		},1000)
}

updateClock()
