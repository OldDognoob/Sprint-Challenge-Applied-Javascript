// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// Making API request
axios.get("https://lambda-times-backend.herokuapp.com/articles")


// .then(response => console.log(response.data))

.then(response=>{

    const allArticlesTypes = Object.keys(response.data.articles);

    for(let i=0; i< allArticlesTypes.length; i++){

        response.data.articles[allArticlesTypes[i]].map((articleType)=>{

            const cardContainer = document.querySelector('.cards-container')
            const createdCard = cardCreator(articleType);
            cardContainer.appendChild(createdCard);
            
        })
    }
})


function cardCreator(article) {
 
    // 1. HML Marckup

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    // 2. Structure Marckup

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    author.append(name);
    imgContainer.append(img);

    // 3. Add some classes

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container')

    // 4.Add some text

    img.src = article.authorPhoto;
    headline.textContent = article.headline;
    name.textContent = `By ${article.authorName}`;

// // 1. HML Marckup

//     const card = document.createElement("div");
//     const headline = document.createElement("div");
//     const author = document.createElement("div");
//     const imgCont = document.createElement("div");
//     const img = document.createElement("img");
//     const span = document.createElement("span");

// // 2. Structure Marckup

//     card.appendChild(headline);
//     card.appendChild(author);
//     author.appendChild(imgCont);
//     imgCont.appendChild(img);
//     author.appendChild(span);   

// // 3. Add some classes

//     card.classList.add("card");
//     headline.classList.add("headline");
//     author.classList.add("author");
//     imgCont.classList.add("img-container");

// // 4.Add some text

// headline.textContent = '{Headline of article}';
// span.textContent ='By {authors name}';


// // 5. Attributes

// img.setAttribute('src', imgCont);


return card;

}

const card = document.querySelector('.articles');

// card.forEach(info => {
//     return card.append(cardCreator(articles));
// });


