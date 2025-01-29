// Function to toggle visibility of the paragraph
function toggleVisibility(id) {
    const content = document.getElementById(id);

    // Ensure the element exists before modifying it
    if (content) {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Show the content
        } else {
            content.style.display = 'none'; // Hide the content
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons with the 'info-button' class
    const buttons = document.querySelectorAll(".info-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Get the target content ID based on button's sibling div
            const targetContent = this.nextElementSibling; 

            // Ensure the element exists before modifying it
            if (targetContent) {
                if (targetContent.style.display === "none" || targetContent.style.display === "") {
                    targetContent.style.display = "block"; // Show content
                } else {
                    targetContent.style.display = "none"; // Hide content
                }
            }
        });
    });
});
