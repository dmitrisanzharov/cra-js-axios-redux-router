import React from "react";

class ClassComponentsAndProps extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };

		// ! this.handleAdd = this.handleAdd.bind(this) <--- now I can use NON-ARROW function, but it sucks, don't do it
	}

	// ! alternative syntax:
	// !  handleAdd() { }    <-  to use this syntax, I need to BOUND it to THIS

	handleAdd = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	render() {
		return (
			<div>
				<h1>This is class component samples</h1>
				<ShowStuff count={this.state.count} />
				<button onClick={this.handleAdd}>+</button>
			</div>
		);
	}
}

class ShowStuff extends React.Component {
	// ! NOTE: how I have access to PROPS even though I did NOT declare CONSTRUCTOR, this is because it is automatically declared for me, so no need to repeat it

	render() {
		return (
			<div>
				<h1>show count: {this.props.count}</h1>
			</div>
		);
	}
}

export default ClassComponentsAndProps;
