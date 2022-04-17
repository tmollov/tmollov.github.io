import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/models/project';

@Component({
  selector: 'project-thumbnail',
  templateUrl: './projectthumbnail.component.html',
  styleUrls: ['./projectthumbnail.component.css']
})
export class ProjectThumbnailComponent implements OnInit {

  @Input() data: Project = new Project;

  constructor() { }

  ngOnInit(): void {
  }

}
