import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  darkMode = new Subject();

  constructor(private httpClient: HttpClient) {}

  communicateDarkMode(darkMode: boolean) {
    this.darkMode.next(darkMode);
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
}
