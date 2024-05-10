document.addEventListener('DOMContentLoaded', function () {
    // Text to display
    var text = "Hello, I'm Arbaz, a passionate web developer";
    var words = text.split(' ');
    var index = 0;

    // Function to display words one by one
    function displayWords() {
        if (index < words.length) {
            // Add word to the text display element
            document.getElementById('text-display').textContent += words[index] + ' ';
            index++;
            // Call displayWords() recursively with a delay
            setTimeout(displayWords, 500); // Adjust delay (in milliseconds) as needed
        }
    }

    // Call the function to start displaying words
    displayWords();
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});