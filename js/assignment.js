"use strict";

//claring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const resolution = "Get better at coding and understanding coding.";  // Immutable resolution
const currentYear = 2024;  // Immutable year
let willMeetResolution = true;  // Mutable state that can change




function updateYear() {
    yearElement.textContent = currentYear;  // Update the content of the year element
}

function updateResolution() {
    resolutionElement.textContent = resolution;  // Update the content of the resolution element
}

function updateWillMeetResolution() {
    willMeetResolutionElement.textContent = willMeetResolution ? "Yes, I will meet my resolution!" : "No, I will not meet my resolution.";
}

function render() {
    updateYear();  // Updates the year
    updateResolution();  // Updates the resolution
    updateWillMeetResolution();  // Updates the willMeetResolution status

}

submissionBtn.addEventListener("click", function () {
    // Toggle the value of willMeetResolution 
    willMeetResolution = !willMeetResolution;

    // Re-render the page with the updated value
    render();

})
// Call render initially to display everything when the page loads
render();