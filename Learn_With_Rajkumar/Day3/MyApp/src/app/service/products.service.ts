import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Products from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = "http://localhost:3000/";

  products: Products[] = [
    {
      "id": 1,
      "name": "Product001",
      "cost": 100,
      "quantity": 10000,
      "locationId": 1,
      "familyId": 1
    },
    {
      "id": 2,
      "name": "Product002",
      "cost": 200,
      "quantity": 20000,
      "locationId": 2,
      "familyId": 2
    },
    {
      "id": 3,
      "name": "Product003",
      "cost": 300,
      "quantity": 30000,
      "locationId": 3,
      "familyId": 3
    }
  ]

  constructor(private httpC:HttpClient) { }

  public getProducts():Products[]{
    return this.products;
  }

  public getProductsViaPromise():Promise<Products[] | undefined>{
    return Promise.resolve(this.products);
  }

  public getActualProducts() {
    return this.httpC.get<Products[]>(`${this.url}products`).toPromise();
  }

  public addProducts(products:Products){
    console.log("put statement");
    console.log(products);
    this.httpC.put(`${this.url}products`,products).subscribe(x=>{
    });
  }
}
