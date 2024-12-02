const interestOutput = document.querySelector("#accumulated");
const totalOutput = document.querySelector("#total");
const principalInput = document.querySelector("#principal");
const aprInput = document.querySelector("#apr");
const aprDisplay = document.querySelector("#aprDisplay");
const periodSelect = document.querySelector("#period");
const yearsInput = document.querySelector("#years");

function calc() {
  //got this parseFloat stuff from chatgpt
  const principal = parseFloat(principalInput.value) || 0;
  const rate = parseFloat(aprInput.value) / 100;
  const time = parseFloat(yearsInput.value) || 0;
  const period = parseFloat(periodSelect.value);

  let total = principal * Math.pow(1 + rate / period, period * time);
  let interest = total - principal;

  //toFixed was also a chatgpt addition
  totalOutput.textContent = total.toFixed(2);
  interestOutput.textContent = interest.toFixed(2);
}

aprInput.addEventListener("input", () => {
  aprDisplay.textContent = aprInput.value;
  calc();
});
principalInput.addEventListener("input", calc);
yearsInput.addEventListener("input", calc);
periodSelect.addEventListener("input", calc);
