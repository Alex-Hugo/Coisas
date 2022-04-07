let nome=document.getElementById("nome")
const botão = document.getElementById("botão");
function botao(){
alert("Olá"+document.getElementById("nome").value);
document.getElementById('nome').value='';
document.getElementById('nome').focus();
}
