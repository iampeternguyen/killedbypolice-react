import React, { Component } from 'react';
import './App.css';

import YearSelector from './components/YearSelector';
import YearCharts from './components/YearCharts';

const axios = require('axios');

class App extends Component {
	state = {
		yearSelected: 2018,
		data: {
			2017: null,
			2018: null,
			2016: null,
			2015: null,
			2014: null,
			2013: null,
		},
		temp: null,
	};

	yearSelectorHandler = e => {
		this.setState({
			yearSelected: e.target.value,
		});
		this.getDataHandler(e.target.value);
	};

	getDataHandler = () => {
		axios
			.get(`https://cors-anywhere.herokuapp.com/https://killed-by-police-api.herokuapp.com/data`)
			.then(response => {
				// console.log(response.data);
			});
	};

	render() {
		return (
			<div className="App">
				<YearSelector onChangeHandler={this.yearSelectorHandler} year={this.state.yearSelected} />
				<YearCharts year={this.state.yearSelected} />
				{this.state.temp}
			</div>
		);
	}
}

export default App;
