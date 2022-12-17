// import { useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "./store/store";
// import { getPokemons } from "./store/slices/pokemon/thunks";
// import { useAppStore } from "./hooks/useAppStore";
import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi";

type Props = {};

export const TodosApp = (props: Props) => {
	const [todoId, setTodoId] = useState<number>(1);
	const { isLoading, data: todo } = useGetTodoQuery(todoId);

	console.log("todo", todo);

	return (
		<div>
			<h1>TodosApp</h1>
			{/* todos.map(({ id, title, completed }: any) => ( */}
			{!isLoading ? (
				<li key={todo.id}>
					{/* <strong>{completed ? "DONE " : "PENDING "}</strong> */}
					{/* {title} */}
					{todo.title}
				</li>
			) : (
				// ))
				<h5>Cargando...</h5>
			)}

			<button
				onClick={() =>
					setTodoId(prevState => (prevState >= 0 ? prevState - 1 : prevState))
				}
			>
				prev
			</button>
			<button onClick={() => setTodoId(prevState => prevState + 1)}>
				next
			</button>
		</div>
	);
};
