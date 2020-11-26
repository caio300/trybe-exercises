let custoProduto = 10;
let valorVenda = 50;

if (custoProduto < 0 || valorVenda < 0){
    console.log("ERRO ! Valor errado.");

} else {

    let imposto = custoProduto * 0.2;
    let lucro =  valorVenda - custoProduto;
    let lucroLiquido = custoProduto - imposto;

    let lucroDeMilProdutos = lucro * 1000;

    console.log(lucro, lucroLiquido, lucroDeMilProdutos, imposto);
}






