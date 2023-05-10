import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    CourseListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
