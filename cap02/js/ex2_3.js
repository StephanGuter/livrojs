// Minha solução prévia
/*
const form = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")
const resp3 = document.getElementById("outResp3")

form.addEventListener("submit", (e) => {
    resp1.innerText = `Promoção: ${form.inVeiculo.value}`
    resp2.innerText = `Entrada de R$ ${(form.inPreco.value / 2).toFixed(2)}`
    resp3.innerText = `+ 12x de R$ ${(form.inPreco.value / 24).toFixed(2)}`
    
    e.preventDefault()
})
*/

// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value         // obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.5                 // calcula valor de entrada
    const parcela = (preco * 0.5) / 12          // ... e das parcelas

    resp1.innerText = `Promoção: ${veiculo}`    // exibe as respostas
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
    resp3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()                          // evita envio do form
})