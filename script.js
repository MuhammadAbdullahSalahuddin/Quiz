// Get all sections and navigation links
var sections = document.querySelectorAll("section");
var navLi = document.querySelectorAll(".nav-links li a");

// Add a simple active state to the navigation based on scroll position
window.addEventListener("scroll", function() {
  var current = "";

  // 1. Loop through all sections using a traditional for-loop
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.offsetTop;
    
    // Check if the current scroll position has reached this section
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  }

  // 2. Loop through all navigation links using a traditional for-loop
  for (var j = 0; j < navLi.length; j++) {
    var li = navLi[j];
    var hrefAttribute = li.getAttribute("href");
    
    // Remove the active class just in case
    li.classList.remove("active");
    
    // Check if the link's href matches the current section
    // using indexOf instead of the modern .includes()
    if (hrefAttribute.indexOf(current) !== -1) {
      li.style.color = "var(--secondary)"; // highlight active section
    } else {
      li.style.color = "var(--text-main)"; // revert to default color
    }
  }
});

// Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the page from reloading
    event.preventDefault();
    
    // Store a reference to the form so we can use it inside the timeout
    var formElement = this; 
    var btn = formElement.querySelector('button');
    var originalText = btn.innerText;
    
    // Update button to show success
    btn.innerText = "Message Sent!";
    btn.style.backgroundColor = "var(--accent)";
    btn.style.color = "var(--bg-main)";
    
    // Reset form and button after 3 seconds using a traditional function
    setTimeout(function() {
        formElement.reset();
        btn.innerText = originalText;
        btn.style.backgroundColor = "transparent";
        btn.style.color = "var(--accent)";
    }, 3000);
});