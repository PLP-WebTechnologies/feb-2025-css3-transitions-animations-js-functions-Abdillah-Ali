document.addEventListener('DOMContentLoaded', function() {
    const animatedButton = document.getElementById('animatedButton');
    const dataDisplay = document.getElementById('dataDisplay');
    const textInput = document.getElementById('textInput');
    const textDisplay = document.getElementById('textDisplay');

    // Function to store data in localStorage
    function storeData(key, value) {
        localStorage.setItem(key, value);
    }

    // Function to retrieve data from localStorage
    function retrieveData(key) {
        return localStorage.getItem(key);
    }

    // Function to trigger animation
    function triggerAnimation() {
        animatedButton.classList.add('animate-color');
        setTimeout(() => {
            animatedButton.classList.remove('animate-color');
        }, 2000);
    }

    // Event listener for button click
    animatedButton.addEventListener('click', function() {
        triggerAnimation();
        storeData('lastClicked', new Date().toLocaleString());
        dataDisplay.textContent = 'Last clicked: ' + retrieveData('lastClicked');
    });

    // Event listener for text input
    textInput.addEventListener('input', function() {
        storeData('inputText', textInput.value);
        textDisplay.textContent = 'You entered: ' + textInput.value;
    });

    // Display stored text on page load
    const storedText = retrieveData('inputText');
    if (storedText) {
        textDisplay.textContent = 'You entered: ' + storedText;
    }
});
