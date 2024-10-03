// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all navigation links and the header
    const navLinks = document.querySelectorAll('.nav-wrapper a');
    const header = document.querySelector('header');

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetSectionId = this.getAttribute('href'); // Get the href attribute
            const targetSection = document.querySelector(targetSectionId); // Select the target section

            if (targetSection) {
                const headerHeight = header.offsetHeight; // Get the height of the header
                const sectionPosition = targetSection.offsetTop - headerHeight; // Calculate position to scroll to

                // Smoothly scroll to the target section
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Function to display the current date and time
function updateDateTime() {
    const now = new Date();
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    
    // Update the inner text of the date and time elements
    document.getElementById('currentTime').innerText = now.toLocaleString('en-US', optionsTime);
    document.getElementById('currentDate').innerText = now.toLocaleString('en-US', optionsDate);
}

// Initial call to update date and time
updateDateTime(); 
// Update every second
setInterval(updateDateTime, 1000); 

// Cursor effect
const cursor = document.querySelector('.cursor');

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; // Move custom cursor
});

// Get the audio element for the click sound
const clickSound = document.getElementById('clickSound');

// Function to play sound when clicked
function playClickSound() {
    clickSound.currentTime = 0; // Rewind to the start
    clickSound.play(); // Play the sound
}

// Add click event listener to the entire document
document.addEventListener('click', playClickSound);

// Function to download the card image
function downloadCard() {
    const link = document.createElement('a'); // Create a new anchor element
    link.href = 'Full Stack Solutions.png'; // Set the path to your image
    link.download = "End-to-End Development.png"; // Set the file name for download
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger click to download the image
    document.body.removeChild(link); // Remove the link from the document
    playClickSound(); // Play sound effect on click
}
