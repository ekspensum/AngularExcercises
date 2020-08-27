export class One {
    private one: string;

    constructor(one: string){
        this.one = one;
    }

    /**
     * getOne
     */
    public getOne() {
       console.log(this.one); 
    }
}

export class Two {
    private two: number;

    constructor(two: number){
        this.two = two;
        console.log(this.two);
    }
}

export const PI: number = 3.14;