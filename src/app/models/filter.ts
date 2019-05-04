
export class Filter{
    id: string;
    userId: string;
    minAge: number;
    maxAge: number;
    breed: string;
    species: string;
    sex: string;
    color: string[];

    constructor(userId, minAge, maxAge, breed, species, sex, color){
        this.userId = userId;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.breed = breed;
        this.species = species;
        this.sex = sex;
        this.color = color;
    }
}

