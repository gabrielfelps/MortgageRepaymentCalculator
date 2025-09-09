const form = document.querySelector("form");
const outMonthlyInstallment = document.querySelector(
  "[data-monthly-installment]"
);
const outTotalToBePaid = document.querySelector("[data-total-to-be-paid]");

form.addEventListener("submit", (e) => {
  const mortgageAmount = Number(form.mortgageAmount.value.replace(/[.,]/g, "")); // Valor do Empréstimo: £300,000
  const interestRate = Number(form.interestRate.value); // Taxa de Juros Anual: 5.25%
  const mortgageTerm = Number(form.mortgageTerm.value); // Prazo do Empréstimo: 25 anos

  e.preventDefault();

  if (form.mortgageType1.checked) {
    repaymentMethod(mortgageAmount, mortgageTerm, interestRate);
  } else {
    interestOnly();
  }
});

function repaymentMethod(mortgageAmount, mortgageTerm, interestRate) {
  const totalInstallmentsNumber = mortgageTerm * 12;
  const montlyFeesTaxes = interestRate / 100 / 12;

  const powerTerm = Math.pow(1 + montlyFeesTaxes, totalInstallmentsNumber);
  const numerator = mortgageAmount * montlyFeesTaxes * powerTerm;
  const denominator = powerTerm - 1;

  const monthlyInstallment = numerator / denominator;

  const totalToBePaid = monthlyInstallment * totalInstallmentsNumber;

  outMonthlyInstallment.innerText = monthlyInstallment.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  outTotalToBePaid.innerText = totalToBePaid.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
}
