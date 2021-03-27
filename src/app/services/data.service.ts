import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, Skill } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get<Project[]>('/assets/data/projects.json');
  }

  getSkills(){
    return this.http.get<Skill[]>('/assets/data/skills.json');
  }
}
