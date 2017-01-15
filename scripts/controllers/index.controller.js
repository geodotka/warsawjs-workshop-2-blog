import routie from '../libs/routie.js';
import {PostService} from '../services/post.service.js';

routie('', controller);

export function controller() {

    let template = document.querySelector('#template-post-list').innerHTML;

    document.getElementById('page').innerHTML = template;
}
