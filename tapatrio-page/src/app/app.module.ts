import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderIndexComponent } from './components/header-index/header-index.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GeneralesComponent } from './components/generales/generales.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { VideosComponent, SafePipe } from './components/videos/videos.component';
import { SectionBlackComponent } from './components/section-black/section-black.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { ShareComponent } from './components/share/share.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrecioComponent } from './components/precio/precio.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { FotosPageComponent } from './pages/fotos-page/fotos-page.component';
import { HeaderFotosComponent } from './components/header-fotos/header-fotos.component';
import { FotosFotosComponent } from './components/fotos-fotos/fotos-fotos.component';
import { PrecioTrioComponent } from './components/precio-trio/precio-trio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderIndexComponent,
    ConocenosComponent,
    IndexComponent,
    NavbarComponent,
    GeneralesComponent,
    CarruselComponent,
    VideosComponent,
    SectionBlackComponent,
    FotosComponent,
    ShareComponent,
    FooterComponent,
    PrecioComponent,
    PreciosComponent,
    ContactanosComponent,
    FotosPageComponent,
    HeaderFotosComponent,
    FotosFotosComponent,
    SafePipe,
    PrecioTrioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
