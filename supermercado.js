//criando array para armazenar os dados dos produtos.
var items = [];

//criando uma função para armazenar os dados digitados nos inputs.
document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    //criando variáveis que contem os inputs e nomes dos inputs para mostrar os dados na tela.
    var nameProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');
    //adicionando os produtos de forma forçada dentro da lista de arrays
    items.push({
        nome: nameProduto.value,
        valor: precoProduto.value
    });

    //criando variável para armazenar a lista com os produtos.
    let listaProdutos = document.querySelector('.lista-produtos');
    
    //criando variável para atualizar o preço final dos produtos.
    let soma = 0;
    
    //manualmente "Atualizar" a página para não replicar os produtos.
    listaProdutos.innerHTML= "";
    //criando o map para mapear toda a array e mostrar os dados na tela.
    items.map(function(val){
        //criando a função de soma.
        soma+=parseFloat(val.valor);
        //mapeando e mostrando o html na tela com os dados.
        listaProdutos.innerHTML+=`
            <div class="lista-produtos-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
            </div>
        `;
    })
    //setando o numero de casas decimais no total
    soma = soma.toFixed(2);
    //resetando os inputs para o usuário adicionar novos produtos.
    nameProduto.value = "";
    precoProduto.value = "";

    //criando a soma para todos os produtos no fim da página.
    let elementoSoma = document.querySelector('.soma-produtos h1');
    //adicionando os dados para o usuário.
    elementoSoma.innerHTML = 'R$'+soma;
});

//criando a função de limpeza do carrinho.
document.querySelector('.limpar')
.addEventListener('click', () => {
    items = [];
    document.querySelector('.lista-produtos').innerHTML= "";
    document.querySelector('.soma-produtos h1').innerHTML= "Total: R$0";
    
});
