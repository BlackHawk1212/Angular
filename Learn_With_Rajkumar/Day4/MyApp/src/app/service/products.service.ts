import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Products from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = "http://localhost:3000/";

  products: Products[] = [
    { "id": 1, "name": "Product0011", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 2, "name": "Product0012", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 3, "name": "Product0013", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 4, "name": "Product0014", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 5, "name": "Product0015", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 6, "name": "Product0016", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 7, "name": "Product0017", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 8, "name": "Product0018", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 9, "name": "Product0019", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 },
    { "id": 10, "name": "Product00100", "cost": 100, "quantity": 10000, "locationId": 1, "familyId": 1 }
  ]

  constructor(private httpC: HttpClient) { }

  public getProducts(): Products[] {
    return this.products;
  }

  public getProductsViaPromise(): Promise<Products[] | undefined> {
    return Promise.resolve(this.products);
  }

  public getActualProducts() {
    return this.httpC.get<Products[]>(`${this.url}products`).toPromise();
  }

  public getProductsStream(): Observable<Products[]> {
    return this.httpC.get<Products[]>(`${this.url}products`);
  }

  public addProducts(products: Products) {
    console.log("put statement");
    console.log(products);
    this.httpC.put(`${this.url}products`, products).subscribe(x => {
    });
  }

  // public fetchProducts(): Observable<Products> {
  //   return of(...this.products);
  // }
}
