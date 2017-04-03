function Monstre(PosX, PosY, Vitesse)
{
	this.PosX = PosX;
	this.PosY = PosY;
	this.Vitesse = Vitesse;
}

var Octo = new Monstre(400, 100, 30)

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
	var MinX = 35, MaxX = 755, MinY = 25, MaxY = 745;
	
	random = genererNbAle(1,8)
		
	switch (random)
	{
		case 1,3: Octo.deplacerGauche();
				
				break;
		case 2,4: Octo.deplacerDroite();
					
				break;
		case 3,5: Octo.deplacerHaut();
					
				break;
		case 4,6,8: Octo.deplacerBas();		
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















