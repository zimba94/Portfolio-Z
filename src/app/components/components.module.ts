import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProjectsPosterGridComponent } from './projects-poster-grid/projects-poster-grid.component';
import { ProjectSlideshowComponent } from './project-slideshow/project-slideshow.component';
import { SkillsSlideshowComponent } from './skills-slideshow/skills-slideshow.component';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent, ProjectsPosterGridComponent, ProjectSlideshowComponent, SkillsSlideshowComponent],
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
    SkillsSlideshowComponent
  ]
})
export class ComponentsModule { }
