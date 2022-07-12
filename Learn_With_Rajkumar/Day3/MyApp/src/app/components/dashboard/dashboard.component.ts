import { Component, OnInit } from '@angular/core';
import Products from 'src/app/models/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  value: string = "bank 1123 1123 1123 1123";
  constructor(private prodServices: ProductsService) { }

  products!: Products[];

  date!: Date;

  name: string = "Nimesh Mendis";

  // Recommended Method
  doPromise() {
    this.prodServices.getActualProducts().then((productsResponse: any) => {
      this.products = productsResponse;
    }).catch(error => {
      console.log("Error has Occured");
      console.log(error);
    }).finally(()=>{
      console.log("Happily");
    })
  }

  async doPromiseV2(){
    let response:any = await this.prodServices.getActualProducts();
    this.products = response as Products[];
  }

  addProducts(){
    let products:Products = {
      "id": Math.random(),
      "name": "NewProduct",
      "cost": 3000,
      "quantity": 34000,
      "locationId": 10,
      "familyId": 10
    };

    this.prodServices.addProducts(products);
  }

  ngOnInit(): void {
    this.date = new Date(2022, 11, 21);
    //   console.log(this.prodServices.getProducts);
    //   this.prodServices.getProductsViaPromise().then((x) => {
    //     console.log("Response from Promise...");
    //     console.log(x);
    //   })
  }

}
