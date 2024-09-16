import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { ContentVideosComponent } from '../content-videos/content-videos.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatTabsModule, MatTableModule, ContentVideosComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
