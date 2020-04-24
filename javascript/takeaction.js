var modal = document.querySelector("#myModal");
var button = document.querySelector(".customBtn");
var cd = document.querySelector(".day");
var today = new Date();
var d = today.getDate();
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
var m = month[today.getMonth()];
var cm = document.querySelector(".month");
var next = document.querySelector(".next");
var calendar = document.querySelector(".calendar-container");

cd.innerText = d;
cm.innerText = m;

button.onclick = function() {
	modal.style.display ="block";
}

document.addEventListener("click", function() {
	if(!event.target.classList.contains("date")) {
		return;
	} else {
		event.target.classList.add("active");
		cd.innerText = event.target.textContent;
	}
	var dates = document.querySelectorAll(".date");
	for(var i = 0; i < dates.length; i++){
		if(dates[i] === event.target) {
			continue;
		} else {
			dates[i].classList.remove("active");
		}
	}

	var time = document.querySelectorAll(".timePicker");
	for(var i = 0; i < time.length; i++) {
		if(dates[i] !== null) {
			time[i].style.display = "block";
			cd.style.textAlign = "left";
			cm.style.textAlign = "left";
		}
	}
}, false);

document.addEventListener("click", (e) =>{
	if(!e.target.classList.contains("timePicker")) {
		return;
	} else {
		e.target.classList.add("selected");
		next.style.display = "block";
	}

	var time = document.querySelectorAll(".timePicker");
	for(var i = 0; i < time.length; i++) {
		if(time[i] === e.target) {
			continue;
		} else {
			time[i].classList.remove("selected");
		}
	}
},false);

next.onclick = function() {
	calendar.style.display = "none";
}


window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}