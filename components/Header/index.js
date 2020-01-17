// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header() {
  const newHead = document.createElement("div"),
    newSpan = document.createElement("span"),
    newH1 = document.createElement("h1"),
    newSpan2 = document.createElement("span");

  newHead.classList.add("header");
  newHead.classList.add("date");
  newHead.classList.add("temp");
 
  newH1.textContent = "Lambda Times";
  newSpan.textContent = "SMARCH 28 2019";
  newSpan2.textContent = "98°";

  newHead.append(newSpan);
  newHead.append(newH1);
  newHead.append(newSpan2);

  return newHead;
}

const headerCon = document.querySelector(".header-container");

headerCon.append(header());
