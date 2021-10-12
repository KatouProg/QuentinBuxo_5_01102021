# Kanap #

This is the front end and back end server for Project 5 of the Web Developer path.

<img src="https://user.oc-static.com/upload/2021/09/29/16329291678171_image2.png" alt="Un canapé avec une lampe et marqué Kanap"></a> />

## Scénario ##

Vous êtes en poste dans une agence de développement web depuis quelques semaines maintenant. Après avoir réalisé avec succès l’intégration de quelques sites web (HTML/CSS), on vous confie une nouvelle mission.

Votre client est Kanap, une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.

## Architecture générale ##

L’application web sera composée de 4 pages :
● Une page d’accueil montrant (de manière dynamique) tous les articles disponibles à
la vente.
● Une page “produit” qui affiche (de manière dynamique) les détails du produit sur
lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page, l’utilisateur
peut sélectionner une quantité, une couleur, et ajouter le produit à son panier.
● Une page “panier”. Celle-ci contient plusieurs parties :
○ Un résumé des produits dans le panier, le prix total et la possibilité de
modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.
○ Un formulaire permettant de passer une commande. Les données du
formulaire doivent être correctes et bien formatées avant d'être renvoyées au
back-end. Par exemple, pas de chiffre dans un champ prénom.
● Une page “confirmation” :
○ Un message de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant l'identifiant de commande envoyé par l’API.

## Planification de tests ##

Planifiez une suite de tests d’acceptation pour couvrir l’ensemble des fonctionnalités listées
dans ce document (spécifications fonctionnelles et techniques Kanap).

# Livrables #

Un fichier ZIP contenant le code fonctionnel du site web, nommé P5_nom_code.zip (en remplaçant “nom” par votre nom).
Le plan de test au format PDF, nommé P5_nom_plan_test.pdf.

### Back end Prerequisites ###

You will need to have Node and `npm` installed locally on your machine.

### Back end Installation ###

Clone this repo. From the "back" folder of the project, run `npm install`. You 
can then run the server with `node server`. 
The server should run on `localhost` with default port `3000`. If the
server runs on another port for any reason, this is printed to the
console when the server starts, e.g. `Listening on port 3001`.
### https://github.com/KatouProg/QuentinBuxo_5_01102021
