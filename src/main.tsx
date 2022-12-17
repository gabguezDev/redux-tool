import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store";
import { PokemonApp } from "./PokemonApp";
import { TodosApp } from "./TodosApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <PokemonApp /> */}
			{/* <App /> */}
			<TodosApp />
		</Provider>
	</React.StrictMode>
);
