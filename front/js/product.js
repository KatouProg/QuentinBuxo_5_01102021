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


