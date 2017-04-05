function Monstre(PosX, PosY, Vitesse)
{
	this.PosX = PosX;
	this.PosY = PosY;
	this.Vitesse = Vitesse;
}

var Octo = new Monstre(389, 109, 40)
var MinX = 35, MaxX = 755, MinY = 25, MaxY = 745;
Monstre.prototype.deplacerGauche = function() 
{
	this.PosX = this.PosX - this.Vitesse;
}
Monstre.prototype.deplacerDroite = function() 
{
	this.PosX = this.PosX + this.Vitesse;
}
Monstre.prototype.deplacerHaut = function() 
{
	this.PosY = this.PosY - this.Vitesse;
}
Monstre.prototype.deplacerBas = function() 
{
	this.PosY = this.PosY + this.Vitesse;
}


function deplacerMonstre()
{
	var Touche = window.event.keyCode;
	var MinX = 35, MaxX = 755, MinY = 25, MaxY = 745;
	
	random = genererNbAle(1,8)
		

	
		switch (random)
		{
			case 1:
	   		case 8: 
					Octo.deplacerGauche();
					break;
			case 3:		
			case 7: 
					Octo.deplacerDroite();
					break;
			case 5:
					Octo.deplacerHaut();					
					break;
			case 2:
			case 6: 
					Octo.deplacerBas();		
		}
	


	if (Octo.PosX <= MinX ) 
	{
		Octo.PosX = MinX
	}

	if (Octo.PosX >= MaxX) 
	{
		Octo.PosX = MaxX
	}

	if (Octo.PosY <= MinY ) 
	{
		Octo.PosY = MinY
	}

	if (Octo.PosY >= MaxY ) 
	{
		Octo.PosY = MaxY
	}	

	var imgMons = document.getElementById("imgMons");
	imgMons.style.left = Octo.PosX + "px";
	imgMons.style.top = Octo.PosY + "px";



}

function intervalDep()
{
	setInterval(deplacerMonstre(), 1000);
}


function genererNbAle(Min, Max)
{
	return Math.floor(Math.random()*(Max - Min + 1)+Min);
}















