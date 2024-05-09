var botaoSalvarItem = document.querySelector("#btn-add-item");
var botaoConfirmarPedido = document.querySelector("#salvarPedido")  ;

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
        
    celulaInput.innerHTML = "<input type='number' class='inp_num' style='margin-top: 10px;' value='1' min='1' max='100'>";
    
    var tabelaPedido = document.querySelector("#itensPedidos").querySelector("tbody");

    linhaItem.appendChild(celulaTipoCafe);
    linhaItem.appendChild(celulaTamanhoCafe);
    linhaItem.appendChild(celulaDescricao);
    linhaItem.appendChild(celulaInput);

    tabelaPedido.appendChild(linhaItem);

})

function extrairValoresItensPedido() {
    var itensPedido = [];
    var linhasItens = document.querySelectorAll("#itensPedidos tr");

    linhasItens.forEach(function(linha) {
        var tipoCafe = linha.cells[0].textContent;
        var tamanhoCafe = linha.cells[1].textContent;
        var descricao = linha.cells[2].textContent;
        var quantidade = parseInt(linha.cells[3].textContent);

        itensPedido.push({
            tipoCafe: tipoCafe,
            tamanhoCafe: tamanhoCafe,
            descricao: descricao,
            quantidade: quantidade
        });
    });

    return itensPedido;
}

botaoConfirmarPedido.addEventListener("click", function (event){
    event.preventDefault();
    
    pagina = document.body;
    pagina.innerHTML = " ";

    // var linhasItens = document.querySelectorAll("#itensPedidos tr");

    // linhasItens.forEach(function(){
    //     pagina =+ 'teste' + linhasItens.value;
    // })
})