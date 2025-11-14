// Inicialización de PageFlip (código original)
document.addEventListener('DOMContentLoaded', function () {
    // Contenedor con las páginas
    const container = document.getElementById('mi-revista');

    if (!container) {
        console.error('No se encontró el contenedor #mi-revista.');
        return;
    }

    // Comprobar que la librería St.PageFlip está disponible
    if (typeof St === 'undefined' || !St.PageFlip) {
        console.error('La librería PageFlip (St) no está cargada. Comprueba el <script> en el HTML.');
        return;
    }

    // Crear la instancia de PageFlip con opciones razonables por defecto
    // usar el tamaño de la ventana: cada página debe ocupar la mitad del ancho
    const pageWidth = Math.floor(window.innerWidth / 2);
    const pageHeight = window.innerHeight;

    const pageFlip = new St.PageFlip(container, {
        width: pageWidth,
        height: pageHeight,
        size: 'stretch',
        minWidth: 315,
        maxWidth: 3000,
        drawShadow: true,
        maxShadowOpacity: 0.5,
        showCover: false, // tratar todas las páginas igual (revista)
        mobileScrollSupport: false
    });

    // Asegurar que el número total de páginas sea par.
    // PageFlip organiza en spreads de dos páginas; si el total es impar, la última
    // página quedará sola y no formará el spread 3-4 que quieres ver al final.
    (function ensureEvenTotalPages(){
        const allPages = Array.from(container.querySelectorAll('.page'));
        if (allPages.length % 2 !== 0) {
            // insertar una página en blanco justo antes de la última página
            const last = allPages[allPages.length - 1];
            const blank = document.createElement('div');
            blank.className = 'page';
            // opcional: mantener data-name para depuración
            blank.setAttribute('data-name', 'blank-inserted');
            last.parentNode.insertBefore(blank, last);
            console.log('Se insertó una página en blanco para hacer par el número total de páginas.');
        }
    })();

    // Cargar las páginas desde el HTML (elementos con clase .page)
    pageFlip.loadFromHTML(container.querySelectorAll('.page'));
    // Opcional: exponer la instancia para depuración desde la consola
    window.pageFlip = pageFlip;
    console.log('PageFlip inicializado en #mi-revista', pageFlip);

    // Loguear mapa de páginas (id -> data-name) para facilitar referencias
    (function logPageNames(){
        const pages = container.querySelectorAll('.page');
        const map = [];
        pages.forEach((p, i) => {
            map.push({ index: i, id: p.id || null, name: p.getAttribute('data-name') || null });
        });
        console.log('Mapa de páginas (index, id, data-name):', map);
    })();

    // Ajustar si se redimensiona la ventana: actualizar tamaño de PageFlip
    window.addEventListener('resize', function(){
        try {
            const newPageWidth = Math.floor(window.innerWidth / 2);
            const newPageHeight = window.innerHeight;
            if (typeof pageFlip.update === 'function') {
                // intentar actualizar dimensiones si la librería lo soporta
                pageFlip.update({ width: newPageWidth, height: newPageHeight });
            } else if (typeof pageFlip.resize === 'function') {
                pageFlip.resize(newPageWidth, newPageHeight);
            } else {
                // fallback: reconstruir la instancia
                try { pageFlip.destroy(); } catch(e2){}
                const pf = new St.PageFlip(container, {
                    width: newPageWidth,
                    height: newPageHeight,
                    size: 'stretch',
                    minWidth: 315,
                    maxWidth: 3000,
                    drawShadow: true,
                    maxShadowOpacity: 0.5,
                    showCover: true,
                    mobileScrollSupport: false
                });
                pf.loadFromHTML(container.querySelectorAll('.page'));
                window.pageFlip = pf;
            }
        } catch (e) {
            console.error('Error al redimensionar PageFlip:', e);
        }
    });
});