import convertVariables from "./convertvariables.js";
import localeFinalResult from "./localefinalresult.js";

function repaymentMethod(mortgageAmount, mortgageTerm, interestRate) {
  const calcResults = convertVariables(mortgageTerm, interestRate);

  const powerTerm = Math.pow(
    1 + calcResults.montlyFeesTaxes,
    calcResults.totalInstallmentsNumber
  );
  const numerator = mortgageAmount * calcResults.montlyFeesTaxes * powerTerm;
  const denominator = powerTerm - 1;

  const monthlyInstallment = numerator / denominator;

  const totalToBePaid =
    monthlyInstallment * calcResults.totalInstallmentsNumber;

  localeFinalResult(monthlyInstallment, totalToBePaid);
}

function interestOnly(mortgageAmount, mortgageTerm, interestRate) {
  const calcResults = convertVariables(mortgageTerm, interestRate);

  const monthlyInstallment = mortgageAmount * calcResults.montlyFeesTaxes;
  const totalToBePaid =
    monthlyInstallment * calcResults.totalInstallmentsNumber + mortgageAmount;

  localeFinalResult(monthlyInstallment, totalToBePaid);
}

export { repaymentMethod, interestOnly };
