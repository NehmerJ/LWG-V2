var modal = document.querySelector("#myModal");
var button = document.querySelector(".customBtn");
var cd = document.querySelector(".day");
var calendar = document.querySelector(".calendar-container");
var today= new Date();
var d = today.getDate();
var month =today.getMonth();
var cm = document.querySelector(".month");
var modalTwo = document.querySelector(".modal-two-content");
var container = document.querySelector(".calendar-container");
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
var message = document.querySelector(".textarea");
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
var selDate;
var selTime;


button.onclick = function() {
	modal.style.display ="block";
}

previous.onclick = function() {
	modalTwo.style.display = "none";
	container.style.display = "block";
}

cd.innerText = d;
cm.innerText = m;

document.addEventListener("click", function() {
	if(!event.target.classList.contains("date")) {
		return;
	} else {
		event.target.classList.add("active");
		cd.innerText = event.target.textContent;
		selDate = "I would like to schedule a meeting for the " + event.target.textContent + "th of " + m + " at ";
		message.value = selDate;
	}
	var dates = document.querySelectorAll(".date");
	for(var i = 0; i < dates.length; i++) {
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


document.addEventListener("click", (e) => {
	if(!e.target.classList.contains("timePicker")) {
		return;
	} else {
		e.target.classList.add("selected");
		next.style.display = "block";
		selTime = e.target.textContent;
		message.value = selDate + selTime;
	}

	var time = document.querySelectorAll(".timePicker");
	for(var i = 0; i < time.length; i++) {
		if(time[i] === e.target) {
			continue;
		} else {
			time[i].classList.remove("selected");
		}
	}
}, false);	

next.onclick = function() {
	calendar.style.display = "none";
	modalTwo.style.display = "block";

}

window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}