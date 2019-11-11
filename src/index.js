import './styles.scss';
import 'bootstrap-4-grid'
//change eVa before production
import app from './scripts/app';
import anime from 'animejs'
import jump from 'jump.js'


 anime({
     targets : 'header',
     translateY : -40,
     delay : 1000
 }) 
app()

const tl = anime.timeline({    
})
tl.add({
    targets: '.textpatch',
    strokeDashoffset: [anime.setDashoffset, 0], 
    duration : 1000
})
.add({
    targets : '.textpatch',
    fill : '#5c5b5f',
    easing: 'easeInOutBack',
    duration : 1000
},'-=300')
.add({
    targets : '.ht',
    opacity : 1,
},'-=1000')
const heroBtn = document.querySelector('.hero-button')
heroBtn.addEventListener('click', ()=>{
    jump('.info')
})
const infoBtn = document.querySelector(".info-button")
infoBtn.addEventListener('click',()=>{
    jump('.services')
})
const contactBtn = document.querySelector(".contact-button")
contactBtn.addEventListener('click',()=>{
    jump('.contact')
})