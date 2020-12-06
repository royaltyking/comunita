import { Component } from '@angular/core';
import { ProjectsService } from '../models/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project-e',
  templateUrl: '../views/projectE.html',
  styleUrls: ['../views/projectE.scss']
})
export class ProjectEComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private project_mapper: ProjectsService
  ) {}

  d = [];
  id = null;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
    //consultamos entonces, el articulo
    this.project_mapper.findById(this.id).subscribe(
      data => {
        this.d = data;
        console.log('projhect', this.d);
      }
    );
  }
  
}
