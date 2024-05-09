
        // Função para exibir os itens do pedido na tabela HTML
        function exibirItensPedidos() {
            var tabelaPedido = document.querySelector("#itensPedidos");
            
            // Itera sobre cada linha de pedido
            // Aqui você precisará de algum método para iterar sobre as linhas e adicionar os dados à tabela HTML
            // Você pode usar um loop for, forEach ou qualquer outro método que preferir
            // Supondo que você tenha uma lista de objetos contendo os dados de cada pedido
            // Você pode iterar sobre essa lista e adicionar os dados à tabela HTML
            // Vou fornecer um exemplo simplificado aqui
            // Substitua essa parte do código pelo método real que você usa para obter os dados
            var itensPedido = [
                { tipoCafe: "Café Expresso", tamanhoCafe: "Pequeno", descricao: "Açúcar", quantidade: 2 },
                { tipoCafe: "Café com Leite", tamanhoCafe: "Grande", descricao: "Açúcar, Leite", quantidade: 1 }
            ];

            itensPedido.forEach(function(item) {
                var linhaItem = document.createElement("tr");

                var celulaTipoCafe = document.createElement("td");
                celulaTipoCafe.textContent = item.tipoCafe;
                linhaItem.appendChild(celulaTipoCafe);

                var celulaTamanhoCafe = document.createElement("td");
                celulaTamanhoCafe.textContent = item.tamanhoCafe;
                linhaItem.appendChild(celulaTamanhoCafe);

                var celulaDescricao = document.createElement("td");
                celulaDescricao.textContent = item.descricao;
                linhaItem.appendChild(celulaDescricao);

                var celulaQuantidade = document.createElement("td");
                celulaQuantidade.textContent = item.quantidade;
                linhaItem.appendChild(celulaQuantidade);

                tabelaPedido.appendChild(linhaItem);
            });
        }

        // Chame a função para exibir os itens do pedido ao carregar a página
        window.onload = exibirItensPedidos;