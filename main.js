function storeEmail() {
    let email = document.getElementById("email").value;
  
    if (email.trim() === "") {
      let errorMessageElement = document.getElementById("error-message");
      errorMessageElement.textContent = "Please enter an email address.";
      return false; 
    }
  
    localStorage.setItem("email", email);
    window.location.href = "../../sucess.html"; 
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
  