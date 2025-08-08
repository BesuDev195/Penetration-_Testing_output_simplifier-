# 🤖 AI-Powered Pentest Report Generator

An **AI-driven Full-Stack Web Application** that helps security professionals create **detailed, professional penetration testing reports** in minutes.  
Built with **React**, **Node.js**, **Express**, **MongoDB**, **Tailwind CSS**, and integrated **AI models** to assist in **automating vulnerability analysis and report generation**.

---

## 🚀 Key Features

- **AI-Assisted Reporting** – Automatically generate detailed vulnerability descriptions, impact analysis, and remediation steps using AI.
- **Dynamic Report Creation** – Add, edit, and manage pentest findings with an intuitive UI.
- **Template-Based PDF Output** – Export clean, client-ready reports instantly.
- **Full-Stack Architecture** – React frontend + Express/MongoDB backend.
- **Responsive & Modern UI** – Built with Tailwind CSS for a sleek and mobile-friendly experience.
- **Role-Based Authentication** – Secure login system for testers and managers.
- **Evidence Upload** – Attach screenshots or proof-of-concept files to findings.
- **Search & Filter** – Quickly find specific vulnerabilities in large reports.
- **Export Options** – PDF, and planned DOCX support.
- **Customizable Report Templates** – Match your company’s branding.

---

## 🛠 Tech Stack

### **Frontend**
- ⚛️ [React](https://reactjs.org/) – Component-based UI
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – Modern, responsive styling
- 📦 [Axios](https://axios-http.com/) – HTTP requests to backend
- 📄 [React Router](https://reactrouter.com/) – Routing between pages

### **Backend**
- 🟢 [Node.js](https://nodejs.org/) – JavaScript runtime
- 🚏 [Express.js](https://expressjs.com/) – API and server handling
- 🍃 [MongoDB](https://www.mongodb.com/) – NoSQL database
- 🔐 [JWT](https://jwt.io/) – Authentication
- 🤖 **AI Integration** – OpenAI API / custom NLP models for text generation

---


---

## ⚡ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/BesuDev195/AI-Powered-Pentest-Report-Generator.git
cd AI-Powered-Pentest-Report-Generator

cd client
npm install

cd ../backend
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_api_key

Open two terminals:

Frontend:

bash
cd frontend
npm run dev
Backend:

bash
cd backend
npm start

🤝 Contributing
Fork the repo

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
