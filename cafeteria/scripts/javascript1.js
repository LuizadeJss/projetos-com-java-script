var botaoNomeCliente = document.querySelector("#confirmar");

botaoNomeCliente.addEventListener("click", function (event){

    var inputCliente = document.querySelector("#nome_cliente");

    localStorage.setItem('nomeText',inputCliente);
})