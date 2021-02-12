import axios from "axios";
import { headerAppender } from "./header";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  let container = document.createElement("div")
  container.classList = "card"
  let headliner = document.createElement("div")
  headliner.classList = "headline"
  let author = document.createElement("div")
  author.classList = "author"
  let imgContainer = document.createElement("div")
  imgContainer.classList = "img-container"
  let imgObj = document.createElement("img")
  let authorName = document.createElement("span")

  container.appendChild(headliner)
  container.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(imgObj)
  author.appendChild(authorName)

  headliner.textContent = article.headline
  imgObj.setAttribute("src", article.authorPhoto)
  authorName.textContent = `By ${article.authorName}`

  container.addEventListener("click", (event) => {
    console.log(article.headline)
  })

  return container;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((res) => {
    let keys = Object.keys(res.data.articles)
  
    keys.forEach((item) => {
      Object.values(res.data.articles[item]).forEach((item) => {
        document.querySelector(selector).append(Card(item))
      })
    })
  })
  .catch((err) => {
    console.log(err)
  })
}

export { Card, cardAppender }
