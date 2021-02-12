const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let container = document.createElement("div");
  container.classList = "header";
  let dateE = document.createElement("span");
  dateE.classList = "date";
  let titleE = document.createElement("h1");
  let tempE = document.createElement("span");

  container.appendChild(dateE);
  container.appendChild(titleE);
  container.appendChild(tempE);

  titleE.textContent = title;
  dateE.textContent = date;
  tempE.textContent = temp;

  return container
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

 document.querySelector(selector).append(Header("Surprise", "02/10/2021", "its very cold"))
 
}
export { Header, headerAppender }
