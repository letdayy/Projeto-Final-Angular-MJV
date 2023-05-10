import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from '../features/home/pages/home/home.component';
import { LoginComponent } from '../features/login/pages/login/login.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeComponent,
    LoginComponent
  ],
})
export class SharedModule { }
