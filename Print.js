function algoritmo33() {
var nome = document.getElementById("nome").value
var endereco = document.getElementById("endereco").value
var idade = document.getElementById("idade").value

nomeResposta = nome
enderecoResposta = endereco
idadeResposta = idade

document.getElementById("nomeResposta").innerHTML = nomeResposta;
document.getElementById("enderecoResposta").innerHTML = enderecoResposta;
document.getElementById("idadeResposta").innerHTML = idadeResposta;
}