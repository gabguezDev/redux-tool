import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./slices";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";
// import { todosSlice } from "./slices/todos/todosSlice";
import { todosApi } from "./apis/todosApi";
// ...

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		pokemons: pokemonSlice.reducer,
		// todos: todosSlice.reducer,

		// Usando RTK Query
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(todosApi.middleware),
});

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
