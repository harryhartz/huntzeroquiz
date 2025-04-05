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

    if (userAnswer1 === correctAnswer1 &&
        userAnswer2 === correctAnswer2 &&
        userAnswer3 === correctAnswer3) {
        // Success

        // 1. Hide the form
        quizForm.style.display = 'none';

        // 2. Show success message WITH the GIF
        resultArea.innerHTML = `
            <img src="${successGifPath}" alt="Success!" style="max-width: 250px; display: block; margin: 15px auto;"> 
            <p class="result-success"><strong>> Authentication Successful.</strong></p>
            <p class="result-success">> Coordinates unlocked:</p>
            <p class="result-success">> <a href="${githubRepoUrl}" target="_blank" class="repo-link">${githubRepoUrl}</a></p>
        `;
        resultArea.className = 'result result-success';

    } else {
        // Failure - Ensure form is visible if they failed previously then retry
        quizForm.style.display = 'block'; // Make sure form is visible on failure

        resultArea.innerHTML = `
            <p class="result-failure"><strong>> Authentication Failed.</strong></p>
            <p class="result-failure">> One or more keys incorrect.</p>
            <p class="result-failure">> Connection unstable. Retry.</p>
        `;
         resultArea.className = 'result result-failure';
    }

    resultArea.style.display = 'block';
});