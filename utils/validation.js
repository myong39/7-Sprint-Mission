export function checkEmailFormat(str) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(str);
}

export function checkPwFormat(value) {
  return value.length >= 8;
}

export function validateInput(
  input,
  emptyMessage,
  failureMessage,
  validationFunction
) {
  emptyMessage.classList.add('hide');
  failureMessage.classList.add('hide');

  if (input.value.length !== 0) {
    if (!validationFunction(input.value)) {
      emptyMessage.classList.add('hide');
      failureMessage.classList.remove('hide');
      return false;
    } else {
      emptyMessage.classList.add('hide');
      failureMessage.classList.add('hide');
      return true;
    }
  } else {
    emptyMessage.classList.remove('hide');
    failureMessage.classList.add('hide');
    return false;
  }
}
