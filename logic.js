(function () {
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');
    const clickSound = document.getElementById('click-sound'); // Get the audio element

    const animateit = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this;

        const move = 25;
        const xMove = (x / width) * (move * 2) - move;
        const yMove = (y / height) * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    };

    const playSound = () => {
        if (clickSound) {
            clickSound.currentTime = 0; // Reset the sound to the beginning
            clickSound.play().catch(error => {
                console.error("Audio play failed: ", error);
            }); // Play the sound
        }
    };

    link.forEach(b => {
        b.addEventListener('mousemove', animateit);
        b.addEventListener('mouseleave', animateit);
        b.addEventListener('click', playSound); // Add event listener to play sound on link click
    });

    // Add event listener to the entire document for click events
    document.addEventListener('click', playSound); // Play sound on any click in the document

    window.addEventListener('mousemove', editCursor);
})();


// Smooth scrolling for links with 20px offset
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault(); // Prevent the default anchor behavior

            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = window.pageYOffset + elementPosition - 180; // Scroll 180px above the target section

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});


document.getElementById("downloadBtn").addEventListener("click", function () {
    const portfolioCard = document.getElementById("portfolioCard");

    html2canvas(portfolioCard).then(canvas => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "prince_kumar_Portfolio_card.png"; // Specify the file name
        link.click(); // Trigger the download
    }).catch(error => {
        console.error("Error generating image: ", error);
        alert("Failed to generate image. Please try again.");
    });
});