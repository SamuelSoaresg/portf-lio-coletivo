var form = document.getElementById("formContato");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var mensagem = document.getElementById("mensagem");
var aviso = document.getElementById("mensagemErro");
var btnLimpar = document.getElementById("limpar");

function verificarEmail(email) {
  if (email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@")) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  if (nome.value == "" || email.value == "" || mensagem.value == "") {
    aviso.textContent = "Tente novamente! Todos os campos são obrigatórios.";
    aviso.style.color = "red";
  }

  else if (nome.value.length < 6) {
    aviso.textContent = "Tente novamente! O nome deve ter pelo menos 6 caracteres.";
    aviso.style.color = "red";
  }

  else if (!verificarEmail(email.value)) {
    aviso.textContent = "Tente novamente! Digite um email válido.";
    aviso.style.color = "red";
  }

  else {
    aviso.textContent = "Obrigado! Seus dados foram preenchidos corretamente.";
    aviso.style.color = "green";
    
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  }
});

btnLimpar.addEventListener("click", function() {
  nome.value = "";
  email.value = "";
  mensagem.value = "";
  aviso.textContent = "";
});
