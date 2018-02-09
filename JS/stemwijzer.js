var nr = 0;

document.getElementById("survey").style.display ="none";
document.getElementById("Back").style.display ="none";

function start(){
	document.getElementById("subject").innerHTML = subjects[0].title;
	document.getElementById("statement").innerHTML = subjects[0].statement;	
	document.getElementById("survey").style.display ="inline";
	document.getElementById("Back").style.display ="inline";
	document.getElementById("start").style.display ="none";

}

function next(){
	if (nr > 30) {
		exit()
	}
	nr ++
	document.getElementById("subject").innerHTML = subjects[nr].title;
	document.getElementById("statement").innerHTML = subjects[nr].statement;
	
}

function back(){
	if (nr < 1) {
		exit()
	}
	nr --
	document.getElementById("subject").innerHTML = subjects[nr].title;
	document.getElementById("statement").innerHTML = subjects[nr].statement;
	
}

function what(){
	document.getElementById("opinon").innerHTML = subjects[nr].parties;
}

function pro(){

	if (nr > 30) {
		exit()
	}
	nr ++
	document.getElementById("subject").innerHTML = subjects[nr].title;
	document.getElementById("statement").innerHTML = subjects[nr].statement;

	if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem(nr, 1);
    // Retrieve
    document.getElementById("result").innerHTML = sessionStorage.getItem(nr);
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function con(){
		if (nr > 30) {
		exit()
	}
	nr ++
	document.getElementById("subject").innerHTML = subjects[nr].title;
	document.getElementById("statement").innerHTML = subjects[nr].statement;

	if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem(nr, -1);
    // Retrieve
    document.getElementById("result").innerHTML = sessionStorage.getItem(nr);
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function meh(){
		if (nr > 30) {
		exit()
	}
	nr ++
	document.getElementById("subject").innerHTML = subjects[nr].title;
	document.getElementById("statement").innerHTML = subjects[nr].statement;


	if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem(nr, 0);
    // Retrieve
    document.getElementById("result").innerHTML = sessionStorage.getItem(nr);
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}