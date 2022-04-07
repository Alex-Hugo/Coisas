let nome=document.getElementById("nome")
let sobrenome=document.getElementById("sobrenome")
const botão = document.getElementById("botão");
function botao(){
alert("Olá"+document.getElementById("nome").value+document.getElementById("sobrenome").value);
document.getElementById('nome').value='';
document.getElementById('nome').focus();
document.getElementById('sobrenome').value='';
document.getElementById('sobrenome').focus();
}
