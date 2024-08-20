$(document).ready(function(){

    const showMenu = (headerToggle, navbarId) =>{
        const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId)
    
        //validate that variables exist
        if(headerToggle && navbarId){
            toggleBtn.addEventListener('click', ()=>{
    
                nav.classList.toggle('show-menu')
    
            })
        }
    }
    
    showMenu('fa-bars','sidebar')
 
 });

