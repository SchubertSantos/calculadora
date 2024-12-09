function adicionarCaracter(caracter) {
    // Obtém o valor atual exibido na tela 
    const valorInput = document.querySelector('.display').value;
  
    // Adiciona o novo caractere ao valor atual
    document.querySelector('.display').value = valorInput + caracter;
  
    // Imprime o valor atual no console (opcional)
    console.log(valorInput); 
  }
  
  function limparTela() {
    // Limpa o conteúdo da tela
    document.querySelector('.display').value = '';
  }
  
  function calcular() {
    // Obtém o valor atual exibido na tela 
    const valorInput = document.querySelector('.display').value;
  
    // Realiza o cálculo matemático da expressão 
    document.querySelector('.display').value = eval(valorInput);
  }
  
  function inverte() {
    // Obtém o valor atual exibido na tela 
    const valorInput = document.querySelector('.display').value;
  
    // Inverte o sinal do valor atual
    document.querySelector('.display').value = valorInput * -1; 
  }