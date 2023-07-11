var numerosGerados = {};

document.getElementById("cartaoForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Obter os valores do formulário
  var nome = document.getElementById("nome").value;
  var numero = document.getElementById("numero").value;
  var curso = document.getElementById("curso").value;
  var univ = document.getElementById("univ").value;
  var idEstudante = numero;
  
  // Gerar um código alfanumérico aleatório e data de validade
  var numeroCartaoCredito = gerarNumerosCartaoCredito(idEstudante);
  var dataValidade = obterDataValidade();
  
  // Exibir os valores do cartão gerado
  document.getElementById("numeroCartaoCredito").textContent = numeroCartaoCredito;
  document.getElementById("nomeEstudante").textContent = nome;
  document.getElementById("numeroEstudante").textContent = numero;
  document.getElementById("curso").textContent = curso;
  document.getElementById("universidade").textContent = univ;
  document.getElementById("dataValidade").textContent = dataValidade;
  
  // Exibir a seção do cartão gerado
  document.getElementById("cartaoGerado").style.display = "block";
});

function gerarNumerosCartaoCredito(idEstudante) {
  if (!numerosGerados.hasOwnProperty(idEstudante)) {
    var numeros = [];
    
    for (var i = 0; i < 16; i++) {
      var numeroAleatorio = Math.floor(Math.random() * 10);
      numeros.push(numeroAleatorio);
    }
    
    numerosGerados[idEstudante] = numeros.join('');
  }

  return numerosGerados[idEstudante];
}

function obterDataValidade() {
  var dataAtual = new Date();
  var dataValidade = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 6, dataAtual.getDate());
  
  // Formatar a data no formato desejado (exemplo: DD/MM/AAAA)
  var dia = dataValidade.getDate();
  var mes = dataValidade.getMonth() + 1; // Os meses são indexados de 0 a 11
  var ano = dataValidade.getFullYear();
  
  // Adicionar um zero à esquerda se o dia ou mês for menor que 10
  if (dia < 10) {
    dia = '0' + dia;
  }
  
  if (mes < 10) {
    mes = '0' + mes;
  }
  
  var dataFormatada = dia + '/' + mes + '/' + ano;
  
  return dataFormatada;
}
