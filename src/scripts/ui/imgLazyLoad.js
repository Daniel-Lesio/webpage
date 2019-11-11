export default function imgLazyLoad (){
    let targets = document.querySelectorAll('.img');
    
    if(!!window.IntersectionObserver){
        let observer = new IntersectionObserver((entries, observer) => { 
            entries.forEach(entry => {
            if(entry.isIntersecting){
            
                entry.target.src = entry.target.getAttribute('data-lazy');
                entry.target.classList.remove('blured')
                observer.unobserve(entry.target);

             }
            });
        }, {rootMargin: "0px 0px -200px 0px"});
        targets.forEach(img => { observer.observe(img) });
    }
    else {
                entry.target.src = entry.target.getAttribute('data-lazy');
                entry.target.classList.remove('blured')
                observer.unobserve(entry.target);
    }

};