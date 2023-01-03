import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {

    //executes when the component is mounted (never make http requests inside the constructor)
    constructor(props) {
        super(props); //calling the super class constructor
        //initialization of the state
        this.state = { products: [
            
        ] }
    }

    render() {
        return (
            <div>
            <h4>Items</h4>

            <div className="row">
                {this.state.products.map((prod) => {return <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}><button className="btn btn-primary">Buy Now</button></Product>})}
            </div>
            </div>)
    }
    //render ends here

    componentDidMount = async () => {
        //fetch data from data source via fetch api
        var response = await fetch("http://localhost:5000/products", {method: "GET"});
        var prods = await response.json();
        console.log(prods);
        this.setState({ products: prods });
    }

    //the ellipses clones the products array into allProducts
    //executes when the user clicks on the + sign
    handleIncrement = (product, maxValue) => {
        //get the index of the product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity < maxValue) {
        allProducts[index].quantity++;
        this.setState({products: allProducts}); //update the state of the current component (parent component)
        }
    };
    //executes when the user clicks on the - sign
    handleDecrement = (product, minValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity > minValue) {
        allProducts[index].quantity--;
        this.setState({products: allProducts});
        }
    };
    //executes when the user clicks on the delete X sign at the top right of an item
    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (window.confirm("Are you sure you want to delete this item?")) {
        //delete product based on index
        allProducts.splice(index, 1);
        this.setState({products: allProducts});
        }
    };
}