import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-index',
  templateUrl: './header-index.component.html',
  styleUrls: ['./header-index.component.css']
})
export class HeaderIndexComponent implements OnInit {
  muted=true;
  video="http://www.mariachigemanegra.com/source/video/video-largo-gema-negra-mariachi-guadalajara.mp4"
  constructor() { }

  bajar(){
    window.scrollTo(999,document.body.scrollHeight);
  }

  ngOnInit() {
  }

  clickMuted(){
    this.muted=!this.muted;
  }

}
