import jump from 'jump.js'
const scrollup = () => {
   let scrUp =document.querySelector(".scrollup");
   scrUp.addEventListener('click',()=>{
       jump('#hero')
   })


}
export default scrollup;