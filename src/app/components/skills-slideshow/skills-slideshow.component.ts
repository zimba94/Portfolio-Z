import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import Swiper from 'swiper';
import { Skill } from '../../interfaces/interfaces';

@Component({
  selector: 'app-skills-slideshow',
  templateUrl: './skills-slideshow.component.html',
  styleUrls: ['./skills-slideshow.component.css']
})
export class SkillsSlideshowComponent implements OnInit, AfterViewInit {
  
  @Input() skills: Skill[];
  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-skills', {
      slidesPerView: 3.4,
      freeMode: true,
      spaceBetween: 15,
    });
  }

}
