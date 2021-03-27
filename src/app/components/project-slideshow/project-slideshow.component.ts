import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
// import  Swiper  from 'swiper';
import { Project } from '../../interfaces/interfaces';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-slideshow',
  templateUrl: './project-slideshow.component.html',
  styleUrls: ['./project-slideshow.component.css']
})
export class ProjectSlideshowComponent implements OnInit{

  @Input() project: Project
  projectImages: String[];
  // mySwiper: Swiper;
  // galleryThumbs: Swiper;
  // galleryTop: Swiper;

  constructor(private config: NgbCarouselConfig) {
    config.interval = 3500;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
    this.projectImages = this.project.images_paths;
  }

  // ngAfterViewInit(): void {
  //   // this.mySwiper = new Swiper('.swiper-project', {
  //   //   // Optional parameters
  //   //   loop: true,
  //   // });

  //   this.galleryThumbs = new Swiper('.gallery-thumbs', {
  //     spaceBetween: 10,
  //     slidesPerView: 3,
  //     freeMode: true,
  //     loopedSlides: 5, //looped slides should be the same
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true,
  //   });
  //   this.galleryTop = new Swiper('.gallery-top', {
  //     spaceBetween: 10,
  //     loop: true,
  //     loopedSlides: 5, //looped slides should be the same
  //     thumbs: {
  //       swiper: this.galleryThumbs,
  //     },
  //   });

  // }

  // onSlidePrev(){
  //   this.galleryTop.slidePrev();
  // }

  // onSlideNext(){
  //   this.galleryTop.slideNext();
  // }

  // onSlide(i){
  //   this.galleryTop.slideTo(i);
  // }


}
