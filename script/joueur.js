function Perso(PosX, PosY, Vitesse, Diag)
{
	this.PosX = PosX;
	this.PosY = PosY;
	this.Vitesse = Vitesse;
	this.Diag = Math.round(Math.sqrt(Math.pow(this.Vitesse,2)/2));
};

var MonPerso = new Perso(400, 400, 5, 0);

Perso.prototype.deplacerGauche = function() 
{
	this.PosX = this.PosX - this.Vitesse;
}
Perso.prototype.deplacerDroite = function() 
{
	this.PosX = this.PosX + this.Vitesse;
}
Perso.prototype.deplacerHaut = function() 
{
	this.PosY = this.PosY - this.Vitesse;
}
Perso.prototype.deplacerBas = function() 
{
	this.PosY = this.PosY + this.Vitesse;
}

Perso.prototype.deplacerHautGauche = function() 
{
	this.PosX = this.PosX - this.Diag;
	this.PosY = this.PosY - this.Diag;
}
Perso.prototype.deplacerHautDroite = function() 
{
	this.PosX = this.PosX + this.Diag;
	this.PosY = this.PosY - this.Diag;
}
Perso.prototype.deplacerBasGauche = function() 
{
	this.PosX = this.PosX - this.Diag;
	this.PosY = this.PosY + this.Diag;
}
Perso.prototype.deplacerBasDroite = function() 
{
	this.PosX = this.PosX + this.Diag;
	this.PosY = this.PosY + this.Diag;
}


function deplacer()
{

	//ligne de code pour le déplacement
	var Touche = window.event.keyCode;
	var MinX = 25, MaxX = 775, MinY = 35, MaxY = 775;
	
	
	//verifier la touche  ( switch )

	switch (Touche)
	{
		case 37: MonPerso.deplacerGauche();
				break;
		case 39: MonPerso.deplacerDroite();
				break;
		case 38: MonPerso.deplacerHaut();
				break;
		case 40: MonPerso.deplacerBas();
				break;
		case 103: MonPerso.deplacerHautGauche();
				break;
		case 105: MonPerso.deplacerHautDroite();
				break;
		case 97: MonPerso.deplacerBasGauche();
				break;
		case 99: MonPerso.deplacerBasDroite();
				break;
	}

	//verifier si on touche un mur

	if (MonPerso.PosX <= MinX ) 
	{
		MonPerso.PosX = MinX
	}

	if (MonPerso.PosX >= MaxX) 
	{
		MonPerso.PosX = MaxX
	}

	if (MonPerso.PosY <= MinY ) 
	{
		MonPerso.PosY = MinY
	}

	if (MonPerso.PosY >= MaxY ) 
	{
		MonPerso.PosY = MaxY
	}
	
	//Exemple deplacer le personnage en X Y
	var imgPers = document.getElementById("imgPers");
	imgPers.style.left = MonPerso.PosX + "px";
	imgPers.style.top = MonPerso.PosY + "px";

}