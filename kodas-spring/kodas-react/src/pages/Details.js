import React, { Component } from "react";
import ProductService from "../services/ProductService";
import { ButtonContainer } from "../components/ButtonContainer";
import { Link } from "react-router-dom";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      brand: "",
      model: "",
      imgUrl: "",
      details: "",
      price: "",
      inCart: "",
      quantity: "",
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    ProductService.getProductById(this.state.id).then((res) => {
      let product = res.data;
      this.setState({
        inCart: product.inCart,
        brand: product.brand,
        model: product.model,
        imgUrl: product.imgUrl,
        details: product.details,
        price: product.price,
        quantity: product.quantity,
      });
    });
  }

  addToCart = (e) => {
    this.setState({ inCart: true });
    let product = {
      brand: this.state.brand,
      inCart: true,
      model: this.state.model,
      imgUrl: this.state.imgUrl,
      details: this.state.details,
      price: this.state.price,
      quantity: this.state.quantity,
    };
    ProductService.updateProduct(product, this.state.id).then((res) => {
      this.props.history.push("/details/product/" + this.state.id);
    });
  };

  render() {
    return (
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{this.state.model}</h1>
          </div>
        </div>
        {/* end title */}
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={this.state.imgUrl} className="img-fluid" alt="product" />
          </div>
          {/* product text */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model : {this.state.model}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by :{" "}
              <span className="text-uppercase">{this.state.brand}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price : <span>$</span>
                {this.state.price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about the product
            </p>
            <p className="text-muted lead">{this.state.details}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer
                cart
                disabled={this.state.inCart ? true : false}
                onClick={this.addToCart}
              >
                {this.state.inCart ? "in Cart" : "add to Cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
