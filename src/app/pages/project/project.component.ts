import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs';
import { Project, Skill } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  
  project : Project;
  skillSet : Skill[]= [];


  constructor(private activatedRoute : ActivatedRoute, private dataService: DataService, private location: Location, private router : Router) { }

  ngOnInit(): void {

    
    const {name} = this.activatedRoute.snapshot.params;
    
    
    combineLatest([
      this.dataService.getProjects(),
      this.dataService.getSkills()

    ]).subscribe( ([projects, skills])=> {
      if (!projects) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.project = projects.filter(project => project.name.toString() === name)[0];

      this.project.skills.forEach(skillId => {
        this.skillSet.push(skills.filter(skill => skill.image_path != null && skill.id === skillId)[0]);
      });
    });
    
  }

  onRegresar(){

    this.router.navigate(['/'], { fragment: 'portfolio' });

  }

}