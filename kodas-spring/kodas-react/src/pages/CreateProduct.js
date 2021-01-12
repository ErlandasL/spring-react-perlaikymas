import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "Apple",
      model: "",
      imgUrl: "",
      details: "",
      price: "",
      inCart: false,
      quantity: "",
    };
    this.changeModelHandler = this.changeModelHandler.bind(this);
    this.changeImgUrlHandler = this.changeImgUrlHandler.bind(this);
    this.changeDetailsHandler = this.changeDetailsHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
  }
  // Event Handler Simple method to test after

  //   onChange = e => {
  //     const {name,value} = e.target;
  //     this.setState({
  //     [name]:value
  //     })
  //     }

  changeModelHandler = (event) => {
    this.setState({ model: event.target.value });
  };

  changeImgUrlHandler = (event) => {
    this.setState({ imgUrl: event.target.value });
  };

  changeDetailsHandler = (event) => {
    this.setState({ details: event.target.value });
  };

  changePriceHandler = (event) => {
    this.setState({ price: event.target.value });
  };

  changeQuantityHandler = (event) => {
    this.setState({ quantity: event.target.value });
  };

  saveProduct = (e) => {
    e.preventDefault();
    let product = {
      brand: this.state.brand,
      inCart: this.state.inCart,
      model: this.state.model,
      imgUrl: this.state.imgUrl,
      details: this.state.details,
      price: this.state.price,
      quantity: this.state.quantity,
    };
    console.log("product => " + JSON.stringify(product));

    ProductService.createProduct(product).then((res) => {
      this.props.history.push("/admin");
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-5">Create Product</h3>
        <form>
          <div className="form-group font-weight-bold mt-5">
            <label>Model</label>
            <input
              type="text"
              name="model"
              className="form-control"
              placeholder="Model"
              value={this.state.model}
              onChange={this.changeModelHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>Image Url</label>
            <input
              type="url"
              name="imgUrl"
              className="form-control"
              placeholder="Image url, max 255 characters long"
              value={this.state.imgUrl}
              onChange={this.changeImgUrlHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>Details</label>
            <input
              type="text"
              name="details"
              className="form-control"
              placeholder="Details"
              value={this.state.details}
              onChange={this.changeDetailsHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>Price</label>
            <input
              type="number"
              min="0"
              className="form-control"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.changePriceHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>Quantity</label>
            <input
              type="number"
              min="0"
              name="quantity"
              className="form-control"
              placeholder="Quantity"
              value={this.state.quantity}
              onChange={this.changeQuantityHandler}
            />
          </div>
          <Link to="/admin">
            <button
              type="button"
              className="btn btn-success mr-3"
              onClick={this.saveProduct}
            >
              Save
            </button>
          </Link>
          <Link to="/admin">
            <button type="button" className="btn btn-light">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateProduct;
