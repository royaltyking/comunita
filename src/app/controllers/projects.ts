import { Component } from '@angular/core';
import { ProjectsService } from '../models/projects.service';
import { Article } from './articles.types';

@Component({
  selector: 'projects',
  templateUrl: '../views/projects.html',
  styleUrls: ['../views/projects.scss']
})
export class ProjectsComponent {
  constructor(public project_mapper: ProjectsService) {
    //this.initializeApp();
  }

  d = [];

  ngOnInit() {
    this.project_mapper.findArticles().subscribe(
      data => {
        this.d = data;
      }
    );
  }
  
}
