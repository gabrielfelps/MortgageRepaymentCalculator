const form = document.querySelector("form");
const outMonthlyInstallment = document.querySelector(
  "[data-monthly-installment]"
);
const outTotalToBePaid = document.querySelector("[data-total-to-be-paid]");

import { repaymentMethod, interestOnly } from "./modules/mortgagetype.js";

form.addEventListener("submit", (e) => {
  const mortgageAmount = Number(form.mortgageAmount.value.replace(/[.,]/g, ""));
  const interestRate = Number(form.interestRate.value);
  const mortgageTerm = Number(form.mortgageTerm.value);

  e.preventDefault();

  if (form.mortgageType1.checked) {
    repaymentMethod(mortgageAmount, mortgageTerm, interestRate);
  } else {
    interestOnly(mortgageAmount, mortgageTerm, interestRate);
  }
});

export { outMonthlyInstallment, outTotalToBePaid };
