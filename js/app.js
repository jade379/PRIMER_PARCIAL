const proyectos = [
    {
        nombre: "arte_moderno_jade",
        descripcion: "Plataforma de streaming desarrollada en HTML5 para mostrar arte moderno",
        enlace: "https://jade379.github.io/arte_moderno_jade/",
        icono: "🎬"
    },
    {
        nombre: "app_ios",
        descripcion: "AAplicación iOS desarrollada",
        enlace: "https://jade379.github.io/app_ios/",
        icono: "💻"
    },
    {
        nombre: "practica1_app_de_maquillaje",
        descripcion: "Aplicación de streaming desarrollada para mostrar opciones de maquillje",
        enlace: "https://jade379.github.io/practica1_app_de_maquillaje/",
        icono: "🍎"
    },
    {
        nombre: "practica_html5-",
        descripcion: "Sitio web profesional en HTML5",
        enlace: "https://jade379.github.io/practica_html5-/",
        icono: "📲"
    },
    {
        nombre: "-practica2-sub2-jademartinez/",
        descripcion: "Sitio web profesional",
        enlace: "https://jade379.github.io/-practica2-sub2-jademartinez/",
        icono: "🌐"
    },
    {
        nombre: "P3_IOS_EJEMPLOAPP/",
        descripcion: "Prácticas para reforsar ",
        enlace: "https://jade379.github.io/P3_IOS_EJEMPLOAPP/",
        icono: "📝"
    }
];


function cargarProyectos() {
    const contenedor = document.getElementById('proyectos');
    
    proyectos.forEach(proyecto => {
        const card = document.createElement('div');
        card.className = 'proyecto-card';
        
        card.innerHTML = `
            <h3>${proyecto.icono} ${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
            <a href="${proyecto.enlace}" target="_blank" class="btn">Ver Proyecto</a>
        `;
        
        contenedor.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', cargarProyectos);
