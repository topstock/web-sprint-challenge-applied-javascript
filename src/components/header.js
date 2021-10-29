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
  let date = new Date(Date.now());
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  return document.querySelector(selector).appendChild(Header("Lambda Times",  ` ${months[date.getMonth() - 1 ]} ${date.getDate()}, ${date.getFullYear()}`, "20ºF"));
}

export { Header, headerAppender}
