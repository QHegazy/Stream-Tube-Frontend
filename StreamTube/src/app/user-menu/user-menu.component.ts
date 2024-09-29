import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowRightToBracket,
  faServer,
  faImages,
  faFilm,
  faGlobe,
  faLanguage,
  faGear,
  faArrowLeft,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  faArrowRightToBracket = faArrowRightToBracket;
  faServer = faServer;
  faLanguage = faLanguage;
  faGear = faGear;
  faArrowLeft = faArrowLeft;
  faGlobe = faGlobe;
  faCheck = faCheck;
  faImages = faImages;
  faFilm = faFilm;
  @ViewChild('langMenus') langMenu!: any;

  userMenuOpen = true;
  openLanguagesMenu = false;
  toggGlobalMenu = false;
  title = 'moahmed asad';
  chanelTitle = '@moahmedasad8250';
  languages = [
    'English',
    'Spanish',
    'Mandarin',
    'Hindi',
    'French',
    'Arabic',
    'Bengali',
    'Russian',
    'Portuguese',
    'Indonesian',
    'Urdu',
    'German',
    'Japanese',
    'Swahili',
    'Marathi',
    'Telugu',
    'Turkish',
    'Tamil',
    'Vietnamese',
    'Korean',
    'Italian',
    'Polish',
    'Ukrainian',
    'Romanian',
    'Dutch',
    'Greek',
    'Hungarian',
    'Czech',
    'Swedish',
    'Finnish',
    'Norwegian',
    'Danish',
    'Hebrew',
    'Persian',
    'Thai',
    'Malay',
    'Filipino',
    'Burmese',
    'Khmer',
    'Lao',
    'Slovak',
    'Croatian',
    'Serbian',
    'Bulgarian',
    'Lithuanian',
    'Latvian',
    'Estonian',
    'Malagasy',
    'Swati',
    'Siswati',
  ];
  toggleLanguagesMenu() {
    this.openLanguagesMenu = !this.openLanguagesMenu;
    console.log(this.langMenu.nativeElement.click());
  }
  leftchangelang() {
    let element: HTMLElement = this.langMenu.nativeElement;
    element.classList.add('close-lang-menu');
  }
  toggleLangMenu() {
    let element: HTMLElement = this.langMenu.nativeElement;
    element.classList.remove('close-lang-menu');
  }
}
