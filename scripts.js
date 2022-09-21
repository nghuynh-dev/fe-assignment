const buttons = document.querySelectorAll('.fa-copyright');
const panels = document.querySelectorAll('.card-img-overlay');

buttons.forEach((btn, index) => {
  const panel = panels[index];

  btn.onclick = function () {
    panel.classList.toggle('card-default');
  }
});







