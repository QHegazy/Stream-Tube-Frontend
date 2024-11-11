import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component"; 
@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [MatIconModule, ThemeToggleComponent],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss',
})
export class UserNavComponent {
  isDataVisible = false; // Initially set to false, so the data is hidden

  // Toggle the visibility of the data section
  toggleData() {
    this.isDataVisible = !this.isDataVisible;
  }
}
