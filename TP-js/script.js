let boutonEnvoyer = document.getElementById('boutonAjouter');
 
// J'ai crée une fonction pour ajouter une dépense quand on clique sur le bouton
const ajouterDepense = function(event) {
    event.preventDefault();
   
    const description = document.getElementById('description').value;
    const montant = document.getElementById('montant').value;
 
    // Ici j'ai vérifié que l'utilisateur a bien rempli les deux champs
    if(description === "" || montant === "") {
        alert("Merci de remplir tous les champs !");
        return;
    }
   
    const listeDepenses = document.getElementById("listeDepenses");
    const nouvelleLigne = document.createElement("tr");
   
    // J'ai commencer par créer la colonne de description du tableau 
    const colonneDescription = document.createElement("th");
    const texteDescription = document.createTextNode(description);
    colonneDescription.appendChild(texteDescription);
   
    // Ensuite j'ai crée la colonne du montant du tableau
    const colonneMontant = document.createElement("td");
    const texteMontant = document.createTextNode(montant);
    colonneMontant.appendChild(texteMontant);
 
    // Pour finir, j'ai crée la colonne du bouton supprimer
    const colonneAction = document.createElement("td");
    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.addEventListener('click', supprimer);
    colonneAction.appendChild(boutonSupprimer);
   
    // J'ai ensuite ajouté toutes les colonnes dans la ligne puis la ligne dans le tableau
    nouvelleLigne.appendChild(colonneDescription);
    nouvelleLigne.appendChild(colonneMontant);
    nouvelleLigne.appendChild(colonneAction);
    listeDepenses.appendChild(nouvelleLigne);
   
    // J'ai vidé les champs pour pouvoir ajouter une autre dépense facilement
    document.getElementById('description').value = "";
    document.getElementById('montant').value = "";
   
    afficherTotal();
}
 
boutonEnvoyer.addEventListener('click', ajouterDepense);

 //Création de la fonction supprimer 
const supprimer = function(event) {
    if(confirm("Êtes-vous sûr de vouloir supprimer cette dépense ?")) {
        const bouton = event.target;
        const ligne = bouton.parentElement.parentElement;
        ligne.remove();
        afficherTotal();
    }
}
