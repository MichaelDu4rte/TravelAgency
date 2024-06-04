import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBriefcase, faCaretDown, faHouseChimney, faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuToggle: Boolean = false;
  isDropdownOpen = false;

   // Array para representar os dropdowns
  openDropdownIndex: number | null = null;

  faMenuCloseIcon = faXmark;
  faArrowDownIcon = faCaretDown;
  faMenuIcon = faBars;
  faHouseIcon = faHouseChimney;
  faWorkIcon = faBriefcase;

  toggleMenu() {
    this.isMenuToggle = !this.isMenuToggle;
  }

  onToggleDropdown(index: number) {
    if (this.openDropdownIndex === index) {
      this.openDropdownIndex = null; 
    } else {
      this.openDropdownIndex = index;
    }
  }
}
