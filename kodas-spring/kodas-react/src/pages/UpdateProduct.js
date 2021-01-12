import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

class UpdateSvente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      pavadinimas: "",
      aprasymas: "",
      veliavosIskelimas: "",
      sventesTipas: "",
      salis: "",
      metai: "",
    };
    this.changePavadinimasHandler = this.changePavadinimasHandler.bind(this);
    this.changeAprasymasHandler = this.changeAprasymasHandler.bind(this);
    this.changeVeliavosIskelimasHandler = this.changeVeliavosIskelimasHandler.bind(
      this
    );
    this.changeSventesTipasHandler = this.changeSventesTipasHandler.bind(this);
  }
  // Event Handler Simple method to test after

  //   onChange = e => {
  //     const {name,value} = e.target;
  //     this.setState({
  //     [name]:value
  //     })
  //     }

  changePavadinimasHandler = (event) => {
    this.setState({ pavadinimas: event.target.value });
  };

  changeAprasymasHandler = (event) => {
    this.setState({ aprasymas: event.target.value });
  };

  changeVeliavosIskelimasHandler = (event) => {
    this.setState({ veliavosIskelimas: event.target.value });
  };

  changeSventesTipasHandler = (event) => {
    this.setState({ sventesTipas: event.target.value });
  };

  componentDidMount() {
    ProductService.getProductById(this.state.id).then((res) => {
      let product = res.data;
      this.setState({
        pavadinimas: product.pavadinimas,
        aprasymas: product.aprasymas,
        veliavosIskelimas: product.veliavosIskelimas,
        sventesTipas: product.sventesTipas,
      });
    });
  }

  updateProduct = (e) => {
    e.preventDefault();
    let product = {
      pavadinimas: this.state.pavadinimas,
      aprasymas: this.state.aprasymas,
      veliavosIskelimas: this.state.veliavosIskelimas,
      sventesTipas: this.state.sventesTipas,
    };
    console.log("product => " + JSON.stringify(product));
    ProductService.updateSvente(product, this.state.id).then((res) => {
      this.props.history.push("/admin");
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-5">Update Svente</h3>
        <form>
          <div className="form-group font-weight-bold mt-5">
            <label>Pavadinimas</label>
            <input
              type="text"
              name="pavadinimas"
              className="form-control"
              placeholder="Pavadinimas"
              value={this.state.pavadinimas}
              onChange={this.changePavadinimasHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>aprasymas</label>
            <input
              type="text"
              name="aprasymas"
              className="form-control"
              placeholder="aprasymas"
              value={this.state.imgUrl}
              onChange={this.changeAprasymasHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>veliavosIskelimas</label>
            <input
              type="text"
              name="veliavosIskelimas"
              className="form-control"
              placeholder="veliavosIskelimas"
              value={this.state.veliavosIskelimas}
              onChange={this.changeVeliavosIskelimasHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>sventesTipas</label>
            <input
              type="text"
              className="form-control"
              name="sventesTipas"
              placeholder="sventesTipas"
              value={this.state.sventesTipas}
              onChange={this.changeSventesTipasHandler}
            />
          </div>
          <Link to="/admin">
            <button
              type="button"
              className="btn btn-success mr-3"
              onClick={this.updateProduct}
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

export default UpdateSvente;
