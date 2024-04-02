var botaoSalvar = document.querySelector("#salvar");

botaoSalvar.addEventListener("click", function(event){
    event.preventDefault();
    var nome_cliente = document.querySelector('#cliente').value;
    var tipo_cafe = document.querySelector('#cafe').value;
    var tamanho_cafe = document.querySelector('#tamanho').value;
    var p_acucar= document.querySelector('#acucar').value;
    var p_leite= document.querySelector('#leite').value;
    var p_chocolate= document.querySelector('#chocolate').value;

    console.log(nome_cliente, tipo_cafe, tamanho_cafe, p_acucar, p_leite, p_chocolate)
})