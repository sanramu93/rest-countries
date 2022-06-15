import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  countryName: string;
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.countryName = this.appService.getCountryName();
    if (this.countryName) {
      this.appService
        .fetchCountryByName(this.countryName)
        .subscribe((country: any) => {
          this.flag = country.flags.png;
          this.name = country.name.common;
          this.population = country.population;
          this.region = country.region;
          this.capital = country.capital?.[0];
        });
    }
  }
}
