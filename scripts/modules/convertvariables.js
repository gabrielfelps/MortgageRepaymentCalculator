export default function convertVariables(mortgageTerm, interestRate) {
  const totalInstallmentsNumber = mortgageTerm * 12;
  const montlyFeesTaxes = interestRate / 100 / 12;

  return { totalInstallmentsNumber, montlyFeesTaxes };
}
