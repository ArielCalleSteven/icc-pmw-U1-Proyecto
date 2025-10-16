// Funciones obligatorias de la práctica
document.getElementById("agregarFila").addEventListener("click", () => {
    const tabla = document.querySelector("table tbody");
    const nuevaFila = tabla.insertRow();
    nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido (Agregado JS)</td>";
});

const titulo = document.getElementById("titulo");
titulo.addEventListener("mouseover", () => {
    titulo.style.color = "orange";
});
titulo.addEventListener("mouseout", () => {
    titulo.style.color = "white";
});


// TERCERA ACCIÓN PERSONALIZADA OBLIGATORIA: Mostrar alerta al hacer clic en footer
document.querySelector("footer").addEventListener("click", () => {
    alert("¡Gracias por visitar mi página! Esto es el tercer evento JS.");
});