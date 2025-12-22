// Minha solução prévia
/*
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
*/

// cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value       // obtém o conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)  // arredonda para baixo resultado
    const minutos = duracao % 60            // obtém o resto da divisão

    resp1.innerText = titulo                // exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault()                      // evita envio do form
})