import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../interfaces/interfaces';

@Component({
  selector: 'app-projects-poster-grid',
  templateUrl: './projects-poster-grid.component.html',
  styleUrls: ['./projects-poster-grid.component.css']
})
export class ProjectsPosterGridComponent implements OnInit {

  @Input() projects: Project

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  // tslint:disable-next-line:typedef
  onProjectClick(project: Project){
    this.router.navigate(['/project', project.name ]);
  }
}
