document.addEventListener("DOMContentLoaded", () => {
    const projectsButton = document.querySelectorAll(".menu-button")[1]; 
    const animationDiv = document.querySelector(".animation");
    const projectsDiv = document.querySelector(".projects");
    const homeButton = document.querySelector(".menu-button:nth-child(1)");
    const projectsSection = document.querySelector(".projects");
    const animationSection = document.querySelector(".animation");

    projectsButton.addEventListener("click", () => {
        animationDiv.style.display = "none";
        projectsDiv.classList.add("visible");
    });

    homeButton.addEventListener("click", () => {
        projectsSection.classList.remove("visible");
        animationSection.style.display = "block"; // garante que ela apareça de novo
        window.restartAnimation(); // reinicia a animação!
    });

});
