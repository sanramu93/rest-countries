import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent implements OnInit {
  darkMode = false;
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;

  constructor(private appService: AppService) {}
  @Input() country: {
    flags: { png: string };
    name: { common: string };
    population: string;
    region: string;
    capital: string[];
  };

  ngOnInit(): void {
    this.flag = this.country.flags.png;
    this.name = this.country.name.common;
    this.population = this.country.population;
    this.region = this.country.region;
    this.capital = this.country.capital?.[0];

    this.appService.darkMode.subscribe((darkMode: boolean) => {
      this.darkMode = darkMode;
    });
  }
}
