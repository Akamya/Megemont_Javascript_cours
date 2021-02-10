function afficher(param) {
	var folder = "/img/"
	var fileName = `${folder}HQ${param}.jpg`;
	document.getElementById("img_big").src = fileName;
	document.getElementById(`img_${param}`).classList.add("shadow");
	console.log(fileName);
}

function reset(param) {
	document.getElementById(`img_${param}`).classList.remove("shadow");
}