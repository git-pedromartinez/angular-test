import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/redux/state.model';
import { statePricesSelector } from 'src/app/redux/state.selectors';

@Component({
  selector: 'app-view-b',
  templateUrl: './view-b.component.html',
  styleUrls: ['./view-b.component.scss'],
})
export class ViewBComponent {
  prices$: Observable<Array<number>>;

  constructor(private _store: Store<AppState>) {
    this.prices$ = _store.select(statePricesSelector);
  }

  maxProfit(price: Array<number>, start: number, end: number) {
    if (end <= start) return 0;
    let profit = 0;
    for (let i = start; i < end; i++) {
      for (let j = i + 1; j <= end; j++) {
        if (price[j] > price[i]) {
          let curr_profit =
            price[j] -
            price[i] +
            this.maxProfit(price, start, i - 1) +
            this.maxProfit(price, j + 1, end);
          profit = Math.max(profit, curr_profit);
        }
      }
    }
    return profit;
  }

  daysBuySell(price: Array<number>, n: number): DayBuySell[] {
    let days: Array<DayBuySell> = [];
    if (n == 1) return [];
    let i = 0;
    while (i < n - 1) {
      while (i < n - 1 && price[i + 1] <= price[i]) i++;
      if (i == n - 1) break;
      let buy = i++;
      while (i < n && price[i] >= price[i - 1]) i++;
      let sell = i - 1;
      days.push({ buy, sell });
    }
    return days;
  }
}

export interface DayBuySell {
  buy: number;
  sell: number;
}
