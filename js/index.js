const form = document.querySelector("form")
const resp1 = document.querySelector("#saida1")
const resp2 = document.querySelector("#saida2")

let resposta = ""
let numContas = 0
let valorTotal = 0

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = form.nomeDespesa.value
    const valor = Number(form.valorDespesa.value)

    numContas++
    valorTotal = valorTotal + valor
    resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n"

    resp1.innerHTML = `${resposta}-------------------------------`
    resp2.innerHTML = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

    form.nomeDespesa.value = ''
    form.valorDespesa.value = ''
    form.valorDespesa.focus()

})

// FUNÇÃO PARA NÃO COLOCAR NÚMEROS NO CAMPO NOME.
const despesaInput = document.querySelector('#nomeDespesa')

despesaInput.addEventListener('keypress', function (e) {
    if (!semNumeros(e)) {
        e.preventDefault()
    }
})

function semNumeros(e) {
    let char = String.fromCharCode(e.keyCode)
    let padraoLetras = '[a-z A-Z]'
    if (char.match(padraoLetras)) {
        return true
    }
}

