import { Component } from '@angular/core';
import { ProjectsService } from '../models/projects.service';
import { Article } from './articles.types';

@Component({
  selector: 'project-e',
  templateUrl: '../views/projectE.html',
  styleUrls: ['../views/projectE.scss']
})
export class ProjectEComponent {
  constructor(public project_mapper: ProjectsService) {
    //this.initializeApp();
  }

  d = [];

  ngOnInit() {
    // 
  }
  
}
