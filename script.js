let currentDiv = 0;

function showNextDiv() {
    // Get all div elements with the class
    const divs = document.querySelectorAll('.message-container');

    // Check if there are more divs to show
    if (currentDiv < divs.length) {
        divs[currentDiv].classList.remove('hidden');  // Remove 'hidden' class
        divs[currentDiv].classList.add('visible');    // Add 'visible' class
        currentDiv++;  // Move to the next div
    }
}