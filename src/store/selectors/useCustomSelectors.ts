import { RootState } from "../store";

export const counterSelector = (state: RootState) => state.counter;
export const pokemonSelector = (state: RootState) => state.pokemons;

export const todosSelector = (state: RootState) => state.todos;
