import React from "react";
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import '../css/filters.css';

class Filters extends React.Component{
	render(){
		return(
			<div className = 'filters'>
				<PriceFilter/>
				<RatingFilter/>
			</div>
			)
	}
}

export default Filters;