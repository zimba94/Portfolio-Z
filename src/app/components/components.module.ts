import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProjectsPosterGridComponent } from './projects-poster-grid/projects-poster-grid.component';
import { ProjectSlideshowComponent } from './project-slideshow/project-slideshow.component';
import { SkillsSlideshowComponent } from './skills-slideshow/skills-slideshow.component';
import { SkillsPosterGridComponent } from './skills-poster-grid/skills-poster-grid.component';
import { ExperiencePosterGridComponent } from './experience-poster-grid/experience-poster-grid.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectSlideshow2Component } from './project-slideshow2/project-slideshow2.component';


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
    FooterComponent,
    ProjectSlideshow2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    ProjectsPosterGridComponent,
    ProjectSlideshowComponent,
    ProjectSlideshow2Component,
    SkillsSlideshowComponent,
    SkillsPosterGridComponent,
    ExperiencePosterGridComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
