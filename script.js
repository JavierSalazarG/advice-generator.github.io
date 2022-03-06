const texts = document.querySelector(".textContainer");
const id = document.querySelector("#numberAdvice");

const url = "https://api.adviceslip.com/advice";

const h1 = document.createElement("h1");
const p = document.createElement("p");

function newTex() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      h1.innerHTML = "ADVINE #" + data.slip.id;
      id.appendChild(h1);

      p.innerHTML = data.slip.advice;
      texts.appendChild(p);
    })
    .catch((err) => console.log(err));
}
