import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from './content/content.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContentComponent, LeftNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess-turtle';
  isNavOpen = false;

  // Toggle the left navigation state
  toggleNav(isOpen: boolean) {
    this.isNavOpen = isOpen; // Update the state to open or close the sidebar
  }
}
