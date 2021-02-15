/* analyse every element to ensure that everything is correctly fill
 */
function analyser() {
	let error = 0;
	let radios = document.getElementsByName("gender");
	let flags = 0;

	for(let i = 0; i < radios.length; i++) {
		if(radios[i].checked) flags = i+1;
	}
	if(flags == 0) error += 1;
	error = testElement('nom', 2, error);
	error = testElement('prenom', 4, error);
	error = testElement('addresse', 8, error);
	error = testElement('code', 16, error);
	error = testElement('ville', 32, error);

	showPanel(error);
}

/* @param { string } id - id of DOM element 
 * @param { int } errorValue 
 * @param { error } error - get the current error value
 */
function testElement(id, errorValue, error) {
	let param = document.getElementById(id);
	if(param.value == "") {
		param.style.borderColor='#FF0000';
		error+=errorValue;
	} else {
		param.style.borderColor='#00b800';
	}
	return error;
}

/* Show panel if no error, else hide it 
 */

function showPanel(error) {
	let html = "<div id='kk'><hr><textarea id='txt' rows='6'></textarea><br>"
	html+= "<input type='checkbox' id='valide'>Je valide cette addresse <br>"
	html+= "<input type='checkbox' id='cgv'>J'accepte un truc que je connais pô<br>"
	html+= "<input type='submit' value='ok' onclick=''></div>"

	document.getElementById("panel").innerHTML = html;

	if(error!=0) document.getElementById("kk").style.display = "None";

}
