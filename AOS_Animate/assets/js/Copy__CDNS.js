//Función para copiar la etiqueta completa
function copiarEtiquetaCompleta(scriptSrc) {
    //Crea la etiqueta script completa
    var scriptTag = document.createElement('script');
    scriptTag.src = scriptSrc;

    var scriptString = scriptTag.outerHTML;

    //Copia la etiqueta completa al portapapeles
    var aux = document.createElement("input");
    aux.setAttribute("value", scriptString);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    //SweetAlert2
    Swal.fire({
        title: 'Etiqueta Script Copiada',
        icon: 'success'
    });
}


//Función para copiar la etiqueta completa
function copiarEtiquetaCompleta1(linkHref) {
    //Crea la etiqueta link completa
    var linkTag = document.createElement('link');
    linkTag.href = linkHref;
    linkTag.rel = 'stylesheet';

    //Convierte la etiqueta link a una cadena de texto
    var linkString = linkTag.outerHTML;

    //Copia la etiqueta completa al portapapeles
    var aux = document.createElement("input");
    aux.setAttribute("value", linkString);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    //SweetAlert2
    Swal.fire({
        title: 'Etiqueta CSS Copiada',
        icon: 'success'
    });
}