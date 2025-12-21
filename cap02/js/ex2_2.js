const frm = document.querySelector("form")

const inFilme = document.querySelector("input[type='text']")
const inDuracao = document.querySelector("input[type='number']")

const outFilme = document.querySelector("h3")
const outDuracao = document.getElementById("outDuracao")

frm.addEventListener("submit", (e) => {
    
    const minutos = inDuracao.value
    let mensagem = ""

    if (minutos > 60) {
        mensagem = `Duração: ${Math.floor(minutos/60)} hora(s) e ${minutos%60} minuto(s).`
    } else {
        mensagem = `Duração: ${minutos} minuto(s).`
    }

    outFilme.innerText = `Filme: ${inFilme.value}`
    outDuracao.innerText = mensagem
    e.preventDefault()
})