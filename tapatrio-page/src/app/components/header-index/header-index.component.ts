import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-index',
  templateUrl: './header-index.component.html',
  styleUrls: ['./header-index.component.css']
})
export class HeaderIndexComponent implements OnInit {

  constructor() { }

  bajar(){
    window.scrollTo(999,document.body.scrollHeight);
  }

  ngOnInit() {
  }

}
