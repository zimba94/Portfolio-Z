import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import  Swiper  from 'swiper';
import { Project } from '../../interfaces/interfaces';

@Component({
  selector: 'app-project-slideshow',
  templateUrl: './project-slideshow.component.html',
  styleUrls: ['./project-slideshow.component.css']
})
export class ProjectSlideshowComponent implements OnInit, AfterViewInit {

  @Input() project: Project
  projectImages: String[] = ['./assets/img/projects/sota.png','./assets/img/projects/amasom.png', './assets/img/projects/gulaeats.png'];
  mySwiper: Swiper;

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.project);
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-project', {
      // Optional parameters
      loop: true,
    });

  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }


}
