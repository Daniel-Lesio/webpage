import anime from 'animejs'
export default function io (){
    let targets = document.querySelectorAll('.counting');
    let myObj = {
        range : 0
    }   
    if(!!window.IntersectionObserver){
        let observer = new IntersectionObserver((entries, observer) => { 
            entries.forEach(entry => {
            if(entry.isIntersecting){
                 anime({round: 1,
                    easing: 'linear',
                    targets : myObj,
                    range : entry.target.getAttribute("value") ,
                    update : ()=>{
                        entry.target.innerHTML = myObj.range
                    }
                })
             }
             else{
                anime({round: 1,
                    easing: 'linear',
                    targets : myObj,
                    range : 0 ,
                    update : ()=>{
                        entry.target.innerHTML = myObj.range
                    }
                })
             }
            });
        }, {rootMargin: "0px 0px 0px 0px"});
        targets.forEach(img => { observer.observe(img) });
    }
    else {
     targets.forEach(target=>{
        target.innerHTML = target.getAttribute('value')
     })
    }

};