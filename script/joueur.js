function Perso(PosX, PosY, Vitesse, Diag)
{
	this.PosX = PosX;
	this.PosY = PosY;
	this.Vitesse = Vitesse;
	this.Diag = Math.round(Math.sqrt(Math.pow(this.Vitesse,2)/2));
};

var MonPerso = new Perso(389, 729, 40, 0);

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

/*Perso.prototype.deplacerHautGauche = function() 
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
}*/

var derniereDirection = 0; 

function deplacer()
{

	//ligne de code pour le déplacement
	var Touche = window.event.keyCode;	
	var MinX = 35, MaxX = 735, MinY = 25, MaxY = 745;
	


	//verifier la touche  ( switch )

	switch (Touche)
	{
		case 37:MonPerso.deplacerGauche();
				derniereDirection = Touche;
				deplacerMonstre();
				break;
		case 39:MonPerso.deplacerDroite();
				derniereDirection = Touche;
				deplacerMonstre();
				break;
		case 38:MonPerso.deplacerHaut();
				derniereDirection = Touche;
				deplacerMonstre();
				break;
		case 40:MonPerso.deplacerBas();	
				derniereDirection = Touche;
				deplacerMonstre();			
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
	
	var imgPers = document.getElementById("imgPers");
	imgPers.style.left = MonPerso.PosX + "px";
	imgPers.style.top = MonPerso.PosY + "px";

}










