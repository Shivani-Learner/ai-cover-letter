import "./style.css";

// ===============================
// GEMINI API KEY
// ===============================

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

console.log("Gemini Key Loaded:", API_KEY ? "YES ✅" : "NO ❌");


// ===============================
// ELEMENTS
// ===============================

const coverForm = document.getElementById("coverForm");

const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const companyInput = document.getElementById("company");
const skillsInput = document.getElementById("skills");
const jobDescriptionInput = document.getElementById("jobDescription");
const resumeInput = document.getElementById("resume");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

const loading = document.getElementById("loading");
const coverLetter = document.getElementById("coverLetter");

const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");


// ===============================
// LOADING
// ===============================

function showLoading(){

    loading.classList.remove("hidden");

}

function hideLoading(){

    loading.classList.add("hidden");

}


// ===============================
// VALIDATION
// ===============================

function validateForm(){

    let valid = true;

    const fields=[

        nameInput,
        roleInput,
        companyInput,
        skillsInput,
        jobDescriptionInput

    ];

    fields.forEach(field=>{

        if(field.value.trim()===""){

            field.style.border="2px solid #ef4444";

            valid=false;

        }

        else{

            field.style.border="2px solid #dbe4f0";

        }

    });

    return valid;

}
// ===============================
// FORM SUBMIT
// ===============================

coverForm.addEventListener("submit", (e) => {

    e.preventDefault();

    if (!validateForm()) {

        showToast("Please fill all required fields.", "#ef4444");

        return;

    }

    generateCoverLetter();

});


// ===============================
// GENERATE COVER LETTER
// ===============================

async function generateCoverLetter() {

    showLoading();

    generateBtn.disabled = true;

    generateBtn.innerHTML =
    `<i class="fa-solid fa-spinner fa-spin"></i> Generating...`;

    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const company = companyInput.value.trim();
    const skills = skillsInput.value.trim();
    const job = jobDescriptionInput.value.trim();

const prompt = `
You are an experienced HR Manager and Professional Resume Writer.

Write a professional, ATS-friendly business cover letter.

Candidate Details:
Name: ${name}
Position: ${role}
Company: ${company}
Skills: ${skills}
Job Description:
${job}

Formatting Rules:

Subject: Application for ${role} Position

Dear Hiring Manager,

Write a strong opening paragraph expressing interest in the position and the company.

Write a second paragraph explaining why the candidate is suitable for the role by naturally connecting the candidate's skills with the job requirements.

Write a third paragraph highlighting problem-solving ability, teamwork, willingness to learn, and how the candidate can contribute to the company.

Write a short closing paragraph thanking the recruiter and expressing interest in an interview.

Finish exactly with:

Sincerely,

${name}

Important Rules:
- Do NOT use bullet points.
- Do NOT use markdown.
- Do NOT use headings except the Subject line.
- Do NOT write "Certainly", "Here is your cover letter", or similar AI phrases.
- Keep the language natural and professional.
- Avoid repeating the same sentences.
- Keep the letter between 250 and 350 words.
- Leave only ONE blank line between paragraphs.
- Return ONLY the cover letter.
`;
    try{

        const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "You are a professional HR assistant who writes ATS-friendly cover letters."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 800
        })
    }
);

const data = await response.json();

console.log(data);

if (!response.ok) {
    throw new Error(data.error?.message || "Groq API Error");
}
let letter = data.choices[0].message.content;

// Remove markdown
letter = letter.replace(/\*\*/g, "");

// Remove excessive blank lines
letter = letter.replace(/\n{3,}/g, "\n\n");

// Trim spaces
letter = letter.trim();

hideLoading();

typeWriter(letter);

updateWordCount();

animateOutput();

showToast("Cover Letter Generated!", "#22c55e");
    }
    catch(error){

        console.error(error);

        hideLoading();

        coverLetter.innerHTML =

        "Failed to generate cover letter.<br>Please check your API Key or Internet connection.";

        showToast("Generation Failed!", "#ef4444");

    }

    finally{

        generateBtn.disabled = false;

        generateBtn.innerHTML =

        `<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Cover Letter`;

    }

}
// ===============================
// TYPEWRITER EFFECT
// ===============================

function typeWriter(text){

    coverLetter.innerHTML = "";

    let index = 0;

    const speed = 8;

    function typing(){

        if(index < text.length){

            coverLetter.innerHTML += text.charAt(index);

            index++;

            setTimeout(typing, speed);

        }

    }

    typing();

}


// ===============================
// COPY BUTTON
// ===============================

copyBtn.addEventListener("click",()=>{

    const text = coverLetter.innerText.trim();

    if(text===""){

        showToast("Generate a cover letter first!","#ef4444");

        return;

    }

    navigator.clipboard.writeText(text);

    copyBtn.innerHTML =
    `<i class="fa-solid fa-check"></i> Copied`;

    copyBtn.style.background="#22c55e";

    showToast("Copied Successfully!","#22c55e");

    setTimeout(()=>{

        copyBtn.innerHTML=
        `<i class="fa-solid fa-copy"></i> Copy`;

        copyBtn.style.background="";

    },2000);

});


// ===============================
// DOWNLOAD BUTTON
// ===============================

downloadBtn.addEventListener("click",()=>{

    const text = coverLetter.innerText.trim();

    if(text===""){

        showToast("Nothing to Download!","#ef4444");

        return;

    }

    const blob = new Blob([text],{

        type:"text/plain"

    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "CoverLetter.txt";

    a.click();

    URL.revokeObjectURL(url);

});


// ===============================
// TOAST
// ===============================

function showToast(message,color){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=`
        <i class="fa-solid fa-circle-check"></i>
        ${message}
    `;

    toast.style.background=color;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },400);

    },2500);

}


// ===============================
// SUCCESS ANIMATION
// ===============================

function animateOutput(){

    coverLetter.style.opacity="0";

    coverLetter.style.transform="translateY(25px)";

    setTimeout(()=>{

        coverLetter.style.transition=".5s ease";

        coverLetter.style.opacity="1";

        coverLetter.style.transform="translateY(0px)";

    },100);

}


// ===============================
// WORD COUNTER
// ===============================

function updateWordCount(){

    const text = coverLetter.innerText.trim();

    if(text===""){

        wordCount.textContent="0";

        return;

    }

    const words=text.split(/\s+/);

    wordCount.textContent=words.length;

}


// ===============================
// CHARACTER COUNTER
// ===============================

jobDescriptionInput.addEventListener("input",()=>{

    charCount.textContent=

    jobDescriptionInput.value.length;

});


// ===============================
// AUTO RESIZE
// ===============================

document.querySelectorAll("textarea").forEach(textarea=>{

    textarea.addEventListener("input",()=>{

        textarea.style.height="auto";

        textarea.style.height=

        textarea.scrollHeight+"px";

    });

});


// ===============================
// CTRL + ENTER
// ===============================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="Enter"){

        generateBtn.click();

    }

});


// ===============================
// AUTO FOCUS
// ===============================

window.addEventListener("load",()=>{

    nameInput.focus();

});