import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState, store } from './store';
import { INCREMENT, DECREMENT } from './actions/counter.action';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {

  constructor(private appService: AppService) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  title = 'app';
  counter: number;

  readState() {
    const state = store.getState();
    this.counter = state.counter;
    console.log("AFTER: " + JSON.stringify(store.getState())); 
  }

  increment() {
    this.appService.getSomething().subscribe(res => this.title = JSON.stringify(res));
    store.dispatch({type: INCREMENT});
  }

  decrement() {
    store.dispatch({type: DECREMENT});
  }
}
