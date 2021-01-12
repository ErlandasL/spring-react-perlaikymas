import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminProductRow extends Component {
  render() {
    const { id, pavadinimas, imgUrl } = this.props;
    return (
      <React.Fragment>
        <th scope="row">{id}</th>
        <td>
          <img className="h-50" alt="Veliava" src={imgUrl}></img>
        </td>

        <td>
          <Link to={`/admin/update-product/${id}`}>{pavadinimas}</Link>
        </td>
      </React.Fragment>
    );
  }
}
