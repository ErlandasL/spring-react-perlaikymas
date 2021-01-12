import React from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";
import AdminProductRow from "../components/AdminProductRow";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount = () => {
    ProductService.getSventes().then((res) => {
      console.log(res.data);
      this.setState({ products: res.data });
    });
  };

  deleteProduct = (id) => {
    ProductService.deleteSvente(id).then((res) => {
      this.setState({
        products: this.state.products.filter((p) => p.id !== id),
      });
    });
  };

  render() {
    if (this.state.products) {
      return (
        <div className="container">
          <Link to="/admin/add-product">
            <button
              type="button"
              className="btn btn-success mt-3"
              onClick={this.addProduct}
            >
              Add new product
            </button>
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">VeliavosImg</th>
                <th scope="col">Sventes Pavadinimas</th>
                <th scope="col">Delete Svente</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((item) => (
                <tr key={item.id}>
                  <AdminProductRow
                    id={item.id}
                    imgUrl={item.imgUrl}
                    pavadinimas={item.pavadinimas}
                  />
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => this.deleteProduct(item.id)}
                    >
                      Delete Product
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
export default Admin;
