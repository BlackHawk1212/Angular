import { Component } from '@angular/core';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public url:string = "https://www.google.lk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"   // Google Logo png URL

  // constructor(){
  //   setInterval(() => {
  //     this.title = this.title + "...Updated";
  //     // this.url = "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg";   // Sri Lanka Flag
  //   },5000)
  // }

  public title:string = 'MyApp';  // If we change the access modifier as Private we'll get an error
  public data:string = 'myData123';
  now = new Date(2022,11,21);

  public students: Student[] = [
      { id: 1, name: "student1", email: "stu1@collage.com" },
      { id: 2, name: "student2", email: "stu2@collage.com" },
      { id: 3, name: "student3", email: "stu3@collage.com" }
    ];

  constructor(){
    console.log("In Constructor");
  }

  handleValueChange(event:any){
    console.log(event.target.value);

    this.data = event.target.value;
  }

  doAddStudent(stu:Student){
    console.log(stu);
    this.students.push(stu);
  }

  doRemoveStudent(id:number){
    console.log(id);

    this.students = this.students.filter((x:Student) => {
      if(x.id == id) {
        return false;
      } else {
        return true;
      }
    });
  }
}
