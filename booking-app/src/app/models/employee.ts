import { User } from './user';

export class Employee {

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public pesel: string,
        public language: string,
        public user: User
    ) {}
}
