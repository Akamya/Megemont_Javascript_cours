function changeCSS() {
	var element = document.getElementById("choice").selectedIndex;

	switch(element) {
		case 0: file="/rsrc/nolife.css"; break;
		case 1: file="/rsrc/chasseurs.css"; break;
		case 2: file="/rsrc/hellokitty.css"; break;
	}
	document.getElementsByTagName("link")[0].href = file;
}