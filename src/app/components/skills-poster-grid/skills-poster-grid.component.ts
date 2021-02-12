import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../interfaces/interfaces';

@Component({
  selector: 'app-skills-poster-grid',
  templateUrl: './skills-poster-grid.component.html',
  styleUrls: ['./skills-poster-grid.component.css']
})
export class SkillsPosterGridComponent implements OnInit {

  @Input() skills: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
