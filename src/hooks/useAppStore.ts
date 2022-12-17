import { useAppSelector } from "../store";
import {
	counterSelector,
	pokemonSelector,
	todosSelector,
} from "../store/selectors/useCustomSelectors";

export const useAppStore = () => {
	const counter = useAppSelector(counterSelector);
	const pokemon = useAppSelector(pokemonSelector);
	const todos = useAppSelector(todosSelector);

	return {
		counter,
		pokemon,
		todos,
	};
};
