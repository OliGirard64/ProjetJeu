
var PosEpeeY = 0;
var PosEpeeX = 0;

function gererSort()
{
	var ToucheSort = window.event.keyCode;

	switch (ToucheSort)
	{
		case 49:sort1();
				break;
		case 50: sort2();
				break;
		case 51: sort3();			
				break;
		/*case 52: sort4();
				break;*/
	}
}

var direction = 0;
var CptVieMonstre = 0;

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
				document.getElementById("EpeeGauche").style.display = "block";	
				document.getElementById("EpeeGauche").style.top = MonPerso.PosY + "px";
				document.getElementById("EpeeGauche").style.left = MonPerso.PosX - 40 + "px";
				PosEpeeY = MonPerso.PosY;
				PosEpeeX = MonPerso.PosX - 40;
				setTimeout(cacherSort, 150);
				break;	

		case 2: JouerSonAtt();
				document.getElementById("EpeeUp").style.display = "block";
				document.getElementById("EpeeUp").style.top = MonPerso.PosY - 40 + "px";
				document.getElementById("EpeeUp").style.left = MonPerso.PosX + "px";
				PosEpeeY = MonPerso.PosY - 40;
				PosEpeeX = MonPerso.PosX;
				setTimeout(cacherSort, 150);
				break;		
		case 3: JouerSonAtt();
				document.getElementById("EpeeDroite").style.display = "block";
				document.getElementById("EpeeDroite").style.top = MonPerso.PosY + "px";
				document.getElementById("EpeeDroite").style.left = MonPerso.PosX + 40 + "px";
				PosEpeeX = MonPerso.PosX + 40;
				PosEpeeY = MonPerso.PosY;
				setTimeout(cacherSort, 150);		
				break;		
		case 4: JouerSonAtt();
				document.getElementById("EpeeDown").style.display = "block";
				document.getElementById("EpeeDown").style.top = MonPerso.PosY + 40 + "px";
				document.getElementById("EpeeDown").style.left = MonPerso.PosX + "px";	
				PosEpeeY = MonPerso.PosY + 40;
				PosEpeeX = MonPerso.PosX;	
				setTimeout(cacherSort, 150);
				break;
	}

		if (PosEpeeX == Octo.PosX && PosEpeeY == Octo.PosY) 
		{
			CptVieMonstre ++;
		}


		if (CptVieMonstre == 1) 
		{
			document.getElementById("coeur_monstre").src = "img/coeur/monstre_2.png"
		}
		else if(CptVieMonstre == 2)
		{
			document.getElementById("coeur_monstre").src = "img/coeur/monstre_1.png";
		}
		else if(CptVieMonstre == 3)
		{
			document.getElementById("coeur_monstre").src = "img/coeur/vide.png";
			document.getElementById("imgMons").src = "img/sprite_gif/m_mort.gif";
			document.getElementById("victoire").style.display = "block";
			StopSonJeu();
			JouerSonVictoire();
		}

}

function sort2()
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
		
		case 1: JouerSonTele();
				for (var i = 0; i < 5; i++) 
				{
					MonPerso.deplacerGauche();
				}
				break;

		case 2: JouerSonTele();
				for (var i = 0; i < 5; i++) 
				{
					MonPerso.deplacerHaut();
				}
				break;

		case 3: JouerSonTele();
				for (var i = 0; i < 5; i++) 
				{
					MonPerso.deplacerDroite();
				}	
				break;

		case 4: JouerSonTele();
				for (var i = 0; i < 5; i++) 
				{
					MonPerso.deplacerBas();
				}
				break;
	}


}



var PosDiffX = 0;
var PosDiffY = 0;

function sort3()
{
	
	JouerSonFeu();
		 
	document.getElementById("feu").style.display = "block";	
	document.getElementById("feu").style.top = MonPerso.PosY - 40 + "px";
	document.getElementById("feu").style.left = MonPerso.PosX - 40 + "px";
	setTimeout(cacherSort, 300);

	PosDiffX = Math.abs(MonPerso.PosX - Octo.PosX);
	PosDiffY = Math.abs(MonPerso.PosY - Octo.PosY);  



	console.log(PosDiffX)
	console.log(PosDiffY)



	if (PosDiffX <= 40 && PosDiffY <= 40) 
	{
		CptVieMonstre ++;
	}

	if (CptVieMonstre == 1) 
		{
			document.getElementById("coeur_monstre").src = "img/coeur/monstre_2.png"
		}
		else if(CptVieMonstre == 2)
		{
			document.getElementById("coeur_monstre").src = "img/coeur/monstre_1.png";
		}
		else if(CptVieMonstre == 3)
		{
			document.getElementById("coeur_monstre").src = "img/coeur/vide.png";
			document.getElementById("imgMons").src = "img/sprite_gif/m_mort.gif";
			document.getElementById("victoire").style.display = "block";
			StopSonJeu();
			JouerSonVictoire();
		}

}




function cacherSort()
{
	document.getElementById("EpeeUp").style.display = "none";
	document.getElementById("EpeeGauche").style.display = "none";
	document.getElementById("EpeeDroite").style.display = "none";
	document.getElementById("EpeeDown").style.display = "none";
	document.getElementById("feu").style.display = "none";
}




