function Perso(PosX, PosY, Vitesse, Diag)
{
	this.PosX = PosX;
	this.PosY = PosY;
	this.Vitesse = Vitesse;
	this.Diag = Math.round(Math.sqrt(Math.pow(this.Vitesse,2)/2));
};

var MonPerso = new Perso(430, 340, 5, 0);

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


function deplacer()
{

}