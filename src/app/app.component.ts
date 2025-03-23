import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContentComponent, LeftNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chess-turtle';
  isNavOpen = false;

  // Expect a boolean from the event
  toggleNav(isOpen: boolean) {
    this.isNavOpen = isOpen;  // Update the state with the boolean
  }
}