import React from 'react';
import data from '../json/products.json';
import{CardGroup, Card, Button} from 'react-bootstrap';
import Rating from 'react-rating';
import ProductsPagination from './ProductsPagination';

class ProductList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			productList: [],
			error: '',
			currentPage :1,
			postsPerPage : 12
		}
	}
	componentDidMount(){
		let url = new Request('http://localhost:3000/products.json');
		fetch(url)
		.then(function(response){
			return response.json();
			}
		)
		.then((result) => {
			console.log(result);
          this.setState({
            productList: result
          })
      })
		.catch(error => {
			this.setState(error);
		})
	}

	render(){ 
		const price = this.props.price;
		const rating = this.props.rating;
		let totalPosts = 0;
		let tempArr = [];
		if(rating !=0){
			tempArr = this.state.productList.filter((item)=> (item.rating==rating));
		}
		const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
		const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
		let currentPosts=[];
		if(tempArr.length != 0) {
			 currentPosts = tempArr.slice(indexOfFirstPost,indexOfLastPost);
			 totalPosts = tempArr.length;	
		} 	
		if(rating ==0 && price ==0){
			currentPosts = this.state.productList.slice(indexOfFirstPost,indexOfLastPost);
			totalPosts = this.state.productList.length;
		}

		const paginate= (pageNumber) => {
			this.setState({
				currentPage :pageNumber
			})
		}
		return(
			<div style = {{"minHeight": "500px"}}>
				<h3>Products List:</h3>
				<ul>
					{
						currentPosts.length>0 ?
						currentPosts.map((item)=>
							<Card as = "li" key = {item.id} style = {{"display": "inline-block", "width": "25%", "margin": "10px" }}>
								<Card.Img variant="top" src={item.image} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text>
									    {item.price}
									</Card.Text>
									<Rating initialRating = {item.rating}
											readonly 
									      	emptySymbol="glyphicon glyphicon-star-empty"
				  							fullSymbol="glyphicon glyphicon-star"
				  							style = {{"color": "orange"}}/>
				  					<Button variant="success">Add to cart</Button>
								</Card.Body>									    
							</Card>
						)
						: <h1>No products found</h1>
					}	  
				</ul>
				<ProductsPagination 
					postsPerPage = {this.state.postsPerPage} 
					totalPosts = {totalPosts} 
					paginate = {paginate}/>
			</div>
			)
	}
}

export default ProductList;