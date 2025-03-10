import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApiSearchComponent } from './api-search/api-search.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule para usar servicios HTTP

@NgModule({
  declarations: [
    AppComponent // Solo declarar el AppComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añadir FormsModule aquí
    HttpClientModule // Añadir HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
