
var Att = new Audio('sons/attaque.wav');

function gererSort()
{
	var ToucheSort = window.event.keyCode;

	switch (ToucheSort)
	{
		case 49:sort1();
				break;
		/*case 50: sort2();
				break;
		case 51: sort3();			
				break;
		case 52: sort4();
				break;*/
	}
}

var direction = 0;

function sort1()
{
	

	switch (derniereDirection)
	{
		/*gauche*/
		case 37: direction = 1;
				break;
		/*haut*/		
		case 38: direction = 2;
				break;
		/*droite*/		
		case 39: direction = 3;			
				break;
		/*bas*/		
		case 40: direction = 4;
				break;
	}

	switch (direction)
	{
		
		case 1: JouerSonAtt();
				document.getElementById("imgSort1").style.display = "block";	
				document.getElementById("imgSort1").style.top = MonPerso.PosY + "px";
				document.getElementById("imgSort1").style.left = MonPerso.PosX - 40 + "px";
				setTimeout(cacherSort, 150);
				break;	

		case 2: JouerSonAtt();
				document.getElementById("imgSort1").style.display = "block";
				document.getElementById("imgSort1").style.top = MonPerso.PosY - 40 + "px";
				document.getElementById("imgSort1").style.left = MonPerso.PosX + "px";
				setTimeout(cacherSort, 150);
				break;		
		case 3: JouerSonAtt();
				document.getElementById("imgSort1").style.display = "block";
				document.getElementById("imgSort1").style.top = MonPerso.PosY + "px";
				document.getElementById("imgSort1").style.left = MonPerso.PosX + 40 + "px";	
				setTimeout(cacherSort, 150);		
				break;		
		case 4: JouerSonAtt();
				document.getElementById("imgSort1").style.display = "block";
				document.getElementById("imgSort1").style.top = MonPerso.PosY + 40 + "px";
				document.getElementById("imgSort1").style.left = MonPerso.PosX + "px";	
				setTimeout(cacherSort, 150);
				break;
	}


}


function cacherSort()
{
	document.getElementById("imgSort1").style.display = "none";
}




