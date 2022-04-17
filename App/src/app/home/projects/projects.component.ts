import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/project';

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://raw.githubusercontent.com/tmollov/tmollov.github.io/main/site_data.json").subscribe((r: any) => {
      this.projects = r.projects;
      console.log(this.projects);
    })
  }

}
