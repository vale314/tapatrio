import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inicio(){
    document.getElementById('inicio').scrollIntoView();
  }
  fotos(){
    document.getElementById('fotos').scrollIntoView();
  }
  promociones(){
    document.getElementById('precio').scrollIntoView();
  }
  precios(){
    document.getElementById('precios').scrollIntoView();
  }
  llamanos(){
    document.getElementById('contactanos').scrollIntoView();
  }
}
