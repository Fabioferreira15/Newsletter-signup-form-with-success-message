function storeEmail() {
  let email = document.getElementById("email").value;
  localStorage.setItem("email", email);
  return false;
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