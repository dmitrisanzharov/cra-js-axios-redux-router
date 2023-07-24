import React from 'react';
import "./App.css";
import CustomInput from './components/CustomInput';

// components


function App() {

	const [input, setInput] = React.useState('');
	// const [count, setCount] = React.useState(1);
	const count = React.useRef(1);
	const inputRef = React.useRef()

	React.useEffect(() => {
		console.log(count.current)
		count.current = count.current + 1;
	});

	function clickHandler(){
		console.log(inputRef.current)
	}

	return (
		<div>
			<CustomInput value={input} onChange={e=> setInput(e.target.value)} ref={inputRef}/>
			<hr />
			<div>Input: {input}</div>
			<div>Count: {count.current}</div>
			<hr />
			<button onClick={clickHandler}>submit</button>
		</div>
	);
}

export default App;
