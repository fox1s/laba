export default class UsersService {
    url = 'https://jsonplaceholder.typicode.com'

    async getAllUsersFromAPI() {
        return await fetch(`${this.url}/users`).then(value => value.json())
    }

    async getChosenUserFromAPI(id) {
        return await fetch(`${this.url}/users/${id}`).then(value => value.json())
    }

}