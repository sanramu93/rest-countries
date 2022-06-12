import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  darkMode: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  onDarkModeClick() {
    this.darkMode = !this.darkMode;
    this.appService.communicateDarkMode(this.darkMode);
  }
}
