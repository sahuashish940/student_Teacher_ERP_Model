document.getElementById('sign-up-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
  }

  alert('Form submitted successfully!');
});

// login.html javascrit

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Add your login logic here
  alert('Login form submitted!');
});
