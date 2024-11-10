import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [MatIconModule],
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
