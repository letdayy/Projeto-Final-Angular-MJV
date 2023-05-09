import { Component, OnInit } from '@angular/core';
import { Course } from './models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Array<Course> = [
    {
      id: 1,
      description: 'Introdução à programação de computadores',
      price: 27.90
    },
    {
      id: 2,
      description: 'Introdução à programação de computadores',
      price: 27.90
    },
    {
      id: 3,
      description: 'Introdução à programação de computadores',
      price: 27.90
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('teste');
  }

}
