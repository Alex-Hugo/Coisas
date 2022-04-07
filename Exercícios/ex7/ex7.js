const botão = document.getElementById("botão");
function botao(){
    let numero1=document.querySelector(".numero1").value
    let numero2=document.querySelector(".numero2").value
    let soma= parseInt(numero1)+parseInt(numero2)
    document.querySelector(".soma").innerHTML=soma
    let diferença=parseInt(numero1)-parseInt(numero2)
    document.querySelector(".diferença").innerHTML=diferença
    let produto=parseInt(numero1)*parseInt(numero2)
    document.querySelector(".produto").innerHTML=produto
    let quociente=parseInt(numero1)/parseInt(numero2)
    document.querySelector(".quociente").innerHTML=quociente
    let potenciação=parseInt(numero1)**parseInt(numero2)
    document.querySelector(".potenciação").innerHTML=potenciação
    }
