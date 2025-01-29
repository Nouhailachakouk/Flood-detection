// Initialize map
var map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false, // Disable scroll wheel zoom
    touchZoom: false,       // Disable touch zoom
    doubleClickZoom: false  // Disable double click zoom
}).setView([0, 10], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

// Scroll detection
 // Dynamically resize map when the window is resized (important for full-screen behavior)
window.addEventListener('resize', function () {
    map.invalidateSize();
});
function scrollFunction() {
    let mybutton = document.getElementById("myBtn");

    if (window.scrollY > 100) {  // Use window.scrollY instead of document.body.scrollTop
        mybutton.style.display = "block";
        console.log("Scroll detected, button visible");
    } else {
        mybutton.style.display = "none";
        console.log("Scroll not detected, button hidden");
    }
}

// When the user clicks on the button, scroll to the top
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to top
}

