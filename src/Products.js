import React from 'react';
import HeaderNav from './components/HeaderNav';
import ProductsBody from './components/ProductsBody'

class Products extends React.Component{
	render()
	{
		return(
			<React.Fragment>
			<HeaderNav/>
			<ProductsBody/>
			</React.Fragment>
			)

	}
}

export default Products;