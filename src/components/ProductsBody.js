import React  from "react";
import {Container, Row, Col} from "react-bootstrap";
import Filters from "./Filters";

class ProductsBody extends React.Component{
	render(){
		return(
			<Container>
				<Row>
					<Col md = {3} lg = {3} xl = {3}>
						<Filters/>
					</Col>
				</Row>
			</Container>
			)
	}
}

export default ProductsBody;