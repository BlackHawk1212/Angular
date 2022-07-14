import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, of, Subscription } from 'rxjs';
import Products from 'src/app/models/products';
import { DatacomService } from 'src/app/service/datacom.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  value: string = "bank 1123 1123 1123 1123";

  constructor(private dataCom:DatacomService,private router:Router,private prodServices: ProductsService) { }

  ngOnInit(): void {
    this.dataCom.listenToMessage().subscribe(x=>{
      if(x){
        if(x.event==="LOGOUT"){
          console.log("About is Getting Cleaned Up...");
          this.dataCom.clean();
          this.router.navigate(['/']);
        } else if(x.event==="WAKEUP"){
          console.log(JSON.stringify(x));
        }
      }
    });
  }

  allObs: Subscription[] = [];

  products!: Products[];

  subs!: Subscription;

  date!: Date;

  name: string = "Nimesh Mendis";

  // Recommended Method
  doPromise() {
    this.prodServices.getActualProducts().then((productsResponse: any) => {
      this.products = productsResponse;
    }).catch(error => {
      console.log("Error has Occured");
      console.log(error);
    }).finally(() => {
      console.log("Happily");
    })
  }

  async doPromiseV2() {
    let response: any = await this.prodServices.getActualProducts();
    this.products = response as Products[];
  }

  addProducts() {
    let products: Products = {
      "id": Math.random(),
      "name": "NewProduct",
      "cost": 3000,
      "quantity": 34000,
      "locationId": 10,
      "familyId": 10
    };

    this.prodServices.addProducts(products);
  }

  // ngOnInit(): void {
  //   this.date = new Date(2022, 11, 21);
  //   console.log("Page Initialized...");
  //     console.log(this.prodServices.getProducts);
  //     this.prodServices.getProductsViaPromise().then((x) => {
  //       console.log("Response from Promise...");
  //       console.log(x);
  //     })
  // }

  fetchProdStream() {
    this.subs = this.prodServices.getProductsStream().pipe(
      map(data => {
        data.map(d => d.cost = d.cost + 123);
        return data;
      }),
      map(data => {
        data.map(d => d.name = `${d.name}-Sri Lanka`);
        return data;
      }),
      map(data => data.filter(p => p.cost > 135))
    ).subscribe(x => {
      this.products = x;
    }, error => {
      console.log("Error Occured");
      console.log(error);
    }, () => {
      console.log("Finally");
    });

    this.allObs.push(this.subs);
  }

  ngOnDestroy(): void {
    // if(this.subs){
    //   this.subs.unsubscribe();
    // }
    if (this.allObs) {
      this.allObs.map(x => {
        if (x) {
          x.unsubscribe();
        }
      });
    }
    console.log("Page Cleaned Up...");
  }

  processLargeArray() {
    // let a:string[] = ["qwe","123","Nimesh"];
    // let b:any[] = ["qwe","123",a];
    // let b:any[] = ["qwe","123",...a];

    // console.log(b)

    // ... means expanding the array
    of(...this.prodServices.products).subscribe(x => {
      console.log(x);
    })
  }
}