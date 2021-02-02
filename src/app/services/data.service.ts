import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Project, Skill } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get<Project[]>('/assets/data/projects.json')
                .pipe(delay(200));
  }

  getSkills(){
    return this.http.get<Skill[]>('/assets/data/skills.json')
                .pipe(delay(200));
  }
}
