document.addEventListener("DOMContentLoaded", function() {
    // Select the headings for Main, About, and Contact
    let mainHeading = document.querySelector("h1");
    let aboutHeading = document.querySelector("#about h2");
    let contactHeading = document.querySelector("#contact h2");

    // Function to generate a random color
    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Change color on click for each heading
    mainHeading.addEventListener("click", function() {
        mainHeading.style.color = getRandomColor();
    });

    aboutHeading.addEventListener("click", function() {
        aboutHeading.style.color = getRandomColor();
    });

    contactHeading.addEventListener("click", function() {
        contactHeading.style.color = getRandomColor();
    });

    // Optionally: Change color every 2 seconds for all headings
    setInterval(function() {
        mainHeading.style.color = getRandomColor();
        aboutHeading.style.color = getRandomColor();
        contactHeading.style.color = getRandomColor();
    }, 500);
});

