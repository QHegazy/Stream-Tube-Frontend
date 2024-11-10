import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { SearchComponent } from '../search/search.component';
import { SigninComponent } from '../signin/signin.component';
import { UserNavComponent } from "../user-nav/user-nav.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleComponent, SearchComponent, SigninComponent, UserNavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
