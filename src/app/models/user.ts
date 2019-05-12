export class User{
    id: string;
    firstName: string;
    lastName: string;
    zipCode: string;
    email: string;
    likedAnimals: string[];

    constructor(firstName?, lastName?, zipCode?, email?){
        this.firstName = firstName;
        this.lastName = lastName;
        this.zipCode = zipCode;
        this.email = email;
        this.likedAnimals = [];
    }
}