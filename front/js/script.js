const url = "http://localhost:3000/api/products";

let article = document.querySelector('#items');

fetch(url)
  .then(response => response.json())
  .then(data => {    
    for (let kanap of data)
      {        
        article.innerHTML += 
          `<a href="./product.html?id=42">
          <article>
            <img src="${kanap.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
            <h3 class="productName">${kanap.name}</h3>
            <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
          </article>
        </a>`;       
      }
})