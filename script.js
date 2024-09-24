const inputField = document.getElementById('cal_input');
const buttons = document.querySelectorAll('button');

let currentValue = '';

buttons.forEach(button => {
  button.addEventListener('click', handleButtonPress);
});

document.addEventListener('keydown', handleKeyboardInput);

function handleButtonPress(event) {
  const buttonText = event.target.textContent;
  switch (buttonText) {
    case 'AC':
      currentValue = '';
      inputField.value = '';
      break;
    case 'DE':
      currentValue = currentValue.slice(0, -1);
      inputField.value = currentValue;
      break;
    case '=':
      try {
        const result = eval(currentValue);
        inputField.value = result;
        currentValue = result.toString();
      } catch (error) {
        inputField.value = 'Error';
      }
      break;
    default:
      currentValue += buttonText;
      inputField.value = currentValue;
  }
}

function handleKeyboardInput(event) {
  const keyValue = event.key;
  switch (keyValue) {
    case 'Backspace':
      currentValue = currentValue.slice(0, -1);
      inputField.value = currentValue;
      break;
    case 'Enter':
      try {
        const result = eval(currentValue);
        inputField.value = result;
        currentValue = result.toString();
      } catch (error) {
        inputField.value = 'Error';
      }
      break;
    default:
      if (/[0-9+*/.-]/.test(keyValue)) {
        currentValue += keyValue;
        inputField.value = currentValue;
      }
  }
}