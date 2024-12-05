# Login & Signup App with Flask and Frontend

This is a simple web application with a login and signup page built using Flask (Python), SQLAlchemy, and basic frontend technologies (HTML, CSS, JavaScript).

## Features

- Login & Signup Forms: Users can register and log in with email and password.
- Form Validation: Client-side validation for email format, password strength, and username uniqueness.
- Backend: Flask application with user authentication (password hashing and verification).
- Database: SQLite for storing user data (can be easily switched to other databases like PostgreSQL or MySQL).


## Project Structure:
login-signup-app/
│
├── app.py                   # Main Flask backend code
├── static/
│   ├── css/
│   │   └── styles.css       # Custom CSS file for frontend
│   └── js/
│       └── app.js           # JavaScript for frontend interactions
├── templates/
│   └── index.html           # HTML template for login/signup page
├── requirements.txt         # Python dependencies
└── README.md                # Project documentation

### Requirements

- Python 3.x
- Flask
- Flask-SQLAlchemy
- Flask-Bcrypt
  
## Install the required dependencies in Bash
pip install -r requirements.txt

## Run the Flask app
python app.py
