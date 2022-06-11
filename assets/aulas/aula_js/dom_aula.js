/*
DOM - DOCUMENT OBJECT MODEL

document.getElementsByClassName("paragrafo")[0]
<p class=​"paragrafo">​JavaScript é muito legal​</p>​

document.querySelector(".paragrafo")
<p class=​"paragrafo">​JavaScript é muito legal​</p>​

document.getElementById("paragrafo")
<p id=​"paragrafo">​CSS é muito bonitinho​</p>​

document.querySelector("#paragrafo")
<p id=​"paragrafo">​CSS é muito bonitinho​</p>​

document.querySelectorAll
ƒ querySelectorAll() { [native code] }

document.querySelectorAll("p")
NodeList(2) [p.paragrafo, p#paragrafo]0: p.paragrafo1: p#paragrafolength: 2[[Prototype]]: NodeList

document.getElementsByTagName("p")

*/
const body = document.querySelector("body")
const button = document.createElement("button")
button.innerText = "Botão"
button.id = "button-com-id"
button.classList.add("button-com-classe")

button.style.backgroundColor = "pink"

button.addEventListener("click", function() {
    button.innerText = "Clicado"
})

button.addEventListener("mouseenter", function() {
    button.innerText = "Mouse Entrou"
})

button.addEventListener("mouseout", function(){
    button.innerText = "Mouse saiu"
})

body.appendChild(button)

// para limpar o conteúdo de uma tag
// body.innerHTML = ""