const resultEmptySection = document.querySelector("[data-empty]");
const resultCompletedSection = document.querySelector("[data-completed]");

function resultSectionAttributeVisible() {
  resultCompletedSection.setAttribute("data-show", "visible");
  resultEmptySection.setAttribute("data-show", "hidden");
}

function resultSectionAttributeHidden() {
  resultCompletedSection.setAttribute("data-show", "hidden");
  resultEmptySection.setAttribute("data-show", "visible");
}

export { resultSectionAttributeVisible, resultSectionAttributeHidden };
