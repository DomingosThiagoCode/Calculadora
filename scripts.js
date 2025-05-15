//seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botaoNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");
const botaoCah =document.querySelector(".cash")

//variáveis globais
let operacaoAtual =""
let operador =null
let valorAnterior = ""
let calculando = false

//funções
function atualizarDisplay(){
    display.value = operacaoAtual
}
function insereNumeros(evento){
    if(calculando){
        operacaoAtual = evento.target.textContent
        calculando=false
    }
    else{
        operacaoAtual += evento.target.textContent
    }
    atualizarDisplay()
}
function inserePonto(){
    if(operacaoAtual.indexOf(".")===-1){
        operacaoAtual+="."
        atualizarDisplay()
    }
}
function insereOperador(evento){
    if(operacaoAtual!==""){
        if(!calculando){
            if(operador!==null){
                calcula()
            }
            valorAnterior=operacaoAtual
            operacaoAtual=""
        }
        operador=event.target.textContent
    }
}
function calcula(){
    let resultado=null
    const operandoAnterior = parseFloat(valorAnterior)
    const operandoAtual = parseFloat(operacaoAtual)

    switch(operador){
        case "+":
            resultado=operandoAnterior+operandoAtual
            break
        case "-":
            resultado=operandoAnterior-operandoAtual
            break
        case "*":
            resultado=operandoAnterior*operandoAtual
            break
        case "/":
            resultado=operandoAnterior/operandoAtual
            break
            
    }
    if(resultado===null){
        operacaoAtual=""
    }
    else{
            operacaoAtual = String(resultado)
    }

    valorAnterior = operacaoAtual
    calculando = true
    atualizarDisplay()
}
function limparCash(){
    operacaoAtual =""
    valorAnterior = ""
    calculando=false
    operador=null
    atualizarDisplay()
}
//eventos
botaoPonto.addEventListener("click",inserePonto)
botaoNumeros.forEach((botao)=>botao.addEventListener("click",insereNumeros))
botoesOperadores.forEach((botao)=>botao.addEventListener("click",insereOperador))
botaoIgual.addEventListener('click',calcula)
botaoCah.addEventListener("click",limparCash)