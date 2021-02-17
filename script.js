const button = document.querySelector(".ripple");

button.addEventListener("click", function (e) {

  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  effect(xInside, yInside);

})

function effect(xInside, yInside) {
  const span = document.createElement("span");
  span.style.top = `${yInside}px`;
  span.style.left = `${xInside}px`;
  button.appendChild(span);
  span.classList.add("circle");

  setTimeout(() => {
    button.childNodes[1].remove();
  }, 2000);
}