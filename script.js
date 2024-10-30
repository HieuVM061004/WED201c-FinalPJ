// Function to add event listeners to all images
function addEventListeners() {
    const images = document.querySelectorAll('.gallery img');
    
    // Loop through each image to add event listeners
    images.forEach((img, index) => {
        // onmouseover event
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.2)';
            console.log(`Image ${index + 1} mouseover triggered.`);
        });

        // onmouseleave event
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            console.log(`Image ${index + 1} mouseleave triggered.`);
        });

        // onfocus event (for keyboard navigation)
        img.addEventListener('focus', () => {
            img.style.transform = 'scale(1.2)';
            console.log(`Image ${index + 1} focus triggered.`);
        });

        // onblur event (for keyboard navigation)
        img.addEventListener('blur', () => {
            img.style.transform = 'scale(1)';
            console.log(`Image ${index + 1} blur triggered.`);
        });
    });
}

// Function to initialize tabindex and log onload event
function initializeTabFocus() {
    const images = document.querySelectorAll('.gallery img');
    console.log("Page loaded, initializing tabindex attributes.");

    // Loop through each image to add tabindex attribute
    images.forEach((img) => {
        img.setAttribute('tabindex', '0');
    });
}

// onload event listener to call initializeTabFocus when the page loads
window.addEventListener('load', initializeTabFocus);

// Initialize event listeners for images on page load
window.addEventListener('load', addEventListeners);
