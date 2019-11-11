import anime from 'animejs'
import { delay } from 'q';
export default function services (){
    let targets = document.querySelectorAll('.serv');
    let myObj = {
        range : 0
    }   
    if(!!window.IntersectionObserver){
        let observer = new IntersectionObserver((entries, observer) => { 
            entries.forEach(entry => {
            if(entry.isIntersecting){
                anime({
                    targets : '.service',
                    delay : anime.stagger(400),
                    opacity : 1,
                    

                })
            }
            else{
            }
            });
        }, {rootMargin: "0px 0px 0px 0px"});


        targets.forEach(img => { observer.observe(img) });
    }
    else {
    }

};