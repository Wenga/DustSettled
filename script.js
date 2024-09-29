let currentDiv = 0;

function showNextDiv() {
    // Get all div elements with the class
    const divs = document.querySelectorAll('.message-container');
    const container = document.getElementById('container');

    // Check if there are more divs to show
    if (currentDiv < divs.length) {
        divs[currentDiv].classList.remove('hidden');  
        divs[currentDiv].classList.add('visible');    
        currentDiv++;  // Move to the next div

        // Automatically scroll to the bottom of the container
        container.scrollTop = container.scrollHeight;
    }
    
}