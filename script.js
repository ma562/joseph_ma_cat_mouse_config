localStorage.removeItem('cat');
localStorage.removeItem('mouse');
localStorage.removeItem('dimensions');
document.getElementById('game-config-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cat = document.getElementById('cat-select').value;
    const mouse = document.getElementById('mouse-select').value;
    const dimensions = document.getElementById('maze-dimensions').value;

    // Save values to local storage
    localStorage.setItem('cat', cat);
    localStorage.setItem('mouse', mouse);
    localStorage.setItem('dimensions', dimensions);

    // console.log(`Cat: ${cat}`);
    // console.log(`Mouse: ${mouse}`);
    // console.log(`Dimensions: ${dimensions}`);

    // Redirect to the new page
    window.location.href = "https://ma562.github.io/cat_mouse_map/"; // Replace with the actual game URL
});

// Load values from local storage on page load
window.addEventListener('load', function() {
    const savedCat = localStorage.getItem('cat');
    const savedMouse = localStorage.getItem('mouse');
    const savedDimensions = localStorage.getItem('dimensions');

    if (savedCat) {
        document.getElementById('cat-select').value = savedCat;
    }
    if (savedMouse) {
        document.getElementById('mouse-select').value = savedMouse;
    }
    if (savedDimensions) {
        document.getElementById('maze-dimensions').value = savedDimensions;
    }
});
