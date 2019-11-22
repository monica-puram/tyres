import React  from "react";
import {Container, Row, Col} from "react-bootstrap";
import Filters from "./Filters";

class ProductsBody extends React.Component{
	render(){
		return(
			<Container>
				<Row>
					<Col md = {2} lg = {2} xl = {3}>
						<Filters/>
					</Col>
<<<<<<< Updated upstream
=======
					<Col sm = {12} md = {10} lg = {10} xl = {9}>
						<ProductList/>
					</Col>
					
>>>>>>> Stashed changes
				</Row>
			</Container>
			)
	}
}

export default ProductsBody;