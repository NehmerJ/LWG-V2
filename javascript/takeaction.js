var modal = document.querySelector("#myModal");
var button = document.querySelector(".customBtn");
var ch = document.querySelector(".day");
var calendar = document.querySelector(".calendar-container > header");
var btnOne = document.querySelector(".btn-1");
var btnTwo = document.querySelector(".btn-2");
var btnThree = document.querySelector(".btn-3");
var btnFour = document.querySelector(".btn-4");
var btnFive = document.querySelector(".btn-5");
var btnSix = document.querySelector(".btn-6");
var today= new Date();
var date = today.getDate();
var month =today.getMonth();
var cm = document.querySelector(".month");
var modalTwo = document.querySelector(".modal-two-content");
var container = document.querySelector(".calendar-container");
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
var message = document.querySelector(".textarea");

var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var ten = document.querySelector(".ten");
var eleven = document.querySelector(".eleven");
var twelve = document.querySelector(".twelve");
var thirteen = document.querySelector(".thirteen");
var fourteen = document.querySelector(".fourteen");
var fifteen = document.querySelector(".fifteen");
var sixteen = document.querySelector(".sixteen");
var seventeen = document.querySelector(".seventeen");
var eighteen = document.querySelector(".eighteen");
var nineteen = document.querySelector(".nineteen");
var twenty = document.querySelector(".twenty");
var twentyOne = document.querySelector(".twenty-one");
var twentyTwo = document.querySelector(".twenty-two");
var twentyThree = document.querySelector(".twenty-three");
var twentyFour = document.querySelector(".twenty-four");
var twentyFive = document.querySelector(".twenty-five");
var twentySix = document.querySelector(".twenty-six");
var twentySeven = document.querySelector(".twenty-seven");
var twentyEight = document.querySelector(".twenty-eight");
var twentyNine = document.querySelector(".twenty-nine");
var thirty = document.querySelector(".thirty");
// var thirtyOne = document.querySelector(".thirty-one");



button.onclick = function() {
	modal.style.display ="block";
}

previous.onclick = function() {
	modalTwo.style.display = "none";
	container.style.display = "block";
}

next.onclick = function() {
	modalTwo.style.display =" block";
	container.style.display = "none";
}

cm = innerText = month;

ch.innerText = date;


btnOne.onclick = function() {
	btnOne.classList.add("clicked");
	btnTwo.classList.remove("clicked");
	btnThree.classList.remove("clicked");
	btnFour.classList.remove("clicked");
	btnFive.classList.remove("clicked");
	btnSix.classList.remove("clicked");
	next.style.display = "block";
}
btnTwo.onclick = function() {
	btnTwo.classList.add("clicked");
	btnOne.classList.remove("clicked");
	btnThree.classList.remove("clicked");
	btnFour.classList.remove("clicked");
	btnFive.classList.remove("clicked");
	btnSix.classList.remove("clicked");
	next.style.display = "block";
}

btnThree.onclick = function() {
	btnThree.classList.add("clicked");
	btnOne.classList.remove("clicked");
	btnTwo.classList.remove("clicked");
	btnFour.classList.remove("clicked");
	btnFive.classList.remove("clicked");
	btnSix.classList.remove("clicked");
	next.style.display = "block";
}

btnFour.onclick = function() {
	btnFour.classList.add("clicked");
	btnOne.classList.remove("clicked");
	btnTwo.classList.remove("clicked");
	btnThree.classList.remove("clicked");
	btnFive.classList.remove("clicked");
	btnSix.classList.remove("clicked");
	next.style.display = "block";
}

btnFive.onclick = function() {
	btnFive.classList.add("clicked");
	btnOne.classList.remove("clicked");
	btnTwo.classList.remove("clicked");
	btnThree.classList.remove("clicked");
	btnFour.classList.remove("clicked");
	btnSix.classList.remove("clicked");
	next.style.display = "block";
}

btnSix.onclick = function() {
	btnSix.classList.add("clicked");
	btnOne.classList.remove("clicked");
	btnTwo.classList.remove("clicked");
	btnThree.classList.remove("clicked");
	btnFour.classList.remove("clicked");
	btnFive.classList.remove("clicked");
	next.style.display = "block";
	
}

// one.onclick = function() {
// 	if(one.style.color !== "red") {
// 		one.style.color = "red";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		// thirtyOne.style.color ="#555";
// 		ch.innerText = "1";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// two.onclick = function() {
// 	if(two.style.color !== "red") {
// 		two.style.color = "red";
// 		one.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		ch.innerText = "2";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// three.onclick = function() {
// 	if(three.style.color !== "red") {
// 		three.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		thirtyOne.style.color ="#555";
// 		ch.innerText = "3";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// four.onclick = function() {
// 	if(four.style.color !== "red") {
// 		four.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		// thirtyOne.style.color ="#555";
// 		ch.innerText = "4";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// five.onclick = function() {
// 	if(five.style.color !== "red") {
// 		five.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		// thirtyOne.style.color ="#555";
// 		ch.innerText = "5";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// six.onclick = function() {
// 	if(six.style.color !== "red") {
// 		six.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		// thirtyOne.style.color ="#555";
// 		ch.innerText = "6";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// seven.onclick = function() {
// 	if(seven.style.color !== "red") {
// 		seven.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		ch.innerText = "7";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// eight.onclick = function() {
// 	if(eight.style.color !== "red") {
// 		eight.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		ch.innerText = "8";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// nine.onclick = function() {
// 	if(nine.style.color !== "red") {
// 		nine.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "9";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// ten.onclick = function() {
// 	if(ten.style.color !== "red") {
// 		ten.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "10";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// eleven.onclick = function() {
// 	if(eleven.style.color !== "red") {
// 		eleven.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "11";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// twelve.onclick = function() {
// 	if(twelve.style.color !== "red") {
// 		twelve.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "12";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// thirteen.onclick = function() {
// 	if(thirteen.style.color !== "red") {
// 		thirteen.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "13";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// fourteen.onclick = function() {
// 	if(fourteen.style.color !== "red") {
// 		fourteen.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "14";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// fifteen.onclick = function() {
// 	if(fifteen.style.color !== "red") {
// 		fifteen.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "15";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";

// 	}
// }

// sixteen.onclick = function() {
// 	if(sixteen.style.color !== "red") {
// 		sixteen.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "16";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// seventeen.onclick = function() {
// 	if(seventeen.style.color !== "red") {
// 		seventeen.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "17";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// eighteen.onclick = function() {
// 	if(eighteen.style.color !== "red") {
// 		eighteen.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "18";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// nineteen.onclick = function() {
// 	if(nineteen.style.color !== "red") {
// 		nineteen.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "19";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// twenty.onclick = function() {
// 	if(twenty.style.color !== "red") {
// 		twenty.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "20";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// twentyOne.onclick = function() {
// 	if(twentyOne.style.color !== "red") {
// 		twentyOne.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "21";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// twentyTwo.onclick = function() {
// 	if(twentyTwo.style.color !== "red") {
// 		twentyTwo.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "22";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

// twentyThree.onclick = function() {
// 	if(twentyThree.style.color !== "red") {
// 		twentyThree.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		// thirtyOne.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "23";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

twentyFour.onclick = function() {
	if(twentyFour.style.color !== "red") {
		twentyFour.style.color = "red";
		one.style.color = "#555";
		two.style.color = "#555";
		three.style.color = "#555";
		four.style.color = "#555";
		five.style.color = "#555";
		six.style.color = "#555";
		seven.style.color = "#555";
		eight.style.color = "#555";
		nine.style.color = "#555";
		ten.style.color = "#555";
		eleven.style.color = "#555";
		twelve.style.color = "#555";
		thirteen.style.color = "#555";
		fourteen.style.color = "#555";
		fifteen.style.color = "#555";
		sixteen.style.color = "#555";
		seventeen.style.color = "#555";
		eighteen.style.color = "#555";
		nineteen.style.color = "#555";
		twenty.style.color = "#555";
		twentyOne.style.color = "#555";
		twentyTwo.style.color = "#555";
		twentyThree.style.color = "#555";
		// thirtyOne.style.color = "#555";
		twentyFive.style.color = "#555";
		twentySix.style.color = "#555";
		twentySeven.style.color = "#555";
		twentyEight.style.color = "#555";
		twentyNine.style.color = "#555";
		thirty.style.color = "#555";
		ch.innerText = "24";
		calendar.style.textAlign ="left";
		btnOne.style.display = "block";
		btnTwo.style.display = "block";
		btnThree.style.display = "block";
		btnFour.style.display = "block";
		btnFive.style.display = "block";
		btnSix.style.display = "block";
	}
}

twentyFive.onclick = function() {
	if(twentyFive.style.color !== "red") {
		twentyFive.style.color = "red";
		one.style.color = "#555";
		two.style.color = "#555";
		three.style.color = "#555";
		four.style.color = "#555";
		five.style.color = "#555";
		six.style.color = "#555";
		seven.style.color = "#555";
		eight.style.color = "#555";
		nine.style.color = "#555";
		ten.style.color = "#555";
		eleven.style.color = "#555";
		twelve.style.color = "#555";
		thirteen.style.color = "#555";
		fourteen.style.color = "#555";
		fifteen.style.color = "#555";
		sixteen.style.color = "#555";
		seventeen.style.color = "#555";
		eighteen.style.color = "#555";
		nineteen.style.color = "#555";
		twenty.style.color = "#555";
		twentyOne.style.color = "#555";
		twentyTwo.style.color = "#555";
		twentyThree.style.color = "#555";
		twentyFour.style.color = "#555";
		// thirtyOne.style.color = "#555";
		twentySix.style.color = "#555";
		twentySeven.style.color = "#555";
		twentyEight.style.color = "#555";
		twentyNine.style.color = "#555";
		thirty.style.color = "#555";
		ch.innerText = "25";
		calendar.style.textAlign ="left";
		btnOne.style.display = "block";
		btnTwo.style.display = "block";
		btnThree.style.display = "block";
		btnFour.style.display = "block";
		btnFive.style.display = "block";
		btnSix.style.display = "block";
	}
}

twentySix.onclick = function() {
	if(twentySix.style.color !== "red") {
		twentySix.style.color = "red";
		one.style.color = "#555";
		two.style.color = "#555";
		three.style.color = "#555";
		four.style.color = "#555";
		five.style.color = "#555";
		six.style.color = "#555";
		seven.style.color = "#555";
		eight.style.color = "#555";
		nine.style.color = "#555";
		ten.style.color = "#555";
		eleven.style.color = "#555";
		twelve.style.color = "#555";
		thirteen.style.color = "#555";
		fourteen.style.color = "#555";
		fifteen.style.color = "#555";
		sixteen.style.color = "#555";
		seventeen.style.color = "#555";
		eighteen.style.color = "#555";
		nineteen.style.color = "#555";
		twenty.style.color = "#555";
		twentyOne.style.color = "#555";
		twentyTwo.style.color = "#555";
		twentyThree.style.color = "#555";
		twentyFour.style.color = "#555";
		twentyFive.style.color = "#555";
		// thirtyOne.style.color = "#555";
		twentySeven.style.color = "#555";
		twentyEight.style.color = "#555";
		twentyNine.style.color = "#555";
		thirty.style.color = "#555";
		ch.innerText = "26";
		calendar.style.textAlign ="left";
		btnOne.style.display = "block";
		btnTwo.style.display = "block";
		btnThree.style.display = "block";
		btnFour.style.display = "block";
		btnFive.style.display = "block";
		btnSix.style.display = "block";
	}
}

twentySeven.onclick = function() {
	if(twentySeven.style.color !== "red") {
		twentySeven.style.color = "red";
		one.style.color = "#555";
		two.style.color = "#555";
		three.style.color = "#555";
		four.style.color = "#555";
		five.style.color = "#555";
		six.style.color = "#555";
		seven.style.color = "#555";
		eight.style.color = "#555";
		nine.style.color = "#555";
		ten.style.color = "#555";
		eleven.style.color = "#555";
		twelve.style.color = "#555";
		thirteen.style.color = "#555";
		fourteen.style.color = "#555";
		fifteen.style.color = "#555";
		sixteen.style.color = "#555";
		seventeen.style.color = "#555";
		eighteen.style.color = "#555";
		nineteen.style.color = "#555";
		twenty.style.color = "#555";
		twentyOne.style.color = "#555";
		twentyTwo.style.color = "#555";
		twentyThree.style.color = "#555";
		twentyFour.style.color = "#555";
		twentyFive.style.color = "#555";
		twentySix.style.color = "#555";
		// thirtyOne.style.color = "#555";
		twentyEight.style.color = "#555";
		twentyNine.style.color = "#555";
		thirty.style.color = "#555";
		ch.innerText = "27";
		calendar.style.textAlign ="left";
		btnOne.style.display = "block";
		btnTwo.style.display = "block";
		btnThree.style.display = "block";
		btnFour.style.display = "block";
		btnFive.style.display = "block";
		btnSix.style.display = "block";
	}
}

twentyEight.onclick = function() {
	if(twentyEight.style.color !== "red") {
		twentyEight.style.color = "red";
		one.style.color = "#555";
		two.style.color = "#555";
		three.style.color = "#555";
		four.style.color = "#555";
		five.style.color = "#555";
		six.style.color = "#555";
		seven.style.color = "#555";
		eight.style.color = "#555";
		nine.style.color = "#555";
		ten.style.color = "#555";
		eleven.style.color = "#555";
		twelve.style.color = "#555";
		thirteen.style.color = "#555";
		fourteen.style.color = "#555";
		fifteen.style.color = "#555";
		sixteen.style.color = "#555";
		seventeen.style.color = "#555";
		eighteen.style.color = "#555";
		nineteen.style.color = "#555";
		twenty.style.color = "#555";
		twentyOne.style.color = "#555";
		twentyTwo.style.color = "#555";
		twentyThree.style.color = "#555";
		twentyFour.style.color = "#555";
		twentyFive.style.color = "#555";
		twentySix.style.color = "#555";
		twentySeven.style.color = "#555";
		// thirtyOne.style.color = "#555";
		twentyNine.style.color = "#555";
		thirty.style.color = "#555";
		ch.innerText = "28";
		calendar.style.textAlign ="left";
		btnOne.style.display = "block";
		btnTwo.style.display = "block";
		btnThree.style.display = "block";
		btnFour.style.display = "block";
		btnFive.style.display = "block";
		btnSix.style.display = "block";
	}
}

twentyNine.onclick = function() {
	if(twentyNine.style.color !== "red") {
		twentyNine.style.color = "red";
		one.style.color = "#555";
		two.style.color = "#555";
		three.style.color = "#555";
		four.style.color = "#555";
		five.style.color = "#555";
		six.style.color = "#555";
		seven.style.color = "#555";
		eight.style.color = "#555";
		nine.style.color = "#555";
		ten.style.color = "#555";
		eleven.style.color = "#555";
		twelve.style.color = "#555";
		thirteen.style.color = "#555";
		fourteen.style.color = "#555";
		fifteen.style.color = "#555";
		sixteen.style.color = "#555";
		seventeen.style.color = "#555";
		eighteen.style.color = "#555";
		nineteen.style.color = "#555";
		twenty.style.color = "#555";
		twentyOne.style.color = "#555";
		twentyTwo.style.color = "#555";
		twentyThree.style.color = "#555";
		twentyFour.style.color = "#555";
		twentyFive.style.color = "#555";
		twentySix.style.color = "#555";
		twentySeven.style.color = "#555";
		twentyEight.style.color = "#555";
		thirty.style.color = "#555";
		// thirtyOne.style.color = "#555";
		ch.innerText = "29";
		calendar.style.textAlign ="left";
		btnOne.style.display = "block";
		btnTwo.style.display = "block";
		btnThree.style.display = "block";
		btnFour.style.display = "block";
		btnFive.style.display = "block";
		btnSix.style.display = "block";
	}
}

thirty.onclick = function() {
	if(thirty.style.color !== "red") {
		thirty.style.color = "red";
		one.style.color = "#555";
		two.style.color = "#555";
		three.style.color = "#555";
		four.style.color = "#555";
		five.style.color = "#555";
		six.style.color = "#555";
		seven.style.color = "#555";
		eight.style.color = "#555";
		nine.style.color = "#555";
		ten.style.color = "#555";
		eleven.style.color = "#555";
		twelve.style.color = "#555";
		thirteen.style.color = "#555";
		fourteen.style.color = "#555";
		fifteen.style.color = "#555";
		sixteen.style.color = "#555";
		seventeen.style.color = "#555";
		eighteen.style.color = "#555";
		nineteen.style.color = "#555";
		twenty.style.color = "#555";
		twentyOne.style.color = "#555";
		twentyTwo.style.color = "#555";
		twentyThree.style.color = "#555";
		twentyFour.style.color = "#555";
		twentyFive.style.color = "#555";
		twentySix.style.color = "#555";
		twentySeven.style.color = "#555";
		twentyEight.style.color = "#555";
		twentyNine.style.color = "#555";
		// thirtyOne.style.color = "#555";
		ch.innerText = "30";
		calendar.style.textAlign ="left";
		btnOne.style.display = "block";
		btnTwo.style.display = "block";
		btnThree.style.display = "block";
		btnFour.style.display = "block";
		btnFive.style.display = "block";
		btnSix.style.display = "block";
	}
}

// thirtyOne.onclick = function() {
// 	if(thirtyOne.style.color !== "red") {
// 		thirtyOne.style.color = "red";
// 		one.style.color = "#555";
// 		two.style.color = "#555";
// 		three.style.color = "#555";
// 		four.style.color = "#555";
// 		five.style.color = "#555";
// 		six.style.color = "#555";
// 		seven.style.color = "#555";
// 		eight.style.color = "#555";
// 		nine.style.color = "#555";
// 		ten.style.color = "#555";
// 		eleven.style.color = "#555";
// 		twelve.style.color = "#555";
// 		thirteen.style.color = "#555";
// 		fourteen.style.color = "#555";
// 		fifteen.style.color = "#555";
// 		sixteen.style.color = "#555";
// 		seventeen.style.color = "#555";
// 		eighteen.style.color = "#555";
// 		nineteen.style.color = "#555";
// 		twenty.style.color = "#555";
// 		twentyOne.style.color = "#555";
// 		twentyTwo.style.color = "#555";
// 		twentyThree.style.color = "#555";
// 		twentyFour.style.color = "#555";
// 		twentyFive.style.color = "#555";
// 		twentySix.style.color = "#555";
// 		twentySeven.style.color = "#555";
// 		twentyEight.style.color = "#555";
// 		twentyNine.style.color = "#555";
// 		thirty.style.color = "#555";
// 		ch.innerText = "31";
// 		calendar.style.textAlign ="left";
// 		btnOne.style.display = "block";
// 		btnTwo.style.display = "block";
// 		btnThree.style.display = "block";
// 		btnFour.style.display = "block";
// 		btnFive.style.display = "block";
// 		btnSix.style.display = "block";
// 	}
// }

window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}