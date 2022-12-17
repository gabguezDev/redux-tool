import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState = { value: 22 } as CounterState;

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		incrementByAmount(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
