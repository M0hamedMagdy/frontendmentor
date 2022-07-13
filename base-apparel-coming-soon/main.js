const email = document.querySelector("#email");
const btn = document.querySelector("#submit");
const errorIcon = document.querySelector("#errorIcon");
const errorMessage = document.querySelector("#errorMessage");
// const emailPattern =
//   "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
const errors = [];

function validate(e) {
  if (email.value === "" || email.value === undefined) {
    errorIcon.style.display = "block";
    errorMessage.style.display = "block";
  }

  email.value = "";
}

btn.addEventListener("click", validate);
