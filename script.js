document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Greeting
    const greeting = document.createElement("p");
    const hours = new Date().getHours();
    let message = "Hello!";
    if (hours < 12) {
        message = "Good Morning!";
    } else if (hours < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }
    greeting.textContent = message;
    greeting.style.fontSize = "1rem";
    greeting.style.marginTop = "10px";

    // Add greeting below name
    const profileCard = document.querySelector(".profile-card");
    profileCard.insertBefore(greeting, profileCard.querySelector(".role"));

    // Light/Dark Mode Toggle
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle.querySelector("i");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");

        // Update icon and greeting text color
        themeIcon.classList.toggle("fa-moon", !isDarkMode);
        themeIcon.classList.toggle("fa-sun", isDarkMode);
        greeting.style.color = isDarkMode ? "#FFFFFF" : "#3E5879";
    });
});

// CSS untuk mode gelap
const style = document.createElement("style");
style.textContent = `
    body.dark-mode {
        background-color: #333;
        color: white;
    }

    .dark-mode .profile-card {
        background-color: #444;
        color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    .dark-mode .social-link i {
        color: white;
    }

    .dark-mode .social-link i:hover {
        color: #84B8C6;
    }
`;
document.head.appendChild(style);
