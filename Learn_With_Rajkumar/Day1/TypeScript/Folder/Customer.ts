export interface Customer {

    id:number;
    name:string;
    email:string;
    customerType:CustomerType;

}

export interface CustomerType {

    id:number;
    description:string;

}