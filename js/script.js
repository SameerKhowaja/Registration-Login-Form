function change_income() {		
	var rangeLabel = document.getElementById("range-label");
	var experience = document.getElementById("experience");
	rangeLabel.innerText = experience.value + "K";
}