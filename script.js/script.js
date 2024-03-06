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