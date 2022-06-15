import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  darkMode = new Subject();
  countryName: string;

  constructor(private httpClient: HttpClient) {}

  communicateDarkMode(darkMode: boolean) {
    this.darkMode.next(darkMode);
  }

  setCountryName(name: string) {
    this.countryName = name;
  }

  getCountryName() {
    return this.countryName;
  }

  fetchAllCountries() {
    return this.httpClient.get<{}[]>('https://restcountries.com/v3.1/all').pipe(
      map((resData) => {
        return resData.map((country: any) => {
          return {
            ...country,
            searchName: country.name.common.toLowerCase(),
          };
        });
      })
    );
  }

  fetchCountryByName(name: string) {
    return this.httpClient
      .get<{}[]>(`https://restcountries.com/v3.1/name/${name}`)
      .pipe(map((country) => country[0]));
  }
}
