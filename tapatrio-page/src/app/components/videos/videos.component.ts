import { ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  
  videos=[
    "https://www.youtube.com/embed/hjlKUghyyLE",
    "https://www.youtube.com/embed/3ikmZA8RVro",
    "https://www.youtube.com/embed/mGgH0PW2N_Y",
    "https://www.youtube.com/embed/s8gkVjLXbjI",
    "https://www.youtube.com/embed/rYQmLvkS5TY",
    "https://www.youtube.com/embed/7jLVnJCi8_M"
  ]

  constructor() { }
  
  ngOnInit() {
  }

}
