// Select the elements from the HTML
const button = document.getElementById('colorButton');
const statusText = document.getElementById('statusText');

// Add a click event listener
button.addEventListener('click', () => {
    // 1. Change the background color of the body
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

    // 2. Update the text on the screen
    statusText.innerText = "The color was changed to #" + randomColor + "!";
    statusText.style.color = "#" + randomColor;
    
    console.log("Button clicked and color changed!");
});