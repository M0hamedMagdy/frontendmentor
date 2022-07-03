const resDiv = document.querySelector("#advice");
const resBtn = document.querySelector("#diceBtn");
const resId = document.querySelector("#adviceNamber");

resBtn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch(" https://api.adviceslip.com/advice ")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;
      resId.innerHTML = `<h6 id="adviceNamber"> Advice    ${Adviceobj.id} </h6>`;
      resDiv.innerHTML = `<p> ${Adviceobj.advice} </p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
