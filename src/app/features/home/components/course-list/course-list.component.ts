import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Array<Course> = [
    {
      id: 1,
      image: 'https://t42748.vteximg.com.br/arquivos/ids/156666-1920-1280/programacao-de-computadores.jpg?v=637581756026170000',
      description: 'Introdução à programação de computadores',
      price: 27.90
    },
    {
      id: 2,
      image: 'https://img-c.udemycdn.com/course/750x422/1927044_a831.jpg',
      description: 'Curso de Python 3 do Básico Ao Avançado',
      price: 39.90
    },
    {
      id: 3,
      image: 'https://sujeitoprogramador.com/wp-content/uploads/2019/01/sc.png',
      description: 'React Native na Prática',
      price: 39.90
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('teste');
  }

}
