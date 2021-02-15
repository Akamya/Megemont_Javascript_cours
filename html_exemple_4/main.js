function calcul() {
	var somme = 0;
	if(document.getElementById("cafe").checked == true) {somme+=140}
	if(document.getElementById("pain").checked == true) {somme+=100}
	if(document.getElementById("journal").checked == true) {somme+=280}
	document.getElementById('resultat').style.display = "block";
	document.getElementById('resultat').innerHTML = `Le total est de ${somme/100}€`;
}
