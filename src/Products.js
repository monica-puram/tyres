import React from 'react';
import HeaderNav from './components/HeaderNav';
import ProductsBody from './components/ProductsBody';
import Footer from './components/Footer';

class Products extends React.Component{
	render()
	{
		return(
			<React.Fragment>
				<HeaderNav/>
				<ProductsBody/>
				<Footer/>
			</React.Fragment>
			)

	}
}

export default Products;