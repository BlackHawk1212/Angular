App.component.html

<div>
  <h3>Welcome to Angular!</h3>
  <h4>Value of Title is {{title}}</h4>
  <!--<p>The Image is...</p>-->

  <!-- HTML Convention
  <div>
    <img src={{url}}/>
  </div>

  Angular Convention
  <div>
    <img [src]="url"/>
  </div> -->

  <input type="text" [value]="data" (keyup)="handleValueChange($event)" />
  <hr />
  <!--ngModel - Both binding data and added to the keyup-->
  <input type="text" [(ngModel)]="data" />
  {{data}}

  <hr />
  <app-vgrid 
    [stds]="students" 
    [ts]="now" 
    (addStudent)="doAddStudent($event)"
    (removeStudent)="doRemoveStudent($event)"
    ></app-vgrid>

</div>