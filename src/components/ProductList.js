import React from 'react';
import data from '../json/products.json';
import{CardGroup, Card, Button} from 'react-bootstrap';
import Rating from 'react-rating';

class ProductList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			productList: data
		}
	}
	render(){ 
		console.log(this.state.productList);
		return(
			<div>
				<h3>Products List:</h3>
				<CardGroup>
					{

						this.state.productList.map((item)=>

							<Card>
								<Card.Img variant="top" src={item.image} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text>
									    {item.price}
									</Card.Text>
									<Rating initialRating = {item.rating}
											readonly 
									      	emptySymbol="glyphicon glyphicon-star-empty"
				  							fullSymbol="glyphicon glyphicon-star"/>
				  					<Button variant="success">Add to cart</Button>
								</Card.Body>
									    
							</Card>
						)

					}	  
				</CardGroup>
			</div>
			)
	}
}

export default ProductList;