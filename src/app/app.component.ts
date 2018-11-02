import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Currency} from './models/Currency';
import {CurrencyService} from './currency/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'CurrencyApp';
  listOfOptions = ['USD', 'THB', 'AUD', 'HKD', 'CAD', 'NZD', 'SGD', 'EUR', 'HUF',
    'CHF', 'GBP', 'UAH', 'JPY', 'CZK', 'DKK', 'ISK', 'NOK', 'SEK', 'HRK',];

  selectedCurrency: Currency;
  selectedCurrencyCode: string;

  constructor(private currencyService: CurrencyService) {
  }

  onSelect(selectedCurrencyCode: string): void {
    if (selectedCurrencyCode === 'Choose a currency') {
      this.selectedCurrencyCode = null;
      this.selectedCurrency = null;
    } else {
      this.currencyService.getCurrency(selectedCurrencyCode).subscribe(
        currency => {
          this.selectedCurrency = currency;
          console.log(currency);
          this.selectedCurrencyCode = selectedCurrencyCode;
        },
        error => console.log(JSON.stringify(error))
      );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.selectedCurrencyCode = null;
  }

}
