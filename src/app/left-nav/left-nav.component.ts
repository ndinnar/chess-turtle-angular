import { Component, Input } from '@angular/core';
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

  isSubmenuOpen: Record<string, boolean> = {};  // Store the state of each submenu

  // Toggle the submenu visibility
  toggleSubmenu(menu: string) {
    this.isSubmenuOpen[menu] = !this.isSubmenuOpen[menu];  // Toggle the selected submenu
  }

  toggleMenu(event: Event) {
    const target = event.target as HTMLElement; // Cast to HTMLElement
    const li = target.closest('li'); // Now TypeScript knows 'closest' is available on 'target'
    if (li && li.classList.contains('has-children')) {
      li.classList.toggle('active');
    }
  }
  
}
