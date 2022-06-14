import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  darkMode: boolean;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.darkMode.subscribe((darkMode: boolean) => {
      this.darkMode = darkMode;
    });
  }

  onDarkModeClick() {
    this.darkMode = !this.darkMode;
    this.appService.communicateDarkMode(this.darkMode);
  }
}
