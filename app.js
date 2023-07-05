//using selectors inside the element
// traversing the dom

const questionBtns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

questionBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const parent = e.currentTarget.parentElement.parentElement;
    questions.forEach(function (item) {
      if (item !== parent) {
        item.classList.remove("show-text");
      }
    });
    parent.classList.toggle("show-text");
  });
});
