var Start = new Audio('sons/start.wav');
var Att = new Audio('sons/attaque.wav');
var Ya = new Audio('sons/ya.wav');
var Ya2 = new Audio('sons/ya2.wav');
var Ya3 = new Audio('sons/ya3.wav');
var Tele = new Audio('sons/teleport.wav');
var Feu = new Audio('sons/feu.wav');
var Hurt = new Audio("sons/hurt.wav");
var Mort = new Audio("sons/Mort.wav");
var Over = new Audio("sons/gameover.mp3");
var Victoire = new Audio("sons/victoire.mp3");


function JouerSonVictoire() 
{ 
    Victoire.play(); 
} 
function StopSonJeu()
{
    document.getElementById('son_jeu').muted = true;
}
function JouerSonStart() 
{ 
    Start.play(); 
} 
function JouerSonOver()
{
    Over.play();
}
function JouerSonMort()
{
    Mort.play();
}

function JouerSonHurt()
{
    Hurt.play();
}
function JouerSonTele()
{
	Tele.play();
}

function JouerSonFeu()
{
	Feu.play();
}

function JouerSonAtt() 
{ 

	var NbAle = genererNbAle(1,3);
    Att.play(); 

    switch(NbAle)
    {
    	case 1: Ya.play();
    		break;
    	case 2: Ya2.play();
    		break;
    	case 3: Ya3.play();
    		break;
    }

    
} 





function genererNbAle(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}