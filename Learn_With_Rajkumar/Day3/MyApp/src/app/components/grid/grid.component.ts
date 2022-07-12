import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { CalcService } from 'src/app/service/calc.service';

@Component({
  selector: 'app-vgrid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnDestroy {

  // Duck Typing
  // public students: Student[] = [
  //   { id: 1, name: "student1", email: "stu1@collage.com" },
  //   { id: 2, name: "student2", email: "stu2@collage.com" },
  //   { id: 3, name: "student3", email: "stu3@collage.com" }
  // ]

  @Input()
  public stds: Student[] = [];

  @Input()
  public ts!:Date;

  @Output()
  public addStudent:EventEmitter<Student> = new EventEmitter();

  @Output()
  public removeStudent:EventEmitter<number> = new EventEmitter();

  public result:number = 0;

  // public calcService:CalcService = new CalcService();

  constructor(private calcService:CalcService) {
    console.log("Component is Booting Up...");
    this.result = this.calcService.add(4,5);
  }

  ngOnDestroy(): void {
    console.log("Out of Scope and Destroy");
  }

  ngOnInit(): void {
    console.log("Component is Firing Up...");
    this.ts = new Date();
  }

  doAddNewStudent(){
    let stu:Student = {
      id:12,
      name:"abcd" + Math.random().toString(),
      email:"abcd@" + Math.random().toString() + ".com",
    }
    this.addStudent.emit(stu);
    this.result = this.calcService.add(5,5);
  }

  doHandleDelete(id:number) {
    this.removeStudent.emit(id);
  }
}
