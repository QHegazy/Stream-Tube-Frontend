import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-element',
  standalone: true,
  imports: [],
  templateUrl: './side-bar-element.component.html',
  styleUrl: './side-bar-element.component.scss',
})
export class SideBarElementComponent {
  @Input({ required: true, alias: 'info' }) info!: Array<any>;
  @Input({ alias: 'header' }) header!: string;
  constructor() {}
}
