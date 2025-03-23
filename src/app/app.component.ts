import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from './content/content.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, LeftNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess-turtle';
  isNavOpen = false;

  // Toggle the left navigation state
  onHamburgerClicked() {
    this.isNavOpen = !this.isNavOpen; // Update the state to open or close the sidebar
  }
}
