import React from 'react';

export default function YearSelector(props) {
	return (
		<div>
			<select name="year" value={props.year} onChange={e => props.onChangeHandler(e)}>
				<option value="data">All</option>
				<option value="2018">2018</option>
				<option value="2017">2017</option>
				<option value="2016">2016</option>
				<option value="2015">2015</option>
				<option value="2014">2014</option>
				<option value="2013">2013</option>
			</select>
			{props.defaultYear}
		</div>
	);
}
