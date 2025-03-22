import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  isOpen = false;

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
}