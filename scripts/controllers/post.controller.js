import routie from '../libs/routie.js';
import {PostService} from '../services/post.service.js';
import {PostComponent} from '../components/post.component.js';

let $page = document.getElementById('page');

routie('post/*', controller);

export function controller(postId) {
    PostService.get(postId).then(post=>{
        return PostService.getComments(post.id).then(comments=>{
            post.comments = comments;
            return post
        })
    }).then(post=>{
        PostComponent.render({post: post}, $page)
    });
}
