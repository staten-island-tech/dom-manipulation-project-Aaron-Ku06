const DOMSelectors = {
    form: document.getElementById("form"),
    display: document.getElementById("display"),
  };
  
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let monkey = {};
    monkey.firstName = document.getElementById("firstName").value;
    monkey.lastName = document.getElementById("lastName").value;
    monkey.intelligence = document.getElementById("intelligence").value;
  
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<div class="display-card" id="display-card">
      <img class="display-img" src="https://www.gannett-cdn.com/presto/2019/08/08/USAT/dc1fe9c6-d585-42c4-9c69-e31cc46e4c94-ABBEY_ROAD.JPG?auto=webp&crop=1481,834,x0,y265&format=pjpg&width=1200"/>
      <h2 class="display-artist">${album.artist}</h2>
      <h3 class="display-album">${album.title}</h3>
      <button class="remove btn">Remove Album</button>
      </div>`
    );
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("url").value = "";
  
    let remove = document.querySelectorAll(".remove");
    remove.forEach((remove) => {
      remove.addEventListener("click", function (removeDisplay) {
        removeDisplay.target.parentElement.remove();
      });
    });
  });