const DOMSelectors = {
  form: document.getElementById("form"),
  display: document.getElementById("display"),
}

const monkeyImages = {
  "orangutan": "https://www.napleszoo.org/assets/2337/dsc03434.jpg",
  "chimpanzee":   
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymc4K8OXe5zebZwzdugBwewIwSvFynogL_Q&usqp=CAU",
    "gorilla":
    "https://www.washingtonpost.com/news/animalia/wp-content/uploads/sites/56/2018/03/louis.png",
    "proboscic":
    "https://i.natgeofe.com/n/85838c83-bca4-4da0-a41f-fd5550685503/3945741_square.jpg",
    "golden":
    "https://render.fineartamerica.com/images/rendered/default/greeting-card/images-medium-5/golden-snub-nosed-monkey-and-baby-china-konrad-wothe.jpg?&targetx=0&targety=-25&imagewidth=500&imageheight=751&modelwidth=500&modelheight=700&backgroundcolor=807B7B&orientation=1",
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let monkeys = {};
  monkeys.firstName = document.getElementById("firstName").value;
  monkeys.lastName = document.getElementById("lastName").value;
  monkeys.picture = monkeyImages[document.getElementById("membership").value];

  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card" id="display-card">
      <img class="display-img" src="" />
      <h2 class="display-firstName">${monkeys.firstName}</h2>
      <h2 class="display-lastName">${monkeys.lastName}</h2>
      <img src="${monkeys.picture}"></img>
      <button class="remove btn">Remove Monkey</button>
      </div>
      `
  )

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("membership").value = "";

  let remove = document.querySelectorAll(".remove")
  remove.forEach((remove) => {
    remove.addEventListener("click", function (removeDisplay) {
      removeDisplay.target.parentElement.remove();
    })
  })
})
