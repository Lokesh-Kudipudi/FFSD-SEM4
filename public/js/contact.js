function validatePhoneNumber() {
  const phoneInput = document.getElementById("phone");
  const phoneValue = phoneInput.value;
  const phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phoneValue)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }
  return true;
}
