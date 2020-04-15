var modal = document.querySelector("#myModal");
var btn = document.querySelector(".btn");
var close = document.querySelector(".close-btn");


btn.onclick = function() {
	modal.style.display = "block";
}

close.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}