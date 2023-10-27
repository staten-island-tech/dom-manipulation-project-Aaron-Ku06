const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h3s: document.querySelectorAll("h3"),
};

console.log(DOMSelectors.h3s);

DOMSelectors.form.addEventListener("submit", function(event){
event.preventDefault();
console.log(DOMSelectors.firstName.value);
DOMSelectors.h3s.forEach(
    (el) => el.textContent = DOMSelectors.firstName.value
    );
    
});

    
    