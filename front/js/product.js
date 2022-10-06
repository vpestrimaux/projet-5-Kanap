const url = 'http://localhost:3000/api/products/415b7cacb65d43b2b5c1ff70f3393ad1';

let article_img = document.querySelector('.item__img');
let article_name = document.querySelector('#title');
let article_prix = document.querySelector('#price');
let article_description = document.querySelector('#description');
let article_couleurs = document.querySelector('#colors');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    
        
        article_img.innerHTML += `<img src="${data.imageUrl}" alt="Photographie d'un canapé">`;
        article_name.innerHTML += `${data.name}`;
        article_prix.innerHTML += `${data.price}`;
        article_description.innerHTML += `${data.description}`;
        console.log (data.colors)
    for (let i = 0; i < data.colors.length; i++ ){
        article_couleurs.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;

    }
  });
