import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-fotos-page',
  templateUrl: './fotos-page.component.html',
  styleUrls: ['./fotos-page.component.css']
})
export class FotosPageComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  ngAfterViewInit() { 
    window.scrollTo(0,0)
  }

}
