document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-wrapper a');
    const header = document.querySelector('header');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;

                const sectionPosition = targetSection.offsetTop - headerHeight - 80;

                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// JavaScript to display the current date and time
function updateDateTime() {
    const now = new Date();
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById('currentTime').innerText = now.toLocaleString('en-US', optionsTime);
    document.getElementById('currentDate').innerText = now.toLocaleString('en-US', optionsDate);
}

updateDateTime(); // Initial call
setInterval(updateDateTime, 1000); // Update every second


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


// Get the audio element
        const clickSound = document.getElementById('clickSound');

        // Function to play sound
        function playClickSound() {
            clickSound.currentTime = 0; // Rewind to the start
            clickSound.play(); // Play the sound
        }

        // Add click event listener to the entire document
        document.addEventListener('click', playClickSound);



        // document.getElementById('downloadBtn').addEventListener('click', function() {
        //     // Get the contact card element
        //     const contactCard = document.getElementById('contactCard');
        
        //     // Use html2canvas to take a screenshot of the card
        //     html2canvas(contactCard).then(canvas => {
        //         // Convert the canvas to a Blob
        //         canvas.toBlob(function(blob) {
        //             // Create an anchor element
        //             const link = document.createElement('a');
        //             link.href = URL.createObjectURL(blob); // Create a URL for the Blob
        //             link.download = 'contact-card.png'; // Set the filename
        
        //             // Programmatically click the link to trigger the download
        //             document.body.appendChild(link); // Append the link to the body
        //             link.click(); // Trigger the download
        //             document.body.removeChild(link); // Remove the link after triggering
        //         }, 'image/png');
        //     });
        // });
        