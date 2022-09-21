const buttons = document.querySelectorAll('.fa-copyright');
const panels = document.querySelectorAll('.card-img-overlay');

buttons.forEach((btn, index) => {
  const panel = panels[index];
  btn.onclick = function () {
    panel.classList.toggle('card-default');
  }
});

const wrappers = document.querySelectorAll(".card-text");
wrappers.forEach((wrapper) => {
  document.addEventListener("DOMContentLoaded", () => {
    let options = {
      callback: function (isTruncated) { },
      ellipsis: "\u2026 ",
      height: null,
      keep: null,
      tolerance: 4,
      truncate: "word",
      watch: "window",
    };
    new Dotdotdot(wrapper, options);
  });
})







