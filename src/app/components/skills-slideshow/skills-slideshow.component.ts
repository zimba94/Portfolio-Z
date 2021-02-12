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
    console.log(this.skills);
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-skills', {
      slidesPerView: 3.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }

}
