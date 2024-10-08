/*Desafio Obrigatório 04
Parte do meu trabalho final que será um doceria com seus produtos*/

function produto(id, img, nome, dsc, preco) {
  this.id = id;
  this.img = img;
  this.nome = nome;
  this.dsc = dsc;
  this.preco = preco;

  this.comprar = function() {
      console.log("Você comprou um " + this.nome + "por R$ " + this.preco + ".");
  };

  this.exibirDetalhes = function() {
      console.log("Nome: " + this.nome);
      console.log("Descrição:" + this.dsc);
      console.log("Preço: R$ " + this.preco);
      console.log("Imagem: " + this.img);
  };
}

var produtos = [
  new produto("cake-chocolate", "./img/produtos/cake-chocolate.jpg", "Bolo de Chocolate", "Delicioso bolo de chocolate com cobertura de ganache.", 40.00),
  new produto("cupcake-baunilha", "./img/produtos/cupcake-baunilha.jpg", "Cupcake de Baunilha", "Cupcake fofo de baunilha com cobertura de creme.", 5.00),
  new produto("donut-morango", "./img/produtos/donut-morango.jpg", "Donut de Morango", "Donut recheado com morango e cobertura de chocolate.", 3.50),
  new produto("cookie-chocolate", "./img/produtos/cookie-chocolate.jpg", "Cookie de Chocolate", "Cookie crocante de chocolate meio amargo.", 2.50),
  new produto("macaron-framboesa", "./img/produtos/macaron-framboesa.jpg", "Macaron de Framboesa", "Delicado macaron com recheio de framboesa.", 4.00)
];

// Exemplo de como usar
produtos[0].comprar();
produtos[1].exibirDetalhes(); 
