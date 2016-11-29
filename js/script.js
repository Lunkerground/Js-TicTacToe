var player = 1;

// --------<< Cliquer sur les cases >>--------

for (var j = 0; j < 9; j++) {

		var cible = document.getElementsByTagName("td")[j];

		cible.onclick = clickPlayer;

}

// --------<< Affichage des tours >>--------

if (player == 1) {

	document.getElementById("joueur1").innerHTML = "Au tour du joueur 1 !";

	player = 2;

} else if (player == 2) {

	document.getElementById("joueur2").innerHTML = "Au tour du joueur 2 !";

	player = 1;

}

// --------<< Fonction "click" + affichage du gagnant >>--------

function clickPlayer(e) {

	if (e.target.className != "player1" && e.target.className != "player2") {

		if (player == 1) {

			document.getElementById("joueur1").innerHTML = "Au tour du joueur 1 !";

			document.getElementById("joueur2").innerHTML = "";

			e.target.className = "player1";

			if (victoire()) {
				document.getElementById("winner").style.visibility = "visible";
				document.getElementById("winner").innerHTML = "Joueur 2 a gagné !";
			} else {

			}

			player = 2;

		} else {

			document.getElementById("joueur2").innerHTML = "Au tour du joueur 2 !";

			document.getElementById("joueur1").innerHTML = "";

			e.target.className = "player2";

			if (victoire()) {
				document.getElementById("winner").style.visibility = "visible";
				document.getElementById("winner").innerHTML = "Joueur 1 a gagné !";
			} else {

			}

			player = 1;

		}

	}

}

// --------<< Fonction détection de victoire >>--------

function victoire() {

	var condi = document.getElementsByTagName("td");

	if (condi[0].className == condi[1].className && condi[1].className == condi[2].className) {
		return true;
	} else if (condi[3].className == condi[4].className && condi[4].className == condi[5].className) {
		return true;
	} else if (condi[6].className == condi[7].className && condi[7].className == condi[8].className) {
		return true;
	} else if (condi[0].className == condi[3].className && condi[3].className == condi[6].className) {
		return true;
	} else if (condi[1].className == condi[4].className && condi[4].className == condi[7].className) {
		return true;
	} else if (condi[3].className == condi[2].className && condi[5].className == condi[8].className) {
		return true;
	} else if (condi[0].className == condi[4].className && condi[4].className == condi[8].className) {
		return true;
	} else if (condi[2].className == condi[4].className && condi[4].className == condi[6].className) {
		return true;
	} else {
		return false;
	}

}

// --------<< Fonction "hide" de la div des résultats >>--------

function hide() {

	document.getElementById("winner").style.visibility = "hidden";

}