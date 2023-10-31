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

ul.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const card = button.parentNode;
        const container = card.parentNode;
        if(button.textContent === 'remove'){
            ul.removeChild();
        }
    }
});
    
    