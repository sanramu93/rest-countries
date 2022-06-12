import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  darkMode = new Subject();
  constructor() {}

  communicateDarkMode(darkMode: boolean) {
    this.darkMode.next(darkMode);
  }
}
