import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-left-nav',
  imports: [RouterLink, NgIf],
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  @Input() isOpen = false;

  @Output() linkClicked = new EventEmitter();

  isSubmenuOpen: Record<string, boolean> = {};  // Store the state of each submenu

  // Toggle the submenu visibility
  toggleSubmenu(menu: string) {
    this.isSubmenuOpen[menu] = !this.isSubmenuOpen[menu];  // Toggle the selected submenu
  }

  toggleMenu(event: Event) {
    const li = (event.target as HTMLElement).closest('li');
    if (li) {
      if (li.classList.contains('has-children')) {
        li.classList.toggle('active');
      }
    }
    
  }

  onRouterLinkClick() {
    // If on mobile, close the sidebar after clicking an item (unless it's a submenu)
    if (window.innerWidth <= 768) {
      this.linkClicked.emit();
    }
  }
  
}
