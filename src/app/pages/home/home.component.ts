import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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


  constructor(private dataService: DataService, private router: Router) { }

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
    
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }else{
          if(evt.url === "/#portfolio"){
            console.log("scroll a portfolio");
            window.scrollTo(420, 420)
          }
        }
        
    });
  }


      // {
    //     "id": 4,
    //     "image_path":"./assets/img/projects/dextro/dextro.webp", 
    //     "name":"Grupo Dextro", 
    //     "description":"Creation and deployment of an executive presentation page for Grupo Dextro in order to strengthen its presence on the internet.",
    //     "skills": [14,1,2,16,7],
    //     "images_paths": ["./assets/img/projects/dextro/dextro1.webp","./assets/img/projects/dextro/dextro2.webp","./assets/img/projects/dextro/dextro3.webp"],
    //     "link": "https://www.dextro.com.mx/",
    //     "redirecto":"http://portfolio/dextro"
    // }
  

}
