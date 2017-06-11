/**
 * Created by joana on 10/06/2017.
 */
import {Injectable} from '@angular/core';

import {User} from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Chris',
    username: 'chrisoncode',
    avatar: 'https://pbs.twimg.com/profile_images/850147482117865472/O28qQSrN.jpg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M.jpg'
  }
]);

@Injectable()
export class UserService {
  // get all users
  getUsers() {
    return usersPromise;
  }

  // get specific users
  getUser(username) {
    return usersPromise.then(users => users.find(user => user.username === username));
  }
}
