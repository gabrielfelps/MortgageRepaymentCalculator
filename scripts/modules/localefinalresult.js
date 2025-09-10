import { outMonthlyInstallment, outTotalToBePaid } from "../script.js";

export default function localeFinalResult(monthlyInstallment, totalToBePaid) {
  outMonthlyInstallment.innerText = monthlyInstallment.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  outTotalToBePaid.innerText = totalToBePaid.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
}
