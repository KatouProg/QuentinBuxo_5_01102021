main();

function main() {
  getArticles();
}

// Récupération des fiches-article depuis l'API --> http://localhost:3000/api/products

function getArticles() {                            // J'envoie une requête HTTP
    fetch("http://localhost:3000/api/products")
    .then(function (res) {                          // Je récupère le résultat de la requête
        return res.json();
    })
    .catch((error) => {
        let items = document.querySelector("#items");
        items.innerHTML = `Accès à l'API impossible...`;
    })

    // Répartition des données de l'API dans le DOM

    .then(function (resultAPI) {                    
        const articles = resultAPI;                 // Je crée ma boucle pour afficher mes articles
        console.table(articles);
        for (let article in articles) {

            // Création de "a" (lien)
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);              // Je crée mon "a"
            productLink.href = `product.html?id=${resultAPI[article]._id}`;         // Redirect vers la page article (./product.html?id=...)

            // Création de "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);                                // Je crée mon "article"

            // Création de "img" (image)
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);                                 // Je crée mon "img"         
            productImg.src = resultAPI[article].imageUrl;
            productImg.alt = resultAPI[article].altTxt;

            // Création de "h3" (titre)
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);                                // Je crée mon "h3"
            productName.innerHTML = resultAPI[article].name;

            // Création de "p" (description)
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);                         // Je crée mon "p"
            productDescription.innerHTML = resultAPI[article].description;
        }
      });
}