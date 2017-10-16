import { combineReducers, Store, createStore } from 'redux';
import { counterReducer } from './reducers/counter.reducer'; 

export interface IAppState {
    counter: number;
}

const rootReducer = combineReducers({
   counter: counterReducer 
});

export const store = createStore(rootReducer) as Store<IAppState>;