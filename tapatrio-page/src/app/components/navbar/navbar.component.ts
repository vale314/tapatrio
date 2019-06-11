import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() router: boolean;

  constructor(private routes:Router) { }

  ngOnInit() {
  }

  inicio(){
    if(this.router)
      this.routes.navigate(['/'])
    else
      document.getElementById('inicio').scrollIntoView();
  }
  fotos(){
    if(this.router)
      this.routes.navigate(['/'])
    else
      document.getElementById('fotos').scrollIntoView();
  }
  promociones(){
    if(this.router)
      this.routes.navigate(['/'])
    else
      document.getElementById('precio').scrollIntoView();
  }
  precios(){
    if(this.router)
      this.routes.navigate(['/'])
    else
      document.getElementById('precios').scrollIntoView();
  }
  llamanos(){
    if(this.router)
      this.routes.navigate(['/'])
    else
    document.getElementById('contactanos').scrollIntoView();
  }
}
