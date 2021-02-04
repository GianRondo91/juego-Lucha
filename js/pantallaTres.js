/*PANTALLA */
start.addEventListener('click', () => {
    if (pantalla3.style.display === "block") {
        pantalla3.style.display = "none";
        pantalla4.style.display = "block";
        pantalla1.style.display = "none";
        pantalla2.style.display = "none";
    } else {
        pantalla3.style.display = "none";
    };
});