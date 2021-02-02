import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [HomeComponent, ProjectComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
