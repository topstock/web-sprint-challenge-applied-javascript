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
  const headerDiv = document.createElement('div');
  const headerSpanDate = document.createElement('span');
  const headerH1 = document.createElement('h1');
  const headerSpanTemp = document.createElement('span');

  headerDiv.appendChild(headerSpanDate);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(headerSpanTemp);

  headerDiv.classList.add('header');
  headerSpanDate.classList.add('date');
  headerSpanTemp.classList.add('temp');

  headerSpanDate.textContent = date;
  headerH1.textContent = title;
  headerSpanTemp.textContent = temp;

  return headerDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  return document.querySelector(selector).appendChild(Header("Bow Wow Wow on a Tuesday?",  "October 29th, 2021", "20&#176;F"));
}

export { Header, headerAppender }
