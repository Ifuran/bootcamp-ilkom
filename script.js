function view(nilai) {
	document.getElementById("display").value += nilai;
}

function clean() {
	document.getElementById("display").value = "";
}

function backspace() {
	var nilai = document.getElementById("display").value;
	document.getElementById("display").value = nilai.substring(0, nilai.length-1);
}
function equal() {
	var nilai = document.getElementById("display").value;
	if (nilai) {
		document.getElementById("display").value = eval(nilai);

		if (nilai = eval(0/0)) {
			document.getElementById("display").value = "NaN";
		}
	}
}