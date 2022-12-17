import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppSelector } from "./store";
import { useAppDispatch } from "./store/store";
import {
	decrement,
	increment,
	incrementByAmount,
} from "./store/slices/counter/counterSlice";

function App() {
	const { value: counterValue } = useAppSelector(state => state.counter);
	const dispatch = useAppDispatch();

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>

			<p>{counterValue}</p>

			<div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					-1
				</button>
				<button
					onClick={() => {
						dispatch(increment());
					}}
				>
					+1
				</button>
				<button
					onClick={() => {
						dispatch(incrementByAmount(100));
					}}
				>
					+100
				</button>
			</div>
		</div>
	);
}

export default App;
