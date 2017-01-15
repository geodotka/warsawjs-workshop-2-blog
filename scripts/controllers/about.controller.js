import routie from '../libs/routie.js';
import {PostService} from '../services/post.service.js';
import {AboutComponent} from '../components/about.component.js';

let $page = document.getElementById('page');

routie('o-mnie', controller);

export function controller() {
    AboutComponent.render({posts:[]}, $page)
}
