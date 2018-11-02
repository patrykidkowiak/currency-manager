import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CurrencyDetailsComponent} from './currency/currency-details/currency-details.component';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyService} from './currency/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
