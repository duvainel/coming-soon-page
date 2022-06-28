const form = document.getElementById("form");
const email = document.getElementsByClassName("email")[0];
const errorMessage = document.getElementsByClassName("error-message")[0];
const errorContainer = document.getElementsByClassName("error-container")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.checkValidity());
  if (form.checkValidity()) {
    // Email doğru girilince
    email.classList.remove("invalid");
    errorMessage.style.display = "none";
    errorContainer.style.display = "none";
  } else {
    // Email yanlış girilince
    email.classList.add("invalid");
    errorMessage.style.display = "block";
    errorContainer.style.display = "flex";
  }
});
