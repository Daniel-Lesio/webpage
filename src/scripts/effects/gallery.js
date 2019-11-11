import anime from 'animejs'
const gallery = () => {
    const galleryOverlays = document.querySelectorAll('.gallery-overlay')
   const imgs = document.querySelectorAll('.gallery-img')
   const modal = document.querySelector('.modal')
   imgs.forEach(img=>{
       img.addEventListener('click',()=>{
        const src = img.getAttribute('src')   
        openModal(src)
       })
   })

   const openModal = (src)=>{
        anime({
            targets : modal,
            translateX : '100vw',
            easing : 'linear',
            duration : 300
        })
        modal.innerHTML = `  <img class='gallery-img shadow' src="${src}" alt="">`
    }
    modal.addEventListener('click',()=>{
        anime({
            targets : modal,
            translateX : '-100vw',
            easing : 'linear',
            duration : 300
        })
   })
}
 
export default gallery;