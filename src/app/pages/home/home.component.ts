import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Project, Skill } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public projects: Project[]=[];

  public skills: Skill[]=[];
  //public skillsSlideShow: Skill[]=[];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProjects()
                        .subscribe(projects=>{
                          this.projects=projects;
                        });
    this.dataService.getSkills()
                        .subscribe(skills=>{
                          this.skills=skills;
                          //this.skillsSlideShow=skills;
                        });
  }

  

}
