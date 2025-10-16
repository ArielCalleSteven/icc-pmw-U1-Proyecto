
# Programación y Plataformas Web (PPW)

---

#  Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Ariel Calle
**Repositorio:** [https://github.com/ArielCalleSteven/icc-pmw-U1-Proyecto.git](https://github.com/ArielCalleSteven/icc-pmw-U1-Proyecto.git)  
**Página desplegada (GitHub Pages):** [https://pablot18.github.io/icc-ppw-u1-miPrimeraPapina/](https://pablot18.github.io/icc-ppw-u1-miPrimeraPapina/)  

---

## 🧱 Estructura HTML utilizada

| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>` y `<h2>` |
| `<section>` | Agrupa contenido principal | Dos secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante y asignatura |

---

## 🧩 Nuevas etiquetas exploradas

| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| `<figure>` | Contenedor para imagen con pie de foto | Logo HTML5 con `<figcaption>` |
| `<progress>` | Barra de progreso de una tarea | Representa 70% completado |

**Código usado:**
```html
<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Logo HTML5">
  <figcaption>Logo de HTML5</figcaption>
</figure>

<progress value="70" max="100">70%</progress>
```


---

#  Práctica 2 – Adición de CSS y JavaScript
---

### 1. Archivos agregados

| Archivo     | Descripción                                                                                         | Ubicación                 |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `style.css` | Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) | Carpeta raíz del proyecto |
| `script.js` | Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico                     | Carpeta raíz del proyecto |

Estructura final del proyecto:

```
icc-ppw-u1-mi_pagina_web/
│
├── index.html
├── style.css
├── script.js
└── README.md
```
---

### 2. Implementación en HTML

Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**

```html
<link rel="stylesheet" href="style.css">
```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
<script src="script.js"></script>
```

---

### 3. Estilos aplicados con CSS

* COMPLETAR LA TABLA

| Elemento | Estilo implementado | Descripción |
|---|---|---|
| `body` | `background-color: #f4f4f4; font-family: Arial, sans-serif;` | Define la tipografía y un fondo suave, cumpliendo con los requisitos obligatorios. |
| `header` | `background-color: #007bff; color: white; padding: 30px 0;` | Define el color principal (azul), centra el texto y proporciona espaciado. |
| `table` | `width: 100%; border-collapse: collapse;` | Asegura que la tabla ocupe todo el ancho de su contenedor y une los bordes. |
| `button` | `background-color: #007bff; border-radius: 5px; transition: 0.3s;` | Estiliza el botón, lo redondea y usa la propiedad `transition` para un efecto suave. |
| **`section`** | **`box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);`** | **Propiedad Nueva 1:** Agrega una sombra sutil para dar profundidad a las secciones. |
| **`h2`** | **`letter-spacing: 1.5px;`** | **Propiedad Nueva 2:** Aumenta el espaciado entre las letras del título de las secciones. |
| `progress` | `accent-color: #007bff; width: 100%;` | Personalización de la barra de progreso |

**Ejemplo en el código (AGREGAR DOS EJEMPLOS DE SU CODIGO CSS):**

```css
/* Propiedad Nueva 1: box-shadow en section */
section {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Ejemplo base del botón y Propiedad Nueva 2: transition */
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
    transition: background-color 0.3s ease; 
}

button:hover {
  background-color: #0056b3;
}
```

---

###  4. Interactividad agregada con JavaScript

El archivo `script.js` incorpora dos acciones básicas:

1. **Agregar una nueva fila a la tabla al presionar el botón**

   ```javascript
   document.getElementById("agregarFila").addEventListener("click", () => {
     const tabla = document.querySelector("table");
     const nuevaFila = tabla.insertRow();
     nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
   });
   ```

2. **Cambiar el color del título al pasar el mouse por encima**

   ```javascript
   const titulo = document.getElementById("titulo");
   titulo.addEventListener("mouseover", () => {
     titulo.style.color = "orange";
   });
   titulo.addEventListener("mouseout", () => {
     titulo.style.color = "white";
   });
   ```


## Capturas de pantalla del proyecto final

* Agregar su captura de pantalla del proyecto final funcionando en el navegador, de ambas versiones (sin y con CSS/JS)

---
### Versión 1: Solo Estructura HTML (Sin CSS/JS)
![Captura de la estructura HTML] (./captura-html-puro.png)

### Versión 2: Diseño Final (Con CSS/JS)
![Captura de la versión final] (./captura-final.png)
---