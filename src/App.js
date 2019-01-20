import React, { Component } from 'react';
import './App.css';

import YearSelector from './components/YearSelector';
import YearCharts from './components/YearCharts';
import { duplicateObject } from './helpers';
const axios = require('axios');

class App extends Component {
	state = {
		yearSelected: 2018,
		data: {
			2018: [],
			2017: [],
			2016: [],
			2015: [],
			2014: [],
			2013: [],
		},
		temp: null,
	};

	yearSelectorHandler = e => {
		this.setState({
			yearSelected: e.target.value,
		});
	};

	componentWillMount() {
		this.getDataHandler();
	}

	getDataHandler = () => {
		let data = {
			2018: [],
			2017: [],
			2016: [],
			2015: [],
			2014: [],
			2013: [],
		};
		axios
			.get(`https://cors-anywhere.herokuapp.com/https://killed-by-police-api.herokuapp.com/data`)
			.then(response => {
				// console.log(response.data);
				response.data.forEach(element => {
					let elementYear = element.date.substring(0, 4);
					data[elementYear].push(element);
				});
				this.setState((prevState, props) => {
					let newState = duplicateObject(prevState);
					newState.data = data;
					return newState;
				});
			});
	};

	render() {
		return (
			<div className="App">
				<YearSelector onChangeHandler={this.yearSelectorHandler} year={this.state.yearSelected} />
				<YearCharts year={this.state.yearSelected} />
			</div>
		);
	}
}

export default App;
