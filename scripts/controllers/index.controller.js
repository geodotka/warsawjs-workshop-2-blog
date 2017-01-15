import routie from '../libs/routie.js';
import {PostService} from '../services/post.service.js';
import {PostListComponent} from '../components/post-list.component.js';

let $page = document.getElementById('page');

routie('', controller);


export function controller() {
    PostService.list().then(
        posts=>{
            PostListComponent.render({posts:posts}, $page)
        }
//        err=>console.log(err) to ma sens jeśli zdefiniujemy reject w funkcji list
    )
}


/// promise explanation

//let UserService = {login: function(){}};
//export function controller() {
//    let promise = UserService.login()
//
//      .then(user=>{
//        return PostService.list(user)
//      }, err=>{
////         return UserService.loginAlternative()
//        return Promise.reject('nie da rady');
//      })
//
//     .then(posts=>{
//        posts.push({nowy:'record'})
//        return UserService.update(posts);
//     })
//    .then(postsSavedMessage=>{
//        PostListComponent.render({posts:posts}, $page)
//     })
//}
