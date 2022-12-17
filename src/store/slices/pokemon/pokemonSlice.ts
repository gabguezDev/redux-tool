import { createSlice } from "@reduxjs/toolkit";

interface PokemonState {
	pokemons: { name: string; url: string }[];
	isLoading: boolean;
	page: number;
}

const initialState: PokemonState = {
	pokemons: [],
	isLoading: false,
	page: 0,
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		startLoadingPokemon: (state: PokemonState) => {
			state.isLoading = true;
		},
		setPokemons: (state, action) => {
			state.isLoading = false;
			state.page = action.payload.page;
			state.pokemons = action.payload.pokemons;
		},
	},
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;
