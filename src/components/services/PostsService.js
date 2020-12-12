export default class PostsService {
    url = 'https://jsonplaceholder.typicode.com'

    async getAllPostsFromApi() {
        return await fetch(this.url + '/posts').then(value => value.json())
    }

    async getChosenUsersPostFromAPI(id) {
        return await fetch(`${this.url}/posts?userId=${id}`).then(value => value.json())
    }
}