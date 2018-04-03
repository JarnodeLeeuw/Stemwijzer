var subjectNr = 0;
var whatOpen = false;

var partyScore= [
		{name: "50Plus", score: 0},
		{name: "Artikel 1", score: 0},
		{name: "CDA", score: 0},
		{name: "ChristenUnie", score: 0},
		{name: "D66", score: 0},
		{name: "Denk", score: 0},
		{name: "De Burger Beweging", score: 0},
		{name: "Forum voor Democratie", score: 0},
		{name: "GroenLinks", score: 0},
		{name: "Libertarische Partij", score: 0},
		{name: "Lokaal in de Kamer", score: 0},
		{name: "Nieuwe Wegen", score: 0},
		{name: "OndernemersPartij", score: 0},
		{name: "PVV", score: 0},
		{name: "Partij voor de Dieren", score: 0},
		{name: "Piratenpartij", score: 0},
		{name: "PVDA", score: 0},
		{name: "SGP", score: 0},
		{name: "SP", score: 0},
		{name: "VNL", score: 0},
		{name: "VVD", score: 0},
		{name: "Vrijzinnige Partij", score: 0}
	];

document.getElementById("survey").style.display ="none";
document.getElementById("Back").style.display ="none";
document.getElementById("result").style.display ="none";
document.getElementById("finalScore").style.display ="none";

function start(){
	document.getElementById("subject").innerHTML = subjects[0].title;
	document.getElementById("statement").innerHTML = subjects[0].statement;	
	document.getElementById("survey").style.display ="inline";
	document.getElementById("Back").style.display ="inline";
	document.getElementById("start").style.display ="none";
	for (var i = 0; i < subjects[0].parties.length; i++) {
		console.log(subjects[0].parties[i], i)
	}

}

function next(){
	if (subjectNr > 5) {
		calculateScores()
	}else{
		subjectNr ++
		document.getElementById("subject").innerHTML = subjects[subjectNr].title;
		document.getElementById("statement").innerHTML = subjects[subjectNr].statement;
		document.getElementById("partyOpinion").innerHTML = "";
		whatOpen = false
		for (var i = 0; i < subjects[subjectNr].parties.length; i++) {
			console.log(subjects[subjectNr].parties[i], i)
		}
	}
}

function back(){
	if (subjectNr < 1) {
		start()
	}
	subjectNr --
	document.getElementById("subject").innerHTML = subjects[subjectNr].title;
	document.getElementById("statement").innerHTML = subjects[subjectNr].statement;
	document.getElementById("partyOpinion").innerHTML = "";
	whatOpen = false
	for (var i = 0; i < subjects[subjectNr].parties.length; i++) {
		console.log(subjects[subjectNr].parties[i], i)
	}

	
}

function what(){
	var partyOpinion = document.getElementById("partyOpinion");
	if (whatOpen == false) {
		for (var k = 0; k < subjects[subjectNr].parties.length; k++) {
		    var node = document.createElement("p");
		    var textnode = document.createTextNode(subjects[subjectNr].parties[k].name + " " + subjects[subjectNr].parties[k].position + " " + subjects[subjectNr].parties[k].explanation);
		    node.appendChild(textnode);
		    partyOpinion.appendChild(node);
		    whatOpen = true;
		}
	}else {
		partyOpinion.innerHTML = "";
		whatOpen = false;
	
	}
}

function pro(){

if (subjectNr == subjects.length-1) {
		calculateScores()
	}else{
			subjectNr ++
			document.getElementById("subject").innerHTML = subjects[subjectNr].title;
			document.getElementById("statement").innerHTML = subjects[subjectNr].statement;
			document.getElementById("partyOpinion").innerHTML = "";
			whatOpen = false

			if (typeof(Storage) !== "undefined") {
		    // Store
		    sessionStorage.setItem(subjectNr, "pro");
		    // Retrieve
		    document.getElementById("result").innerHTML = sessionStorage.getItem(subjectNr);
		} else {
		    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		for (var i = 0; i < subjects[subjectNr].parties.length; i++) {
				console.log(subjects[subjectNr].parties[i], i)
			}
	}
}
console.log(subjects)
console.log(subjectNr)

function con(){
if (subjectNr == subjects.length-1) {
		calculateScores()
	}else{


			subjectNr ++
			document.getElementById("subject").innerHTML = subjects[subjectNr].title;
			document.getElementById("statement").innerHTML = subjects[subjectNr].statement;
			document.getElementById("partyOpinion").innerHTML = "";
			whatOpen = false

			if (typeof(Storage) !== "undefined") {
		    // Store
		    sessionStorage.setItem(subjectNr, "contra");
		    // Retrieve
		    document.getElementById("result").innerHTML = sessionStorage.getItem(subjectNr);
		} else {
		    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		for (var i = 0; i < subjects[subjectNr].parties.length; i++) {
				console.log(subjects[subjectNr].parties[i], i)
			}
	}
}

function meh(){
	if (subjectNr == subjects.length-1) {
		calculateScores()
		}else{

			
			subjectNr ++
			document.getElementById("subject").innerHTML = subjects[subjectNr].title;
			document.getElementById("statement").innerHTML = subjects[subjectNr].statement;
			document.getElementById("partyOpinion").innerHTML = "";
			whatOpen = false
			
			if (typeof(Storage) !== "undefined") {
		    // Store
		    sessionStorage.setItem(subjectNr, "ambivalent");
		    // Retrieve
		    document.getElementById("result").innerHTML = sessionStorage.getItem(subjectNr);
		} else {
		    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		for (var i = 0; i < subjects[subjectNr].parties.length; i++) {
				console.log(subjects[subjectNr].parties[i], i)
			}
	}
}




function calculateScores(){
	for (var i = 0; i < subjects.length; i++) {
			subjects[i].parties.sort(function(a, b){
			    if(a.name < b.name) return -1;
			    if(a.name > b.name) return 1;
			    return 0;
			})
			console.log(subjects[i].parties)
		
		var myScore = sessionStorage.getItem(i);

		for (var j = 0; j < subjects[i].parties.length; j++) {
			var currentParty = subjects[i].parties[j];


			if (myScore == currentParty.position) {
				partyScore[j].score ++;
			}
		}
	}

			partyScore.sort(function(a, b){
			    if(a.score > b.score) return -1;
			    if(a.score < b.score) return 1;
			    return 0;
			})
			console.log(partyScore)
	document.getElementById("survey").style.display ="none";
	document.getElementById("finalScore").style.display = "inline";
	for (var k = 0; k < partyScore.length; k++) {
		    var node = document.createElement("p");
		    var textnode = document.createTextNode(partyScore[k].name + ": " + partyScore[k].score);
		    node.appendChild(textnode);
		    document.getElementById("finalScore").appendChild(node);
		}
	
}



// array met resultaten per partij


// loop door je subjects


	// haal de choice op voor het betreffende subject choice[index]
	// loop door de partijen van het subject
		// vergelijk de choice met het standpunt van de partij
		// geef de partij een punt (nieuwe array?)