
// Récupération depuis localStorage

let localStorageArticle = JSON.parse(localStorage.getItem("produit"));
console.table(localStorageArticle);
const cartIsEmpty = document.querySelector("#cart__items");

// --> Le panier est vide

if (localStorageArticle === null || localStorageArticle == 0) {
    const emptyCart = `<p>Votre panier est vide</p>`;
    cartIsEmpty.innerHTML = emptyCart;
} 

// --> Le panier est plein

else {
    for (let produit in localStorageArticle){
    
    
        // Insertion de l'élément "article"
    
        let productArticle = document.createElement("article");
        document.querySelector("#cart__items").appendChild(productArticle);
        productArticle.className = "cart__item";
        productArticle.setAttribute('article-id', localStorageArticle[produit].articleID);
    
    
        // Insertion de l'élément "div --> cart__item__img"
    
        let productDivImg = document.createElement("div");
        productArticle.appendChild(productDivImg);
        productDivImg.className = "cart__item__img";
    
    
        // Insertion de l'image
    
        let productImg = document.createElement("img");
        productDivImg.appendChild(productImg);
        productImg.src = localStorageArticle[produit].articleImg;
        productImg.alt = localStorageArticle[produit].articleImgAlt;
        
    
        // Insertion de l'élément "div --> cart__item__content"
    
        let productItemContent = document.createElement("div");
        productArticle.appendChild(productItemContent);
        productItemContent.className = "cart__item__content";
    
    
        // Insertion de l'élément "div --> cart__item__content__titlePrice"
    
        let productItemContentTitlePrice = document.createElement("div");
        productItemContent.appendChild(productItemContentTitlePrice);
        productItemContentTitlePrice.className = "cart__item__content__titlePrice";
        
    
        // Insertion du titre h3
    
        let productTitle = document.createElement("h2");
        productItemContentTitlePrice.appendChild(productTitle);
        productTitle.innerHTML = localStorageArticle[produit].articleName;
    
    
        // Insertion de la couleur
    
        let productColor = document.createElement("p");
        productTitle.appendChild(productColor);
        productColor.innerHTML = localStorageArticle[produit].articleColor;
        productColor.style.fontSize = "18px";
    
    
        // Insertion du prix
    
        let productPrice = document.createElement("p");
        productItemContentTitlePrice.appendChild(productPrice);
        productPrice.innerHTML = localStorageArticle[produit].articlePrice + " €";
    
    
        // Insertion de l'élément "div --> cart__item__content__settings"
    
        let productItemContentSettings = document.createElement("div");
        productItemContent.appendChild(productItemContentSettings);
        productItemContentSettings.className = "cart__item__content__settings";
    
    
        // Insertion de l'élément "div --> cart__item__content__settings__quantity"
    
        let productItemContentSettingsQuantity = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsQuantity);
        productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
        
    
        // Insertion de l'objet "Qté : "
    
        let productQte = document.createElement("p");
        productItemContentSettingsQuantity.appendChild(productQte);
        productQte.innerHTML = "Qté : ";
    
    
        // Insertion de la quantité
    
        let productQuantity = document.createElement("input");
        productItemContentSettingsQuantity.appendChild(productQuantity);
        productQuantity.value = localStorageArticle[produit].articleQuantity;
        productQuantity.className = "itemQuantity";
        productQuantity.setAttribute("type", "number");
        productQuantity.setAttribute("min", "1");
        productQuantity.setAttribute("max", "100");
        productQuantity.setAttribute("name", "itemQuantity");
    
    
        // Insertion de l'élément "div --> cart__item__content__settings__delete"
    
        let productItemContentSettingsDelete = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsDelete);
        productItemContentSettingsDelete.className = "cart__item__content__settings__delete";
    
    
        // Insertion de "p" supprimer
    
        let productDelete = document.createElement("p");
        productItemContentSettingsDelete.appendChild(productDelete);
        productDelete.className = "deleteItem";
        productDelete.innerHTML = "Supprimer";
    }
    }
   