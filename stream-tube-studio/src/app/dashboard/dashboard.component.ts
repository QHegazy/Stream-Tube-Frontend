import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  list: Array<any> = [
    { icon: 'upload', name: 'Upload Videos' },
    { icon: 'sensorss', name: 'Go Live' },
    { icon: 'post_add', name: 'Create Post' },
  ];
  video_dashboard = [{ name: 'Views' }, { name: 'Average view duration' }];
}
