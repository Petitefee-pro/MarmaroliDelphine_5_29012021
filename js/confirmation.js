//Récupération des données de la commande dans le localStorage

let totalCommande = JSON.parse(localStorage.getItem('totalCommande'));
let numeroCommande = JSON.parse(localStorage.getItem('numeroCommande'));

//Mise en page de la confirmation de la commande

main = document.getElementById('main-confirmation');
confirmation = document.createElement('div');
confirmation.className = 'newPanier row mx-auto mt-2 mb-2 col';
main.append(confirmation);

confirmationTitle = document.createElement('h1');
confirmationTitle.className = 'oursPanierTitle text-center mt-3 mb-3';
confirmationTitle.innerHTML = `Votre commande 
                              </br>
                              </br>n° ${numeroCommande}
                              </br>
                              </br>pour un total de ${totalCommande} € 
                              </br>
                              </br>a bien été validée !`;

confirmation.appendChild(confirmationTitle);

confirmationTexte = document.createElement('h2');
confirmationTexte.className = 'oursPanierTitle text-center mt-3 mb-3';
confirmationTexte.textContent = 'Merci pour votre commande et à bientôt';
confirmation.appendChild(confirmationTexte);

localStorage.clear();