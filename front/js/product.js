// Récupération des paramètres depuis l'URL

var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);


const colorPicked = document.querySelector("#colors");
const quantityPicked = document.querySelector("#quantity");


// Récupération des articles depuis l'API

getArticle();

function getArticle() {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then(function (res) {
        return res.json();
    })
    .catch((error) => {
        console.log("Accès à l'API impossible... Déso frérot !!!");
    })


// Récupération des données de l'API dans le DOM --> Affichage des données des articles

.then(function (articlesResult) {
    const article = articlesResult;
    console.table(article);


    // Création de "img" (image)

    let productImg = document.createElement("img");                                         // ---------- Je crée mon "img" (image) ----------
    document.querySelector(".item__img").appendChild(productImg);
    productImg.src = article.imageUrl;                                                      // ---------- J'affiche l'image de l'article ----------
    productImg.alt = article.altTxt;                                                        // ---------- Je rapatrie le texte alternatif de l'image de l'article ----------


    // Modification de "h1"

    let productName = document.getElementById('title');
    productName.innerHTML = article.name;                                                   // ---------- J'affiche le nom de l'article ----------                                             


    // Affichage du prix

    let productPrice = document.getElementById('price');
    productPrice.innerHTML = article.price;                                                 // ---------- J'affiche le prix de l'article ----------


    // Affichage de la description

    let productDescription = document.getElementById('description');
    productDescription.innerHTML = article.description;                                     // ---------- J'affiche la description de l'article ----------


    // Choix des couleurs

    for (let colors of article.colors){
        console.table(colors);
        let productColors = document.createElement("option");                               // ---------- J'affiche mon selecteur de couleur ----------
        document.querySelector("#colors").appendChild(productColors);
        productColors.value = colors;
        productColors.innerHTML = colors;
    }


    // Gestion du panier

    const sendToCartBtn = document.querySelector("#addToCart");


    // Conditions couleur + quantité entre 1 et 100

    sendToCartBtn.addEventListener("click", (event)=>{
        if (quantityPicked.value > 0 && quantityPicked.value <=100 && colorPicked.value != 0){


    // Récupération du choix de la couleur

    let colorChoice = colorPicked.value;
                

    // Récupération du choix de la quantité

    let quantityChoice = quantityPicked.value;


    // Récupération des options de l'article à ajouter au panier

    let optionsProduit = {
        articleID: idProduct,
        articleColor: colorChoice,
        articleQuantity: Number(quantityChoice)
    };


    // Initialisation du local storage

    let localStorageArticle = JSON.parse(localStorage.getItem("produit"));


    // Pop-up de confirmation

    const popupConfirmation =() =>{
        if(window.confirm(`Votre commande de ${quantityChoice} ${article.name} ${colorChoice} à bien été ajoutée au panier
Pour consulter votre panier, cliquez sur OK`)){
            window.location.href ="cart.html";
        }
    }


    //Importation dans le local storage


        //Si le panier comporte déjà au moins 1 article

    if (localStorageArticle) {
    const resultFind = localStorageArticle.find(
        (el) => el.articleID === idProduct && el.articleColor === colorChoice);
        
        //Si le produit commandé est déjà dans le panier

        if (resultFind) {
            let newQuantite =
            parseInt(optionsProduit.articleQuantity) + parseInt(resultFind.articleQuantity);
            resultFind.articleQuantity = newQuantite;
            localStorage.setItem("produit", JSON.stringify(localStorageArticle));
            console.table(localStorageArticle);
            popupConfirmation();

        //Si le produit commandé n'est pas dans le panier

        } else {
            localStorageArticle.push(optionsProduit);
            localStorage.setItem("produit", JSON.stringify(localStorageArticle));
            console.table(localStorageArticle);
            popupConfirmation();
        }

    //Si le panier est vide

    } else {
        localStorageArticle =[];
        localStorageArticle.push(optionsProduit);
        localStorage.setItem("produit", JSON.stringify(localStorageArticle));
        console.table(localStorageArticle);
        popupConfirmation();
    }}
    });
});
}