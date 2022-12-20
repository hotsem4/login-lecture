'use strict';

class UserStorage {
  static #users = {
    id: ['hotsem4', '나개발', '김팀장'],
    psword: ['qudrl975!!', '1234', '123456'],
    name: ['최범수', '김과장', '도도'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
