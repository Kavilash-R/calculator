const display = document.getElementById("display");

function appendDis(value) {
  display.value += value;
}
function clearIt() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
