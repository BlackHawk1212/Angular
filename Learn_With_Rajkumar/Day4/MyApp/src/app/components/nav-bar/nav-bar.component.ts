import { Component, OnInit } from '@angular/core';
import { DatacomService } from 'src/app/service/datacom.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private dataCom:DatacomService) { }

  ngOnInit(): void {
  }

  doLogout(){
    console.log("Logout Clicked...");
    this.dataCom.publishMessage(
      "LOGOUT",
      {name:"Nimesh Mendis"}
    );
  }

  doWakeUp(){
    this.dataCom.publishMessage(
      "WAKEUP",
      {music:"Gotup" + Math.random().toString()}
    );
  }
}
