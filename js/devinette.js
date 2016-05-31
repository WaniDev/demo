/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
var saissie=0;
// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var essai=1;
do{
	saissie=prompt("Saissir une chiffre en 1 et 100");
	
	if(saissie>solution)
		console.log(saissie+" est trop grand");
	if(saissie<solution)
				console.log(saissie+" est trop petit");
	essai++;

}while((solution!=saissie) && (essai<=6));

if(solution==saissie){
	console.log("Bravo! La solution était "+solution);
	console.log("Vous avez trouvé en "+essai+" essai(s)");
}else{
	console.log("Perdu... La soution était "+solution);
}
