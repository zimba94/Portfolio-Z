import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProjectsPosterGridComponent } from './projects-poster-grid/projects-poster-grid.component';
import { ProjectSlideshowComponent } from './project-slideshow/project-slideshow.component';
import { SkillsSlideshowComponent } from './skills-slideshow/skills-slideshow.component';
import { SkillsPosterGridComponent } from './skills-poster-grid/skills-poster-grid.component';
import { ExperiencePosterGridComponent } from './experience-poster-grid/experience-poster-grid.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    NavbarComponent, 
    ProjectsPosterGridComponent, 
    ProjectSlideshowComponent, 
    SkillsSlideshowComponent, 
    SkillsPosterGridComponent, 
    ExperiencePosterGridComponent, 
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    ProjectsPosterGridComponent,
    ProjectSlideshowComponent,
    SkillsSlideshowComponent,
    SkillsPosterGridComponent,
    ExperiencePosterGridComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
