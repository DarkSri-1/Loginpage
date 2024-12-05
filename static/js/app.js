document.getElementById('loginBtn').addEventListener('click', function() {
  toggleForm('login');
});

document.getElementById('signupBtn').addEventListener('click', function() {
  toggleForm('signup');
});

function toggleForm(type) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');

  if (type === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
  } else {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
  }
}

// Client-side validation functions
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  let valid = true;

  // Validate Email
  if (!validateEmail(email)) {
    document.getElementById('loginEmailError').textContent = 'Invalid email format';
    valid = false;
  } else {
    document.getElementById('loginEmailError').textContent = '';
  }

  // Validate Password
  if (password.length < 6) {
    document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters';
    valid = false;
  } else {
    document.getElementById('loginPasswordError').textContent = '';
  }

  if (valid) {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => alert('Login failed'));
  }
});

// Signup Form Validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  
  let valid = true;

  // Validate Username
  if (username.length < 3) {
    document.getElementById('signupUsernameError').textContent = 'Username must be at least 3 characters';
    valid = false;
  } else {
    document.getElementById('signupUsernameError').textContent = '';
  }

  // Validate Email
  if (!validateEmail(email)) {
    document.getElementById('signupEmailError').textContent = 'Invalid email format';
    valid = false;
  } else {
    document.getElementById('signupEmailError').textContent = '';
  }

  // Validate Password
  if (!validatePassword(password)) {
    document.getElementById('signupPasswordError').textContent = 'Password must be at least 8 characters and include 1 letter and 1 number';
    valid = false;
  } else {
    document.getElementById('signupPasswordError').textContent = '';
  }

  if (valid) {
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => alert('Signup failed'));
  }
});
