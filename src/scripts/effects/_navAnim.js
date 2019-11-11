import anime from 'animejs'

const navAnim = ( open ) => {
    console.log(open)
    // anime({
    //     targets : '.sidenav',
    //     translateX:  open ? 250 : 0,
    //     duration : 500
    // })
    // anime({
    //     targets :'.sidenav .link',
    //     translateX : open ? 250 : 0,
    //     delay: anime.stagger(100, {start: open ? 0 : 500}),
    //     easing :  'easeInQuad',
    //     duration : 250
    // })
}
export default navAnim;