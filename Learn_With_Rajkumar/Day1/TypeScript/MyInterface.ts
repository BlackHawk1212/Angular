interface MyContract{

    name:string;

    doSomething(age:number) : Date;

}

let mCon:MyContract = {

    name:"Super Star",
    doSomething(a:number) : Date {
        return new Date()
    }

}

class MyContractImplimentation implements MyContract{

    name: string;

    doSomething(age:number) : Date{
        throw new Error("Method not Implemented");
        
    }

}