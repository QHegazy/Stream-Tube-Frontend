import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Signal,
  ViewChild,
} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { SideBarElementComponent } from '../side-bar-element/side-bar-element.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule, MatIconModule, SideBarElementComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @Input({ required: true, alias: 'openSidebar' })
  openSidebar!: Signal<boolean>;
  @ViewChild('aside') aside!: ElementRef;

  list: Array<any> = [
    { icon: 'dashboard', name: 'Dashboard', link: '' },
    { icon: 'video_library', name: 'Content', link: 'content' },
    { icon: 'insert_chart', name: 'Analytics', link: 'analytics' },
    { icon: 'comment', name: 'Comments', link: 'comments' },
    { icon: 'subtitles', name: 'subtitles', link: 'subtitles' },
    { icon: 'settings', name: 'Settings', link: 'settings' },
    { icon: 'logout', name: 'Logout', link: 'logout' },
    { icon: 'help', name: 'Help', link: 'help' },
    { icon: 'feedback', name: 'Feedback', link: 'feedback' },
  ];

  constructor() {}
  ngAfterViewInit(): void {
    // console.log(this.openSidebar);
  }
  ngOnInit(): void {
    // if (this.openSidebar) {
    //   this.aside.nativeElement.classList.add('open');
    // }
  }
}
