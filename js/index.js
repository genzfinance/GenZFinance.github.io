function calculateRiskLevel() {
  const form = document.getElementById("risk-test");
  const inputs = form.getElementsByTagName("input");
  let total = 0;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      total += parseInt(inputs[i].value);
    }
  }

  let resultText = "";

  if (total >= 10 && total <= 20) {
    resultText =
      "Your risk tolerance level is conservative. You prefer low-risk investments with stable returns.";
  } else if (total >= 21 && total <= 30) {
    resultText =
      "Your risk tolerance level is moderate. You are comfortable with a balanced mix of risk and return.";
  } else if (total >= 31 && total <= 40) {
    resultText =
      "Your risk tolerance level is aggressive. You are willing to take on higher risks for the potential of higher returns.";
  } else if (total >= 41 && total <= 50) {
    resultText =
      "Your risk tolerance level is speculative. You are comfortable with substantial risk and are seeking significant returns.";
  } else {
    resultText =
      "Please answer all the questions to calculate your risk tolerance level.";
  }

  document.getElementById("resultText").textContent = resultText;
}
