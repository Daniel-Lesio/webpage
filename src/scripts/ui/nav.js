import navAnim from '../effects/_navAnim';
import anime from 'animejs'
const nav = () => {
    let menuBtn = document.querySelector('.sideNavBtn');
    let overlay = document.querySelector('.overlay');
    let menuIn  = false;
    let menuIcon = document.querySelector('.menuIcon')
    let closeIcon = document.querySelector('.closeIcon')
    
    menuBtn.addEventListener('click',()=>{
        menuIn ? closeMenu() : openMenu()
        menuIn = !menuIn;
        console.log(menuIn)
    });  
    overlay.addEventListener('click',()=>{
        menuIn ? closeMenu() : openMenu()
        menuIn = !menuIn;
        console.log(menuIn)
    })
    const closeMenu =()=>{
        anime({
            targets : '.closeIcon',
            translateY : '0px'
        })
        anime({
            targets : '.menuIcon',
            translateY : 0
        })
        anime({
            targets : '.sidenav',
            translateX : -100,
            easing : 'easeOutExpo'
        })
        let tl = anime.timeline({
            targets : '.overlay',
            duration : 300

        })
        
        .add({
            opacity : 0
        })
        .add({
            translateX : '-100vw'
        })
    }
    const openMenu =()=>{
        let tl = anime.timeline({
            targets : '.overlay',
            duration : 200
        })
        .add({
            translateX : '100vw'
        })
        .add({
            opacity : 1
        })
        
        // anime({
        //     targets : '.overlay',
        //     translateX : '100vw',
        //     delay : -300
        // })
        // anime({
        //     targets : '.overlay',
        //     opacity :1,
        //     duration : 300
            
        // })

        anime({
            targets : 'overlay',
            
        })
        
        anime({
            targets : '.menuIcon',
            translateY : 100
        }) 
        anime({
            targets : '.sidenav',
            translateX : 300,
            easing : 'easeOutExpo'
        })
        anime({
            targets : '.closeIcon',
            translateY : '-115px'
        })   
    }
};
export default nav;