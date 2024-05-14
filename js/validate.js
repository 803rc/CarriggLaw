function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var message = document.getElementById("message").value.trim();
  
    // First Name validation
    if (firstName === "") {
      showError("firstName", "Please enter your first name.");
      return false;
    } else if (!isValidName(firstName)) {
      showError("firstName", "Please enter a valid first name (letters only).");
      return false;
    } else {
      showSuccess("firstName");
    }
  
    // Last Name validation
    if (lastName === "") {
      showError("lastName", "Please enter your last name.");
      return false;
    } else if (!isValidName(lastName)) {
      showError("lastName", "Please enter a valid last name (letters only).");
      return false;
    } else {
      showSuccess("lastName");
    }
  
    // Email validation
    if (email === "") {
      showError("email", "Please enter your email address.");
      return false;
    } else if (!isValidEmail(email)) {
      showError("email", "Please enter a valid email address.");
      return false;
    } else {
      showSuccess("email");
    }
  
    // Phone Number validation
    if (phoneNumber === "") {
      showError("phoneNumber", "Please enter your phone number.");
      return false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      showError("phoneNumber", "Please enter a valid phone number (numbers only).");
      return false;
    } else {
      showSuccess("phoneNumber");
    }
  
    // Message validation (optional)
    if (message === "") {
      showError("message", "Please enter a message.");
      return false;
    } else {
      showSuccess("message");
    }
  
    return true;
  }
  
  function showError(fieldId, errorMessage) {
    var field = document.getElementById(fieldId);
    var errorElement = field.nextElementSibling;
    field.classList.add("error");
    errorElement.innerText = errorMessage;
  }
  
  function showSuccess(fieldId) {
    var field = document.getElementById(fieldId);
    var errorElement = field.nextElementSibling;
    field.classList.remove("error");
    errorElement.innerText = "";
  }
  
  function isValidName(name) {
    var nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  }