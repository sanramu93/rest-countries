import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryCardModule } from 'src/app/country-card/country-card.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCountries: {}[];
  country: CountryCardModule;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.httpClient
      .get<any>('https://restcountries.com/v3.1/all')
      .subscribe((response) => {
        this.allCountries = response;
      });
  }
}
