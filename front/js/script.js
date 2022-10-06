const url = "http://localhost:3000/api/products";

let article = document.querySelector('#items');

fetch(url)
  .then(response => response.json())
  .then(data => {    
    for (let kanap of data)
      {   
        console.log (kanap);     
        article.innerHTML += 
          `<a href="./product.html?id=${kanap._id}">
          <article>
            <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
            <h3 class="productName">${kanap.name}</h3>
            <p class="productDescription">${kanap.description}</p>
          </article>
        </a>`;       
      }
})