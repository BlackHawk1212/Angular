abstract class Animal{

    public name:string = "";

    protected age:number = 0;

    constructor(_name:string){
        this.name = _name;
    }

    doCall = () => this.name;

}

class Tiger extends Animal{

    age:number = 0;

    constructor(_age:number,_name:string){
        super(_name);
        this.age = _age;
    }

    canKill():boolean{
        return true;
    }

}

let tiger:Tiger = new Tiger(45,"Bengal Tiger");
console.log(tiger.canKill());
console.log(tiger.doCall());