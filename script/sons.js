
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