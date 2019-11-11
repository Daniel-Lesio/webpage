import nav from './ui/nav';
import psi from './psi';

//import playground from '../scripts/playground'
import imgLazyLoad from './ui/imgLazyLoad';
import scrollup from './scrollup';
import io from './ui/io';
import gallery from './effects/gallery';

const app = () => {
    psi();
    nav();
    imgLazyLoad();
    scrollup();
    io();
    gallery();
}

export default app;