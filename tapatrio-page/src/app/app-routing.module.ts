import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { FotosPageComponent } from './pages/fotos-page/fotos-page.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'fotos',
    component:FotosPageComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
