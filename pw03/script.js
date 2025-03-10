//busca

var meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

var paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

var paragrafo2 = document.getElementsByTagName("p");

for(let i=0; i<paragrafo2.length; i++){
    console.log(paragrafo2[i].textContent);
}

var cabecalho1 = document.querySelector(".cabecalho");
console.log(cabecalho1.textContent);

//imprimir os 3 paragrafos

console.log(paragrafo1[0].textContent);

for (let i=0; i<paragrafo1.length; i++){

    console.log(paragrafo1[i].textContent);
}

//acesso ao conteúdo dos elementos html

document.getElementById("paragrafo1").textContent= "texto alterado";

//document.


//eventos
var botao1 = document.getElementById("botao1");
botao1.onclick = function(){
botao1.style.backgroundColor = "green";
    alert("clicou!");
}
var botao2 = document.getElementById("botao2");
var paragrafo2 = document.getElementById("paragrafo2");
botao2.onclick = function(){
paragrafo2.textContent = "texto alterado";
}