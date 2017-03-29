function Monstre(PosX, PosY, Vitesse)
{
	this.PosX = PosX;
	this.PosY = PosY;
	this.Vitesse = Vitesse;
}

var Octo = new Monstre(400, 100, 5)

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
	
		random = genererNbAle(1,4)
		
		switch (random)
		{
			case 1: Octo.deplacerGauche();
					
					break;
			case 2: Octo.deplacerDroite();
					
					break;
			case 3: Octo.deplacerHaut();
					
					break;
			case 4: Octo.deplacerBas();		
		}

	

}

function genererNbAle(Min, Max)
{
	return Math.floor(Math.random()*(Max - Min + 1)+Min);
}

//Exemple deplacer le personnage en X Y
	var imgMons = document.getElementById("imgMons");
	imgMons.style.left = Octo.PosX + "px";
	imgMons.style.top = Octo.PosY + "px";
