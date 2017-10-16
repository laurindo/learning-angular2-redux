import { INCREMENT, DECREMENT } from '../actions/counter.action';
import { IAppState } from '../store';

const initialState: IAppState = { counter: 0 };

export const counterReducer = (state: IAppState = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        case DECREMENT:
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};