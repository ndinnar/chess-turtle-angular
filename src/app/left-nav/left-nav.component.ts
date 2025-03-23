import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  isOpen = false;

  @Output() toggle = new EventEmitter<boolean>();  // Emit boolean

  toggleNav() {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen); // Emit boolean value
  }
}
