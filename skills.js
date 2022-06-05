const skills = [
    {"img":"./img/img-ecommerce-burgers.png","title":"ecommerce(responsive)","github":"https://github.com/NanoCode2022/E-commerce-hamburgueseria","web":"https://nanocode2022.github.io/E-commerce-hamburgueseria/"},
    {"img":"./img/img-portfolio.png","title":"portfolio (responsive)","github":"https://github.com/NanoCode2022/Portafolio-web","web":"http://portafolionahuelweb.000webhostapp.com/"},
    {"img":"./img/img-random-color.png","title":"random-color","github":"https://github.com/NanoCode2022/Generador-de-colores","web":"https://nanocode2022.github.io/Generador-de-colores/"},
];
const containerPorjects = document.getElementById('containerProjects');
skills.forEach(skill=>{
    const div = document.createElement('div');
    div.className = 'container_project';
    div.innerHTML = `
    <img src=${skill.img} alt=${skill.title}>
    <section class="section_info">
        <p>${skill.title}</p>
        <span> <button><a href=${skill.web}>Visitar</a></button>   <button><a href=${skill.github}>Github</a></button></span>
    </section>`;
    containerPorjects.appendChild(div)
});

// contacto gmail
const iconGmail = document.querySelector('.fa-envelope');
const infoGmail = document.querySelector('.span_gmail');

iconGmail.addEventListener('click',()=>{
    infoGmail.classList.toggle('active')
})

// navbar

const iconNav = document.querySelector('.icon_responsive');
const nav = document.querySelector('.nav');
iconNav.addEventListener('click',()=>{
    nav.classList.toggle('active_nav')
})