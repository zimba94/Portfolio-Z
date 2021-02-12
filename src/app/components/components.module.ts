import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProjectsPosterGridComponent } from './projects-poster-grid/projects-poster-grid.component';
import { ProjectSlideshowComponent } from './project-slideshow/project-slideshow.component';
import { SkillsSlideshowComponent } from './skills-slideshow/skills-slideshow.component';
import { SkillsPosterGridComponent } from './skills-poster-grid/skills-poster-grid.component';
import { ExperiencePosterGridComponent } from './experience-poster-grid/experience-poster-grid.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    NavbarComponent, 
    ProjectsPosterGridComponent, 
    ProjectSlideshowComponent, 
    SkillsSlideshowComponent, 
    SkillsPosterGridComponent, 
    ExperiencePosterGridComponent, 
    ContactComponent, ExperienceModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    ProjectsPosterGridComponent,
    ProjectSlideshowComponent,
    SkillsSlideshowComponent,
    SkillsPosterGridComponent,
    ExperiencePosterGridComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
