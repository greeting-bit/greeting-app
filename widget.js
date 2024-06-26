document.addEventListener('DOMContentLoaded', function() {
    var greetingElement = document.getElementById('greeting-text');

    // Get current time
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    // Determine greeting based on time
    var greeting;
    if (currentHour >= 6 && currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    // Update greeting text in the widget
    greetingElement.textContent = greeting;
});