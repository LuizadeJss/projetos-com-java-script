var botaoSalvarItem = document.querySelector("#btn-add-item");
var botaoConfirmarPedido = document.querySelector("#salvarPedido");

botaoSalvarItem.addEventListener("click", function (event){
    event.preventDefault();

    var linhaItem = document.createElement("tr");

    //cria as celulas
    var celulaTipoCafe = document.createElement("td");
    var celulaTamanhoCafe = document.createElement("td");
    var celulaDescricao = document.createElement("td");
    var celulaInput = document.createElement("td");
    var celulaInput = document.createElement("td");

    //insere os campos do html na celula
    celulaTipoCafe.textContent =  pedido.tipoCafe.value;
    celulaTamanhoCafe.textContent = pedido.tamanhoCafe.value;
    
    if(pedido.addAcucar.checked)
        celulaDescricao.innerHTML += "Açúcar <br>" ;
    if(pedido.addCaldaChoc.checked)
        celulaDescricao.innerHTML += "Calda de Chocolate <br>" ;
    if(pedido.addCaramelo.checked)
        celulaDescricao.innerHTML += "Caramelo <br>" ;
    if(pedido.addLeite.checked)
        celulaDescricao.innerHTML += "Leite <br>" ;
        
    celulaInput.innerHTML = "<input type='number' class='inp_num' style='margin-top: 10px;' value='1'>";
    
    var tabelaPedido = document.querySelector("#itensPedidos").querySelector("tbody");

    linhaItem.appendChild(celulaTipoCafe);
    linhaItem.appendChild(celulaTamanhoCafe);
    linhaItem.appendChild(celulaDescricao);
    linhaItem.appendChild(celulaInput);

    tabelaPedido.appendChild(linhaItem);

})

botaoConfirmarPedido.addEventListener("click", function (event){
    //event.preventDefault();

    var tabelaPedido = document.querySelector("#itensPedidos");
    var cafe = pedido.tipoCafe.value;

    localStorage.setItem('valueText', cafe);
    console.log(cafe);
})