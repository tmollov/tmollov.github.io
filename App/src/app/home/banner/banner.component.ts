import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  instagramLink:string = "https://www.instagram.com/tmollov/"
  facebookLink:string = "https://www.facebook.com/tuncay.molla97/"
  githubLink:string = "https://www.github.com/tmollov"

  constructor() { }

  ngOnInit(): void {
  }

}
