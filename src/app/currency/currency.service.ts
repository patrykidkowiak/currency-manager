import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getCurrency(currencyCode): Observable<any> {
    return this.http.get(`${this.apiUrl}/exchangerates/rates/a/${currencyCode}/?format=json`);
  }

  getCurrencyHistory(currencyCode) {
    return this.http.get(`${this.apiUrl}/exchangerates/rates/a/${currencyCode}/last/20`);
  }

}
