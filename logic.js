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
