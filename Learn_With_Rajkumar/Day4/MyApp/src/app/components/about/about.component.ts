import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DatacomService } from 'src/app/service/datacom.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private dataCom:DatacomService,private router:Router) { }

  ngOnInit(): void {
    this.dataCom.listenToMessage().subscribe(x=>{
      if(x){
        if(x.event==="LOGOUT"){
          console.log("About is Getting Cleaned Up...");
          this.dataCom.clean();
          this.router.navigate(['/']);
        }
      }
    });
  }

}
