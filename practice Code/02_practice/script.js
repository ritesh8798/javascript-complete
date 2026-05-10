const h1 = document.querySelector("h1");

window.addEventListener("keydown",function(details){
    h1.textContent = details.key;
});