import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'Bienvenido a GameFinder';
  description = '¡Explora el mundo de los videojuegos y encuentra tus favoritos!';
}
