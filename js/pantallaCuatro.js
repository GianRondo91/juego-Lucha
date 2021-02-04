/*PANTALLA */
volver.addEventListener('click', () => {
    if (pantalla4.style.display === "block") {
        pantalla4.style.display = "none";
        pantalla1.style.display = "block";
        pantalla2.style.display = "none";
        pantalla3.style.display = "none";
    } else {
        pantalla4.style.display = "none";
    };
});