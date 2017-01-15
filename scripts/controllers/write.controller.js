import routie from '../libs/routie.js';
import {PostService} from '../services/post.service.js';
import {WriteComponent} from '../components/write.component.js';

let $page = document.getElementById('page');

routie('napisz', controller);

export function controller() {
    WriteComponent.render({posts:[]}, $page)
}
