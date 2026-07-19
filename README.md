# 🤖 AI Cover Letter Generator

A modern AI-powered web application that generates professional, ATS-friendly cover letters based on user details such as job role, company name, skills, and job description.

This project is developed as part of **Sprint 4 – AI Engineering** under the **Phase 2: Foundation Projects** program.

---

## 📌 Features

- Professional and responsive UI
- Candidate information form
- Job description input
- Resume upload support (PDF)
- Dynamic cover letter generation
- Copy to Clipboard functionality
- Loading indicator while generating
- Easy integration with Google Gemini API
- Secure API key management using `.env`

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Google Gemini API
- Fetch API
- Environment Variables (.env)

---

## 📂 Project Structure

```text
AI-Cover-Letter-Generator/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── prompts.md
├── .env
├── .gitignore
└── assets/
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/username/AI-Cover-Letter-Generator.git
```

### 2. Open the Project

```bash
cd AI-Cover-Letter-Generator
```

### 3. Install Dependencies (if using Vite)

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
VVITE_GROQ_API_KEY=YOUR_API_KEY
```

---

## ▶️ Run the Project

If using Vite:

```bash
npm run dev
```

Or simply open `index.html` in your browser for the Phase 1 version.

---

## 💻 Sample JavaScript

```javascript
const prompt = `
Generate a professional cover letter.

Candidate Name: ${name}
Job Role: ${role}
Company: ${company}
Skills: ${skills}
`;

console.log(prompt);
```

---

## 📤 Gemini API Example

```javascript
const response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
import.meta.env.VITE_GEMINI_API_KEY,
{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ]
    })
});
```

---

## 📋 Example Input

| Field | Example |
|--------|---------|
| Candidate Name | Shivani Sirohi |
| Job Role | Software Developer |
| Target Company | Google |
| Skills | Java, HTML, CSS, JavaScript, SQL |
| Experience | Fresher |
| Education | MCA |

---

## 📄 Generated Cover Letter

The application generates a professional cover letter including:

- Greeting
- Introduction
- Technical Skills
- Experience Summary
- Interest in Company
- Closing Statement
- Signature

---

## 🔒 Security

Store API keys in a `.env` file.

```env
VITE_GEMINI_API_KEY=YOUR_SECRET_KEY
```

Never commit the `.env` file to GitHub.

Add this to `.gitignore`:

```gitignore
node_modules
.env
```

---

## 📷 Screenshots

![AI cover letter Generator Screenshots](/Screenshot1.png)
![AI cover letter Generator Screenshots](/Screenshot%202.png)
![AI cover letter Generator Screenshots](/Screenshot%203.png)
![AI cover letter Generator Screenshots](/Screenshot%204.png)
![AI cover letter Generator Screenshots](/Screenshot%205.png)
 
*(Note:The screenshots above showcases the final Layout of the AI Cover Page.)*

---

## 🎯 Future Enhancements

- AI Tone Selection-
- Resume Parsing
- Download as PDF
- Download as DOCX
- Dark Mode
- Cover Letter Templates
- Multiple Languages
- User Authentication
- Cover Letter History

---

## 👩‍💻 Author

**Shivani Sirohi**

MCA Graduate

Passionate about AI, Web Development, Java, and Software Engineering.

---

## 📜 License

This project is created for educational and learning purposes as part of the AI Engineering Sprint.

Feel free to modify and improve it for your own learning.