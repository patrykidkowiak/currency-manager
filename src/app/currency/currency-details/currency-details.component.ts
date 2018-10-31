import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Currency} from '../../models/Currency';
import {CurrencyService} from '../currency.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit, OnChanges {

  @Input() currency: Currency;

  chartShowed: boolean;

  chart = [];

  constructor(private currencyService: CurrencyService) {
  }

  hideChardVoid() {
    this.chart = null;
  }


  showChartVOid() {
    this.currencyService.getCurrencyHistory(this.currency.code).subscribe(res => {
      const mid = res['rates'].map(res => res.mid);
      const alldates = res['rates'].map(res => res.effectiveDate);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: alldates,
          datasets: [
            {
              data: mid,
              borderColor: '#333333',
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
        }
      });
      this.chartShowed = true;
    });
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.chartShowed === true) {
      this.showChartVOid();
    }
  }
}
