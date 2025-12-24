# 📘 Educase India – Frontend Assignment

## 🏢 Company: Educase India

**Tech Stack**: React.js, HTML5, CSS  
**Project Type**: Frontend SPA (Single Page Application)  
**Main Modules**: Home, Register, Login, Dashboard

---

## 🚀 Features

- ✅ User Registration with input validation
- ✅ Login Authentication using `localStorage`
- ✅ Dashboard with dynamic user data
- ✅ Email & Phone validation using RegEx
- ✅ Persistent data storage via `localStorage`
- ✅ Responsive design using CSS
- ✅ Font Awesome camera icon for profile avatar

---

## 🛠️ Technologies Used

| Technology        | Description                          |
| ----------------- | ------------------------------------ |
| React.js          | Frontend framework for UI            |
| JavaScript (ES6+) | Application logic and validation     |
| CSS3              | Styling and layout                   |
| Font Awesome      | Icons for profile section            |
| LocalStorage API  | Store and retrieve user data locally |

---

## 🧩 Component Overview

### 🔹 `Register.jsx` (in `src/Components`)

- Captures user details: Full Name, Email, Phone, Password, Company Name
- Validates email and phone number before submission
- Stores form data in `localStorage`
- On success, navigates to Login page

### 🔹 `Login.jsx`

- Accepts Email and Password
- Validates credentials against stored data
- On success, redirects to Dashboard

### 🔹 `Dashboard.jsx`

- Displays registered user's Name and Email
- Shows profile image with camera icon
- Includes short account description

### 🔹 `Home.jsx`

- Landing page with basic UI and navigation

---

## 🔁 Logic Flow

```text
Register → Save data in localStorage
Login → Validate credentials from localStorage
Dashboard → Display saved user data dynamically

⚙️ Setup Instructions:
1️⃣ Clone the repository
git clone https://github.com/yourusername/PopX-Account-App.git
cd PopX-Account-App

2️⃣ Install dependencies
npm install

3️⃣ Run the app
npm run dev


App will start on 👉 http://localhost:5173
💾 LocalStorage Example:

Here’s how user data is stored in the browser’s localStorage:

{
  "username": "Samit Sankhla",
  "phonenumber": "8529408256",
  "email": "samitsnakhla@gmail.com",
  "password": "12345",
  "companyname": "PopX"
}



🔒 Validation Rules:
Field	Validation
Email	Must follow standard email format
Phone Number	Must be exactly 10 digits
Password	Required field
Name	Required field
🧑 Author

👤 Samit Sankhla
Full Stack Web Developer
📧 samitsankhla@gmail.com
]
💼 https://github.com/samitsankhla

📜 License:

This project is licensed under the MIT License.
You are free to use and modify it for educational or personal projects.
```
# popx
# popx
# popx
# popx
