main();

function main() {                                                                   // ---------- Je crée ma function pour récupérer mes fiches-article ----------
  getArticles();
}


// Récupération des fiches-article de la page d'accueil depuis l'API --> http://localhost:3000/api/products

function getArticles() {                                                            // ---------- J'envoie une requête HTTP ----------
    fetch("http://localhost:3000/api/products")
    .then(function (res) {                                                          // ---------- Je récupère le résultat de la requête ----------
        return res.json();
    })
    .catch((error) => {
        let items = document.querySelector("#items");
        items.innerHTML = `Accès à l'API impossible... Déso frérot !!!`;
    })


// Récupération des données de l'API dans le DOM --> Affichage des fiches-article

    .then(function (resultAPI) {                    
        const articles = resultAPI;                 
        console.table(articles);
        for (let article in articles) {                                             // ---------- Je crée ma boucle pour afficher mes articles ----------

            // Création de "a" (lien)
            let productLink = document.createElement("a");                          // ---------- Je crée mon "a" dans la section .item ----------
            document.querySelector(".items").appendChild(productLink);              
            productLink.href = `product.html?id=${resultAPI[article]._id}`;         // ---------- Redirect vers la page article (./product.html?id=...) ----------

            // Création de "article" (section)
            let productArticle = document.createElement("article");                 // ---------- Je crée ma balise "article" ----------
            productLink.appendChild(productArticle);                                

            // Création de "img" (image)
            let productImg = document.createElement("img");                         // ---------- Je crée mon "img" (image) ----------  
            productArticle.appendChild(productImg);                                        
            productImg.src = resultAPI[article].imageUrl;                           // ---------- J'affiche l'image de l'article ----------
            productImg.alt = resultAPI[article].altTxt;                             // ---------- Je rapatrie le texte alternatif de l'image de l'article ----------

            // Création de "h3" (titre)
            let productName = document.createElement("h3");                         // ---------- Je crée mon "h3" (titre) ----------
            productArticle.appendChild(productName);                                
            productName.innerHTML = resultAPI[article].name;                        // ---------- J'affiche le nom de l'article ----------

            // Création de "p" (description)
            let productDescription = document.createElement("p");                   // ---------- Je crée mon "p" (description) ----------
            productArticle.appendChild(productDescription);                         
            productDescription.innerHTML = resultAPI[article].description;          // ---------- J'affiche la ddescription de l'article ----------
        }
      });
}