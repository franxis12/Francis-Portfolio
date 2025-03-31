let name = document.getElementById("name");
let mess = document.getElementById("message");

function saveMessage() {
    if (mess.value !== "") {
        const recoment = document.getElementById("recomendatios");
        const name = document.getElementById("name");

        const div = document.createElement("div");
        div.classList.add("recomendbox");

        const p = document.createElement("p");
        p.classList.add("pstyle");

        // Añadir el contenido del mensaje
        p.textContent = name.value + ": " + mess.value;

        // Añadir el párrafo al div
        div.appendChild(p);

        // Añadir el nuevo comentario al contenedor existente
        recoment.appendChild(div);

        // Limpiar el input
        mess.value = "";
        name.value = "";

        const popup = document.getElementById("popup");
        popup.classList.add("show");

        // Ocultarlo luego de 2.5 segundos
        setTimeout(() => {
            popup.classList.remove("show");
        }, 2500);
    } else {
        alert("Por favor completa ambos campos antes de enviar.");
    }

    
}

