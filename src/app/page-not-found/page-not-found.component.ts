import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  message = '404 - Page Not Found';
  description = 'Sorry, the page you are looking for does not exist.';
}
