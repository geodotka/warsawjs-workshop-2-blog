// jeśli nie dajemy keyword export, zmienna jest widoczna tylko w obrębie pliku
let posts = [
    {id: 2, title: 'drugi post', text: 'tresc posta drugiego'},
    {id: 1, title: 'pierwszy post', text: 'tresc posta'}
];

export class PostService {

    static list() {
        return $.get('posts')
    }

    static create(data) {
        $.post('posts', data)
    }

    static get(id) {
        return new Promise((resolve, reject) => {
            for(let post of posts) {
                if(post.id === parseInt(id)) {
                    return resolve(post);
                }
            }
            reject('not found');
        })
    }
}
