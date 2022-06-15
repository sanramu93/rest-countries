import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  isLoading = false;

  constructor(private httpClient: HttpClient, private appService: AppService) {}

  ngOnInit(): void {
    this.isLoading = true;
    // Send Http request
    this.appService.fetchAllCountries().subscribe((allCountries) => {
      this.isLoading = false;
      this.allCountries = this.countries = allCountries;
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
