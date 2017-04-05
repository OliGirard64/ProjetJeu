function gererSort()
{
	var ToucheSort = window.event.keyCode;

	switch (ToucheSort)
	{
		case 49: sort1();
				break;
		case 50: sort2();
				break;
		case 51: sort3();			
				break;
		case 52: sort4();
				break;
	}
}

var direction = 0;

function sort1()
{
	switch (ToucheSort)
	{
		case 37: direction = 1;
				break;
		case 38: direction = 2;
				break;
		case 39: direction = 3;			
				break;
		case 40: direction = 4;
				break;
	}
}