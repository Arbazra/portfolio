document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(progressBar => {
        const target = parseInt(progressBar.getAttribute('data-target'));
        let width = 0;

        function updateWidth() {
            if (width >= target) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }

        const interval = setInterval(updateWidth, 30); // Adjust the interval and increment as needed
    });
});
