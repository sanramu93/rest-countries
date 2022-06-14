import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCountries: {}[];
  countries: {}[];
  searchInput = '';
  selectedRegion: string;
  darkMode: boolean;

  constructor(private httpClient: HttpClient, private appService: AppService) {}

  ngOnInit(): void {
    this.getAllCountries();
    this.appService.darkMode.subscribe((darkMode: boolean) => {
      this.darkMode = darkMode;
    });
  }

  getAllCountries() {
    this.httpClient
      .get<any>('https://restcountries.com/v3.1/all')
      .subscribe((response) => {
        // Add searchName for user filters
        this.allCountries = this.countries = response.map((country: any) => {
          return {
            ...country,
            searchName: country.name.common.toLowerCase(),
          };
        });
      });
  }

  onSearchChange(e: any) {
    this.searchInput = e.target.value;
    this.countries = this.allCountries;
    this.countries = this.allCountries.filter((country: any) =>
      country.searchName.includes(this.searchInput.toLowerCase())
    );
    this.selectedRegion = '';
  }

  onSearchBtnClick(inputEl: HTMLElement) {
    inputEl.focus();
  }

  onRegionSelect(e: any) {
    this.selectedRegion = e.target.value;
    this.countries = this.allCountries;
    this.countries = this.allCountries.filter(
      (country: any) => country.region === this.selectedRegion
    );
    this.searchInput = '';
  }
}
