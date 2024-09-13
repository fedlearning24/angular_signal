import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  studentInfo = [
    {id:1,name:'Jon',email:'jon@gmail.con',address:'India'},
    {id:2,name:'Bob',email:'bob@gmail.con',address:'Japan'},
    {id:3,name:'Peter',email:'peter@gmail.con',address:'Germany'},
  ]

}
