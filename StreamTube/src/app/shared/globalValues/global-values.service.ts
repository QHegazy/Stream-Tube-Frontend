import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalValuesService {
  constructor() {}
  private sideBar: WritableSignal<boolean> = signal(true);
  get sideBarState() {
    return computed(() => this.sideBar());
  }
  changeSideBarState() {
    this.sideBar.set(!this.sideBarState());
  }
}
