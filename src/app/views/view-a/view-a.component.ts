import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { stateSetUsers } from 'src/app/redux/state.actions';
import { AppState } from 'src/app/redux/state.model';

@Component({
  selector: 'app-view-a',
  templateUrl: './view-a.component.html',
  styleUrls: ['./view-a.component.scss'],
})
export class ViewAComponent {
  constructor(private _store: Store<AppState>) {}
  setPrices() {
    this._store.dispatch(stateSetUsers({ prices: [2500, 30, 200, 6, 100, 3] }));
  }
}
