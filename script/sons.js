var Att = new Audio('sons/attaque.wav');
var Ya = new Audio('sons/ya.wav');
var Ya2 = new Audio('sons/ya2.wav');
var Ya3 = new Audio('sons/ya3.wav');
var Tele = new Audio('sons/teleport.wav');
var Feu = new Audio('sons/feu.wav');
var Hurt = new Audio("sons/hurt.wav");
var Mort = new Audio("sons/Mort.wav")


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

var Start = new Audio('sons/start.wav');
function JouerSonStart() 
{ 
    Start.play(); 
} 


function genererNbAle(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}