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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faMicrophone,
  faBolt,
  faFolderOpen,
  faSquareRss,
  faLayerGroup,
  faPaperclip,
  faUser,
  faInbox,
  faHistory,
  faSliders,
  faVideo,
  faClock,
  faThumbsUp,
  faArrowTrendUp,
  faFireFlameCurved,
  faMusic,
  faMeteor,
  faTowerBroadcast,
  faGamepad,
  faMedal,
  faGear,
  faCircleInfo,
  faFlag,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { SideBarElementComponent } from '../side-bar-element/side-bar-element.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule, FontAwesomeModule, SideBarElementComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, AfterViewInit {
  faHouse = faHouse;
  faMicrophone = faMicrophone;
  faBolt = faBolt;
  faFolderOpen = faFolderOpen;
  faSquareRss = faSquareRss;
  faLayerGroup = faLayerGroup;
  faPaperclip = faPaperclip;
  faPerson = faUser;
  faInbox = faInbox;
  faHistory = faHistory;
  faSliders = faSliders;
  faVideo = faVideo;
  faClock = faClock;
  faThumbsUp = faThumbsUp;
  faGear = faGear;

  faArrowTrendUp = faArrowTrendUp;
  faFireFlameCurved = faFireFlameCurved;
  faMusic = faMusic;
  faMeteor = faMeteor;
  faTowerBroadcast = faTowerBroadcast;
  faGamepad = faGamepad;
  faMedal = faMedal;
  faCircleInfo = faCircleInfo;
  faFlag = faFlag;
  faExclamation = faExclamation;

  @Input({ required: true, alias: 'openSidebar' })
  openSidebar!: Signal<boolean>;
  @ViewChild('aside') aside!: ElementRef;

  list: Array<any> = [
    { icon: faHouse, name: 'Home' },
    { icon: faBolt, name: 'Shorts' },
    { icon: faLayerGroup, name: 'Subse' },
    { icon: faUser, name: 'You' },
  ];
  list2 = [
    { icon: faInbox, name: 'Your channel' },
    { icon: faHistory, name: 'History' },
    { icon: faSliders, name: 'Playlists' },
    { icon: faVideo, name: 'Your videos' },
    { icon: faClock, name: 'Watch later' },
    { icon: faThumbsUp, name: 'Liked videos' },
  ];
  list3 = [
    { icon: faArrowTrendUp, name: 'Trending' },
    { icon: faMusic, name: 'Music' },
    { icon: faTowerBroadcast, name: 'Live' },
    { icon: faGamepad, name: 'Gaming' },
    { icon: faMedal, name: 'Sports' },
  ];
  list4 = [
    { icon: faGear, name: 'Settings' },
    { icon: faFlag, name: 'Report history' },
    { icon: faCircleInfo, name: 'Help' },
    { icon: faExclamation, name: 'Send feedback' },
  ];
  subscriptions = [
    {
      icon: 'https://yt3.ggpht.com/CpVnHmlKoVMQZlTbZc6QXW4ablSX27txilXZ7qHzRpzPfIUBdmwiGh0qQuW1RyPAHl3WENxa=s88-c-k-c0x00ffffff-no-rj',
      name: 'LOL Esports',
    },
    {
      icon: 'https://yt3.ggpht.com/ytc/AIdro_kLR9XLhlMK7KSn6IZpVb3mq7GlQWm_wXgyxZ5DGfvyxfA=s88-c-k-c0x00ffffff-no-rj',
      name: 'The Atheist Experience',
    },
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
