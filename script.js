document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const container = document.querySelector(".container");
    const header = document.querySelector(".header");
    const aboutMeSection = document.querySelector(".about-me");
    const familySection = document.querySelector(".family-photos");
    const textElements = document.querySelectorAll(".section, .header h1, .header p, .header a");

    // Apply smooth transitions
    body.style.transition = "background 0.5s ease-in-out";
    container.style.transition = "background 0.5s ease-in-out, color 0.5s ease-in-out";
    textElements.forEach(el => el.style.transition = "color 0.5s ease-in-out");

    const themeButtons = document.querySelectorAll(".theme-toggle button");

    themeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const theme = button.dataset.theme;

            // Add bounce animation to button
            button.classList.add("bounce");
            setTimeout(() => button.classList.remove("bounce"), 300); // Remove animation after 300ms

            // Switch background and text colors based on the selected theme
            switch (theme) {
                case "dark":
                    body.style.background = "#111"; // Dark outer background
                    container.style.background = "#222"; // Darker box
                    textElements.forEach(el => el.style.color = "white"); // White text
                    aboutMeSection.style.color = "white";
                    familySection.style.color = "white";
                    break;
                case "purple":
                    body.style.background = "#6a0dad"; // Purple outer background
                    container.style.background = "#8a2be2"; // Brighter purple box
                    textElements.forEach(el => el.style.color = "#fff"); // White text
                    aboutMeSection.style.color = "#fff";
                    familySection.style.color = "#fff";
                    break;
                case "blue":
                    body.style.background = "#003366"; // Dark blue outer background
                    container.style.background = "#004488"; // Slightly lighter blue box
                    textElements.forEach(el => el.style.color = "#ffffff"); // White text
                    aboutMeSection.style.color = "#ffffff";
                    familySection.style.color = "#ffffff";
                    break;
                case "white":
                    body.style.background = "#ffffff"; // White outer background
                    container.style.background = "#f8f8f8"; // Light gray box
                    textElements.forEach(el => el.style.color = "#222"); // Dark text
                    aboutMeSection.style.color = "#222";
                    familySection.style.color = "#222";
                    break;
                default:
                    // Default styling in case no valid theme is selected
                    break;
            }
        });
    });

    const signupBox = document.getElementById("signup-box");
    const loginBox = document.getElementById("login-box");
    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");

    loginBtn.addEventListener("click", () => {
        signupBox.style.display = "none";
        loginBox.style.display = "block";
    });

    signupBtn.addEventListener("click", () => {
        loginBox.style.display = "none";
        signupBox.style.display = "block";
    });
});
