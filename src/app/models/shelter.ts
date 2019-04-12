export class Shelter{
    id: string;
    name: string;
    phone: string;
    bio: string;
    
    zipCode: string;
    email: string;
    address: string;

    constructor(name?,zipCode?, email?, address?,phone?,bio?){
        this.name = name;
        this.address=address;
        this.phone=phone;
        this.bio=bio;
        this.zipCode = zipCode;
        this.email = email;
    }
}