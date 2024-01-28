export type User = {
  login: string;
  password: string;
  name: string;
}

export enum Users {
  EventManager = 'event-manager',
  Test = 'test',
}

const users: Record<Users, User> = {
  [Users.EventManager]: {
    login: 'user',
    password: 'password',
    name: 'Event Manager',
  },
  [Users.Test]: {
    login: 'test-1',
    password: 'test-pwd',
    name: 'John Doe',
  },
};

export const getUser = (user: Users): User => users[user];
