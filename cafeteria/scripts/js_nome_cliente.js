var botaoNomeCliente = document.querySelector("#confirmar");

botaoNomeCliente.addEventListener("click", function (event){
    var inputCliente = document.querySelector("#nome_cliente").value;
    console.log(inputCliente);
    localStorage.setItem('nomeText',inputCliente);
})