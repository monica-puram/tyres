import React  from "react";
import {Container, Row, Col} from "react-bootstrap";
import Filters from "./Filters";
import ProductList from './ProductList';

class ProductsBody extends React.Component{
	render(){
		return(
			<Container>
				<Row>
					<Col md = {3} lg = {3} xl = {3}>
						<Filters/>
					</Col>
					<Col md = {9} lg = {9} xl = {9}>
						<ProductList/>
					</Col>
					
				</Row>
			</Container>
			)
	}
}

export default ProductsBody;