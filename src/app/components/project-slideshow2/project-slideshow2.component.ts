import { Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Project } from '../../interfaces/interfaces';


@Component({
  selector: 'app-project-slideshow2',
  templateUrl: './project-slideshow2.component.html',
  styleUrls: ['./project-slideshow2.component.css']
})
export class ProjectSlideshow2Component implements OnInit {

  @Input() project: Project
  projectImages: String[];
  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    this.projectImages = this.project.images_paths;
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-project', {
      slidesPerView: 1.1,
      freeMode: true,
      spaceBetween: 15,
      loop: true,
    });
  }


}
