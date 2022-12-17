import { ThunkDispatch } from "@reduxjs/toolkit";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = (page: number = 0) => {
	return async (dispatch: ThunkDispatch<any, any, any> /* , getState */) => {
		dispatch(startLoadingPokemon());

		const { data } = await pokemonApi.get(
			`pokemon?limit=10&offset=${page * 10}`
		);

		console.log(data);

		dispatch(setPokemons({ page: page + 1, pokemons: data.results }));
	};
};
