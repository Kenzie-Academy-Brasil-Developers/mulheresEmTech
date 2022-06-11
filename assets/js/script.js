// Passo a Passo

//1) Criar card vaga OK
//2) Adicionar vagas no container OK
//3) Criar card resumido da vaga OK
//4) Adicionar o card resumido na área de vagas selecionadas OK
//5) Remover o card da área de vagas selecionadas

const section = document.querySelector("section")

//1) Criar card vaga 
function cardVaga(vaga) {
    const containerCard = document.createElement("div")
    containerCard.classList.add("cards-vagas", "bg-color-grey-6")

    const tituloVaga = document.createElement("h2")
    tituloVaga.classList.add("title-4", "color-grey-1")
    tituloVaga.innerText = vaga.nome

    const empresa = document.createElement("span")
    empresa.classList.add("text-3", "color-grey-2", "span-card")
    empresa.innerText = vaga.empresa

    const localEmpresa = document.createElement("span")
    localEmpresa.classList.add("text-3", "color-grey-2", "span-card")
    localEmpresa.innerText = vaga.localEmpresa

    const descricao = document.createElement("p")
    descricao.classList.add("text-2", "color-grey-2")
    descricao.innerText = vaga.descricao

    const boxCandidatar = document.createElement("div")
    boxCandidatar.classList.add("box-candidatar")

    const tipo = document.createElement("span")
    tipo.classList.add("text-3", "color-grey-2")
    tipo.innerText = vaga.tipo

    const buttonCandidatar = document.createElement("button")
    buttonCandidatar.classList.add("little-btn", "bg-color-brand-1", "color-grey-6")
    buttonCandidatar.id = vaga.id
    buttonCandidatar.innerText = "Candidatar"

    boxCandidatar.append(tipo, buttonCandidatar)
    containerCard.append(tituloVaga, empresa, localEmpresa, descricao, boxCandidatar)

    return containerCard
}

//2) Adicionar vagas no container
function listarVagas() {
    for (let i = 0; i < vagas.length; i++) {
      let card = cardVaga(vagas[i])
      section.appendChild(card)
    }
}

listarVagas()


// ARRAY DE VAGAS SELECIONADAS
let vagasSelecionadas = []
const containerVagasSelecionadas = document.querySelector("#container-vagas-selecionadas")
//3) Criar card resumido da vaga
function cardVagaSelecionada(vaga) {
    const card = document.createElement("li")
    card.classList.add("vaga-selecionada-card")

    card.innerHTML = `
        <div class="flex-row">
            <h3>${vaga.nome}</h3>

            <button class="trash-btn bg-color-grey-5" id=${vaga.id}>
                <img src="./assets/img/trash.svg" alt="ícone de lixeira" />
            </button>
        </div>

        <div class="flex-span">
            <span class="color-grey-2 text-3">${vaga.empresa}</span>
            <span class="color-grey-2 text-3">${vaga.localEmpresa}</span>
        </div>
    `
    return card
}

//ADICIONAR UM ESCUTADOR
section.addEventListener("click", function(event) {
    // console.log(event.target.tagName)
    const botao = event.target

    if(botao.tagName == "BUTTON") {
        const idVaga = botao.id
        // console.log(idVaga)

        //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const vagaFiltrada = vagas.find((vaga) => vaga.id == idVaga)

        vagasSelecionadas.push(vagaFiltrada)
        listarVagasSelecionadas()

    }
})

function listarVagasSelecionadas() {
    containerVagasSelecionadas.innerHTML = ""
    for (let i = 0; i < vagasSelecionadas.length; i++) {
        const card = cardVagaSelecionada(vagasSelecionadas[i])
        containerVagasSelecionadas.appendChild(card)
    }
}

//5) Remover o card da área de vagas selecionadas
containerVagasSelecionadas.addEventListener("click", removerVaga)
function removerVaga(event) {
    const botaoLixeira = event.target
    if (botaoLixeira.tagName == "BUTTON" || botaoLixeira.tagName == "IMG") {
        botaoLixeira.closest("li").remove()

        //DICAS DE COMO REMOVER DO ARRAY
        //procurar a vaga com o método find através do id do button 
        // depois você vai procurar a posição (índice) dessa vaga no array de vagas selecionadas usando um método chamado indexOf
        //depois remover a vaga com um outro método chamado splice 
        //sintaxe do splice: nomeDoArray.splice(índice, 1)

        //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        
        //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

    }
}