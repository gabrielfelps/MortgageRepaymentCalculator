export default function resultSectionAttributeChanger() {
  const resultEmptySection = document.querySelector("[data-empty]");
  const resultCompletedSection = document.querySelector("[data-completed]");

  resultCompletedSection.setAttribute("data-show", "visible");
  resultEmptySection.setAttribute("data-show", "hidden");
}
