const { RESTDataSource } = require('apollo-datasource-rest');

class RandomUserAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://randomuser.me/api/';
    }

    async getUser(gender) {
        const newUser = await this.get(`?gender=${gender}`)
        const {
             name,
             dob,
             picture
        } = newUser.results[0];
        return {
            name: `${name.first} ${name.last}`,
            age: `${dob.age}`,
            photo: `${picture.large}`
        }
    }
  }

  module.exports = RandomUserAPI;