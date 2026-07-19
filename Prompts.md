# prompts.md

# AI Cover Letter Generator - Prompt Engineering Log

This document contains the prompts used during the development of the AI Cover Letter Generator project.

---

## Prompt 1 – HTML Structure

**Objective:**
Create a responsive HTML page for an AI Cover Letter Generator.

**Prompt:**

Create a responsive HTML page for an AI Cover Letter Generator using HTML5.

The page should include:

- Candidate Name
- Email Address
- Phone Number
- Job Role
- Target Company
- Experience
- Highest Qualification
- Key Skills
- Job Description
- Resume Upload (PDF)
- Generate Cover Letter button
- Loading section
- Output section
- Copy to Clipboard button

Use semantic HTML and make the structure clean and professional.

---

## Prompt 2 – CSS Styling

**Objective:**
Design a professional SaaS-style interface.

**Prompt:**

Create a responsive CSS stylesheet for the AI Cover Letter Generator.

Requirements:

- Modern card layout
- Gradient background
- Responsive design
- Two-column form layout
- Rounded input fields
- Attractive buttons
- Hover animations
- Output section styling
- Mobile-friendly interface

---

## Prompt 3 – JavaScript Logic

**Objective:**
Generate cover letters dynamically.

**Prompt:**

Write JavaScript to:

- Capture all form inputs
- Validate required fields
- Display a loading indicator
- Generate a professional cover letter using a template string
- Display the generated cover letter
- Implement Copy to Clipboard functionality
- Keep the code modular and easy to maintain

---

## Prompt 4 – Gemini API Integration

**Objective:**
Generate AI-powered cover letters.

**System Prompt**

You are an expert HR recruiter and professional career coach.

Generate a personalized, professional, ATS-friendly cover letter.

The tone should be formal, confident, and concise.

Do not use generic or repetitive sentences.

The cover letter should contain:

- Greeting
- Introduction
- Skills and experience
- Why the candidate fits the company
- Closing paragraph
- Professional signature

---

## Prompt 5 – User Prompt

Generate a professional cover letter using the following details.

Candidate Name:
{name}

Job Role:
{jobRole}

Target Company:
{company}

Experience:
{experience}

Education:
{education}

Key Skills:
{skills}

Job Description:
{jobDescription}

Resume Content:
{resumeText}

The cover letter should be personalized, ATS-friendly, and approximately 300–400 words long.

---

## Prompt 6 – Resume Personalization

Use the uploaded resume text to identify:

- Technical skills
- Professional experience
- Projects
- Certifications
- Education

Incorporate these naturally into the generated cover letter.

Do not invent any information.

---

## Prompt 7 – UI Improvements

Improve the application's user experience by adding:

- Loading animation
- Copy to Clipboard button
- Success notification after copying
- Responsive design
- Clean typography
- Professional spacing

---

## Prompt 8 – README Generation

Generate a professional README.md for this project.

Include:

- Project Overview
- Features
- Technologies Used
- Installation
- Environment Variables
- Screenshots
- Future Enhancements
- License

---

## Prompt 9 – Error Handling
Handle API failures gracefully.

Requirements:
- Show a friendly error message if the Gemini API request fails.
- Validate all required fields before making the API call.
- Hide the loading indicator when an error occurs.
- Allow the user to retry without refreshing the page.

---

## Prompt 10 – Output Formatting
Ensure the generated cover letter:
- Is 300–400 words.
- Uses proper business letter formatting.
- Avoids placeholders.
- Includes today's date.
- Ends with a professional sign-off.

---

## Prompt Engineering Best Practices
- Use temperature appropriate for professional writing.
- Avoid hallucinating candidate experience.
- Use only information provided by the user and uploaded resume.
- Return plain text suitable for copying into a document.

---

## Prompt Engineering Notes

### LLM Used

- Google Gemini API (Free Tier)

### Environment Variables

```
VITE_GEMINI_API_KEY=YOUR_API_KEY
```

### Security Practices

- API key stored in `.env`
- `.env` added to `.gitignore`
- API key never exposed in GitHub repository

### Future Enhancements

- Resume parsing using PDF.js
- Multiple cover letter templates
- Download as PDF
- Download as DOCX
- Dark Mode
- AI Tone Selector
- Multi-language support
- Cover Letter History
- Authentication System