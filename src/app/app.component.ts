import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rest-countries';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.darkMode.subscribe((darkMode: boolean) => {
      this.toggleDarkMode(darkMode);
    });
  }

  toggleDarkMode(darkMode: boolean) {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
