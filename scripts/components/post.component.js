import {Component} from './component.js';
import {PostService} from '../services/post.service.js'
import routie from '../libs/routie.js';


export class PostComponent extends Component {

    template() {
        return document.querySelector('#template-post').innerHTML;
    }

    init() {
        this.$form = this.$el.querySelector('form');
        this.$form.addEventListener('submit', this.onSubmit.bind(this));

        this.$el.querySelector('#delete-post').addEventListener(
            'click', this.destroy.bind(this))
    }

    onSubmit(e) {
        e.preventDefault();
        let results = {};
        let formData = new FormData(this.$form);
        formData.forEach((value, key) => {
            results[key] = value;
        });
        results.postId = this.data.post.id;
        PostService.addComment(results);
        window.location.reload();
//        PostService.addComments(results).then(comment=>{
//            this.data.comments.unshift(results.body)
//        });
    }

    destroy() {
        PostService.deletePost(this.data.post.id);
        routie('')
    }
}
