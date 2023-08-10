function storeEmail() {
  let email = document.getElementById("email").value;

  if (email.trim() === "") {
    alert("Please enter an email address.");
    return false; // Impede o envio do formulário se o campo estiver vazio
  }

  localStorage.setItem("email", email);
  window.location.href = "../../sucess.html"; // Redireciona para a página de sucesso
  return false; // Permite o envio do formulário
}

//escolher a pagina pelo tittle
let title = document.title;
if (title == "Subscribed") {
  let email = localStorage.getItem("email");
  if (email != null) {
    document.getElementById("email-sucess").innerHTML = email;
  }
}

function goBack() {
  window.history.back();
}
