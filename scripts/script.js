const form = document.querySelector("form");
const outMonthlyInstallment = document.querySelector(
  "[data-monthly-installment]"
);
const outTotalToBePaid = document.querySelector("[data-total-to-be-paid]");
const resetBtn = document.querySelector("[data-reset]");

import { repaymentMethod, interestOnly } from "./modules/mortgagetype.js";
import {
  resultSectionAttributeVisible,
  resultSectionAttributeHidden,
} from "./modules/resultsection.js";

form.addEventListener("submit", (e) => {
  const mortgageAmount = Number(form.mortgageAmount.value.replace(/[.,]/g, ""));
  const interestRate = Number(form.interestRate.value);
  const mortgageTerm = Number(form.mortgageTerm.value);

  e.preventDefault();

  if (form.mortgageType1.checked) {
    repaymentMethod(mortgageAmount, mortgageTerm, interestRate);
    resultSectionAttributeVisible();
  } else {
    interestOnly(mortgageAmount, mortgageTerm, interestRate);
    resultSectionAttributeVisible();
  }
});

resetBtn.addEventListener("click", () => {
  form.reset();
  resultSectionAttributeHidden();
});

export { outMonthlyInstallment, outTotalToBePaid };
