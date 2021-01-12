import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardWrapper } from "./CardWrapper";

export default class Svente extends Component {
  render() {
    const {
      pavadinimas,
      aprasymas,
      veliavosIskelimas,
      sventesTipas,
      salis,
      metai,
    } = this.props;
    return (
      <CardWrapper className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div className="card">
          <div className="img-container">
            <div className="img-container">
              <Link to={`details/product/${pavadinimas}`}></Link>
              <button
                className="cart-btn"
                disabled={veliavosIskelimas ? true : false}
              >
                {veliavosIskelimas ? (
                  <img src={salis} alt="product" className="card-img-top" />
                ) : (
                  <i className="fas fa-flag" />
                )}
              </button>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">{pavadinimas}</h3>
            <h5 className="card-title">{sventesTipas}</h5>
            <h5 className="card-title">{salis}</h5>
            <h5 className="card-title">{metai}</h5>
            <p className="text-center card-text">{aprasymas}</p>
            <Link
              to={`details/product/${pavadinimas}`}
              className="btn btn-primary"
            >
              Details
            </Link>
          </div>
        </div>
      </CardWrapper>
    );
  }
}
// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     imgUrl: PropTypes.string,
//     price: PropTypes.number,
//     details: PropTypes.string,
//     model: PropTypes.string,
//     brand: PropTypes.string,
//     inCart: PropTypes.bool,
//   }).isRequired,
// };
