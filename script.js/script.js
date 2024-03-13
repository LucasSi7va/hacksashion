document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("caixa-texto");
   
  
    textarea.addEventListener("input", function() {
      var limite = parseInt(textarea.getAttribute("maxlength"));
      var caracteresDigitados = textarea.value.length;
  
      contador.innerText = caracteresDigitados;
  
      if (caracteresDigitados > limite) {
        textarea.value = textarea.value.substring(0, limite);
      }
    });
  });



  document.getElementById('cartao').addEventListener('input', function (e) {
    let inputValue = e.target.value;
    // Remove qualquer caractere que não seja número
    inputValue = inputValue.replace(/\D/g, '');
    // Insere os hifens nos lugares corretos
    if (inputValue.length > 3) {
        inputValue = inputValue.slice(0, 3) + '-' + inputValue.slice(3);
    }
    if (inputValue.length > 7) {
        inputValue = inputValue.slice(0, 7) + '-' + inputValue.slice(7);
    }
    // Atualiza o valor do campo de entrada
    e.target.value = inputValue;
});



document.getElementById('cartao2').addEventListener('input', function (e) {
  let inputValue = e.target.value;
  // Remove qualquer caractere que não seja número
  inputValue = inputValue.replace(/\D/g, '');
  // Insere os hifens nos lugares corretos
  if (inputValue.length > 3) {
      inputValue = inputValue.slice(0, 3) + '-' + inputValue.slice(3);
  }
  if (inputValue.length > 7) {
      inputValue = inputValue.slice(0, 7) + '-' + inputValue.slice(7);
  }
  // Atualiza o valor do campo de entrada
  e.target.value = inputValue;
});


var botao = document.getElementById("btn");

botao.addEventListener("click", function() {
  alert("foi hackado");
}) 