
import anime from 'animejs'
const psi = () => {
    
    const container = document.querySelector('body');
    container.innerHTML +=
        `
        <div class="psi">
            <div class="progress-bar">
        </div>
        `
    
    let scrolledNavbarAnimation = (isScrolled) =>{
        let navbar = document.querySelector('header');
        if(isScrolled){
            anime({
                targets : '.scrollup',
                translateX : '-110px'
            })
            
        }
        else{
            navbar.classList.remove('scrolled')
            anime({
                targets : '.scrollup',
                translateX : '110px'
            })
        }
    }
        const progressBar = document.querySelector(".progress-bar");
    window.addEventListener('scroll',()=>{
        
        let pageHeight = window.innerHeight;
        let adjustedHeight = container.clientHeight - pageHeight;
    
        let progress = ((window.pageYOffset / adjustedHeight) * 100);
    
        progressBar.style.width = progress + "%";
        progress > 5 ? scrolledNavbarAnimation(true) : scrolledNavbarAnimation(false);
    });
};
 
export default psi;