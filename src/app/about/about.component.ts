import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'About Game Finder';
  description = 'Game Finder is a web application that allows users to search for video games and explore various game details using the RAWG API. Our goal is to provide an easy and enjoyable experience for gamers to discover new games and find information about their favorites.';
}
