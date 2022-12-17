import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./store/store";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useAppStore } from "./hooks/useAppStore";

type Props = {};

export const PokemonApp = (props: Props) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	const { pokemons, page, isLoading } = useAppStore().pokemon;

	return (
		<div>
			<h1>PokemonApp</h1>
			<ul>
				{!isLoading ? (
					pokemons.map(({ name, url }) => (
						<li key={name}>
							<p>{name}</p>
							<img src={url} width={100} />
						</li>
					))
				) : (
					<h5>Cargando...</h5>
				)}
			</ul>
			<button onClick={() => dispatch(getPokemons(page))}>Next</button>
		</div>
	);
};
