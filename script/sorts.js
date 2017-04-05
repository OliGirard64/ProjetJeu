function gererSort()
{
	var ToucheSort = window.event.keyCode;

	switch (ToucheSort)
	{
		case 49: sort1();
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
		
		case 1: document.getElementById("imgSort1").style.display = "block";
				break;		
		case 2: document.getElementById("imgSort1").style.display = "block";
				break;		
		case 3: document.getElementById("imgSort1").style.display = "block";			
				break;		
		case 4: document.getElementById("imgSort1").style.display = "block";
				break;
	}


}