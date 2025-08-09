## (AI-Powered) -Pentest Report Generator
A simple AI-powered web app that helps penetration testers, students, and security enthusiasts interpret raw Nmap scan outputs into clear, beginner-friendly explanations.
Built with React + Tailwind (frontend), Express + MongoDB (backend), and OpenAI API for AI processing.

🚀 Features
User Authentication (login & signup, JWT-based)

Paste Nmap Output → Get AI-generated explanations

Tailwind UI for fast, responsive design

Extendable → Ready for subscription/paywall integration in future

📂 Project Structure
bash
Copy
Edit
/client                     # React + Tailwind Frontend
/server                     # Express Backend
/config                     # Database config
.env                        # Environment variables
🛠 Tech Stack
Frontend: React, Vite, TailwindCSS, Axios
Backend: Node.js, Express, MongoDB (Mongoose)
AI: OpenAI API (GPT models)

⚙️ Setup Instructions
1️⃣ Clone the repo
bash
git clone https://github.com/BesuDev195/AI-Powered-Pentest-Report-Generator.git
cd pentest-report-generator
2️⃣ Install dependencies
Frontend

bash
cd client
npm install

Backend
cd ../server
npm install
3️⃣ Configure .env
Create a .env file in /server:

ini
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret
OPENAI_API_KEY=your-openai-api-key
4️⃣ Run the app
Backend

bash
cd server
npm run dev
Frontend

bash
cd client
npm run dev
🔮 Future Improvements
Payment gateway (Stripe) for subscription

File upload support for scan results

Support for multiple scan tools (Nessus, Nikto, etc.)
