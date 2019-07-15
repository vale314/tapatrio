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
    "https://www.youtube.com/embed/aUWF6BIM4Q4",
    "https://www.youtube.com/embed/yVTUhsPicis",
    "https://www.youtube.com/embed/bX8KqsURGuM",
    "https://www.youtube.com/embed/8t82SjkXxRI",
    "https://www.youtube.com/embed/1HZeIL8GZ5U",
    "https://www.youtube.com/embed/nUp9YKrWUoo"
  ]

  constructor() { }
  
  ngOnInit() {
  }

}
