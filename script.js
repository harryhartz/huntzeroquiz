document.getElementById('quiz-form').addEventListener('submit', function(event) {
event.preventDefault();

// --- Your Correct Answers and GitHub Username Edits Go Here ---
const correctAnswer1 = "srh"; // Replace
const correctAnswer2 = "chicken"; // Replace
const correctAnswer3 = "chinnu"; // Replace (Using 'sonu' from your earlier request)

const githubUsername = "HarshaTheDev"; // Replace
const repoName = "huntzero";
// --- End of Edits ---

const userAnswer1 = document.getElementById('q1').value.trim().toLowerCase();
const userAnswer2 = document.getElementById('q2').value.trim().toLowerCase();
const userAnswer3 = document.getElementById('q3').value.trim().toLowerCase();

const resultArea = document.getElementById('result-area');
const quizForm = document.getElementById('quiz-form'); // Get the form element
const githubRepoUrl = `https://github.com/harryhartz/huntzero.git`;
const successGifPath = 'abc.gif'; // Path to your GIF (in the same folder)
const headingElement = document.querySelector('h1'); // <-- ADD THIS LINE
const instructionsParagraph = document.querySelector('.instructions'); // <-- ADD THIS LINE

    if (userAnswer1 === correctAnswer1 &&
    userAnswer2 === correctAnswer2 &&
    userAnswer3 === correctAnswer3) {
    // Success

    // Existing code to hide elements...
    headingElement.style.display = 'none';
    instructionsParagraph.style.display = 'none';
    quizForm.style.display = 'none';

    // Modify the innerHTML part, specifically the img style:
    resultArea.innerHTML = `
        <img src="${successGifPath}" alt="Success!" style="max-width: 450px; display: block; margin: 25px auto;"> 
        <p class="result-success"><strong>> Authentication Successful.</strong></p>
        <p class="result-success">> Coordinates unlocked:</p>
        <p class="result-success">> <a href="${githubRepoUrl}" target="_blank" class="repo-link">${githubRepoUrl}</a></p>
    `;
    resultArea.className = 'result result-success';
    // Existing code...

} else {
    // Failure
    // Optional: Ensure they are visible on failure if they retry after success
    headingElement.style.display = 'block';          // <-- ADD THIS LINE (Show heading)
    instructionsParagraph.style.display = 'block'; // <-- ADD THIS LINE (Show instructions)
    quizForm.style.display = 'block';                // Keep this line (Show form)

    // Existing code to set resultArea.innerHTML with failure message...
    resultArea.innerHTML = `
        <p class="result-failure"><strong>> Authentication Failed.</strong></p>
        <p class="result-failure">> One or more keys incorrect.</p>
        <p class="result-failure">> Connection unstable. Retry.</p>
    `;
     resultArea.className = 'result result-failure';
}

resultArea.style.display = 'block'; // Keep this line
});
