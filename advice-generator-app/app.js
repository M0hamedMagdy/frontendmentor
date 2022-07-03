

const resDiv = document.querySelector("#advice");
const resBtn = document.querySelector("#diceBtn");
const resId = document.querySelector("#adviceNamber");

resBtn.addEventListener("click", getAdvice);


async function getAdvice() {
  try {
    fetch(" https://api.adviceslip.com/advice ")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      console.log(adviceData);
      const Adviceobj = adviceData.slip;
      resId.innerHTML = `<h1 id="adviceNamber"> Advice # ${Adviceobj.id} </h1>`;
      resDiv.innerHTML = `<p> ${Adviceobj.advice} </p>`;
    })
  } catch(error) {
   console.error(error);
  }
}
