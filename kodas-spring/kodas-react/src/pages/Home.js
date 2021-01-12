import React, { Component } from "react";
import ProductService from "../services/ProductService";
import Svente from "../components/Svente";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  // getImgUrl(pavadinimas) {
  //   ProductService.getVeliavosUrl(pavadinimas).then((res) => {
  //     this.setState({imgUrl : res});
  //   }
  // }

  componentDidMount() {
    ProductService.getSventes().then((res) => {
      console.log(res);
      this.setState({ products: res });
    });
  }

  render() {
    const { data } = this.state.products;
    if (data) {
      return (
        <div className="container">
          <div className="thumbnail row d-flex justify-content-center">
            {data.map(({ pavadinimas, imgUrl, ...otherProps }) => (
              <Svente
                key={pavadinimas}
                pavadinimas={pavadinimas}
                imgUrl={imgUrl}
                {...otherProps}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mt-5">
          <h5>Sventes and Salys is loading...</h5>
        </div>
      );
    }
  }
  //   const { products } = this.state.products;
  //   console.log(products);

  //   console.log(products);
  //   return (
  //     <div>
  //       {products.map((item) => {
  //         return (
  //           <Product key={id} id={id} itemImge={itemImg} {...otherProps} />
  //         );
  //       })}
  //     </div>
  //   );
  // }
}

export default Home;
