import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './Components/Nosotros/nosotros.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { ContactoComponent } from './Components/contacto/contacto.component'; 
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    FooterComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
