import {
  bindActionCreators,
  combineReducers,
  configureStore,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/* State Types */
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

/* Initial State */
const initialState = {} as Record<string, number>;

/* Slice */
const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    decrement: (state, action: PayloadAction<string>) => {
      const itemID = action.payload;
      if (state?.[itemID] > 0) {
        const newItemAmount = itemID in state ? state[itemID] - 1 : 1;
        state[itemID] = newItemAmount;
      }
    },
    increment: (state, action: PayloadAction<string>) => {
      const itemID = action.payload;
      const newItemAmount = itemID in state ? state[itemID] + 1 : 1;
      state[itemID] = newItemAmount;
    },
  },
});

/* Root Reducer */
const reducer = combineReducers({ cart: slice.reducer });

/* Store */
const store = configureStore({ reducer });

export default function createStore() {
  return store;
}

/* State Hooks */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;
export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
};

/* Selectors */
export const selectCart = (state: RootState) => state.cart;
