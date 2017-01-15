// jeśli nie dajemy keyword export, zmienna jest widoczna tylko w obrębie pliku
//let posts = [
//    {id: 2, title: 'drugi post', text: 'tresc posta drugiego'},
//    {id: 1, title: 'pierwszy post', text: 'tresc posta'}
//];

export class PostService {

    static list() {
        return $.get('posts?_sort=id&_order=DESC')
    }

    static create(data) {
        $.post('posts', data)
    }

    static get(id) {
        return $.get('posts/' + id)
    }

    static getComments(id) {
        return $.get('comments?postId=' + id)
    }

    static addComment(data) {
        return $.post('comments', data)
    }

    static deletePost(id) {
        // delete post and related comments
        $.ajax({
            'url': 'posts/' + id,
            'type': 'DELETE'
        });
    }
}
