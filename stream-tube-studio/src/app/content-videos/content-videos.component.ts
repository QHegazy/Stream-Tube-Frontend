import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  video: string;
  visibility: string;
  restrictions: string;
  views: string;
  comments: string;
  likes: string;
  date: string;
  lastUpdated: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    video: 'H',
    visibility: 'Hydrogen',
    restrictions: 'H',
    views: 'H',
    comments: 'as',
    likes: 'sd',
    date: 'sd',
    lastUpdated: 'sd',
  },
];
@Component({
  selector: 'app-content-videos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './content-videos.component.html',
  styleUrl: './content-videos.component.scss',
})
export class ContentVideosComponent {
  displayedColumns: string[] = [
    'video',
    'visibility',
    'restrictions',
    'views',
    'comments',
    'likes',
    'date',
    'lastUpdated',
  ];
  dataSource = ELEMENT_DATA;
}
