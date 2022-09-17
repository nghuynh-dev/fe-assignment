const buttons = document.querySelectorAll('.fa-copyright');
const panels = document.querySelectorAll('.card-img-overlay');

buttons.forEach((btn, index) => {
  const panel = panels[index];

  btn.onclick = function () {
    panel.classList.remove("card-default");
    panel.classList.toggle('hide');
  }
});







