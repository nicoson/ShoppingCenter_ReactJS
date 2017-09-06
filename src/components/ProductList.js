import React, { Component } from 'react';
import { Card } from 'antd';
import './ProductList.css';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch("products.json").then( function(res) {
      return res.json();
    }).then(
      data => this.setState({list: data})
    );
  }

  componentWillUnmount() {
  }

  render() {
    let template = this.state.list.map( (item, index) => (
        <Card className="app-section-card" key={index}>
          <div className="custom-image">
            <img alt="example" width="100%" src={item.url} />
          </div>
          <div className="custom-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Card>
      )
    );

    return (
      <section className="app-section">
        {template}
      </section>
    );
  }
}

export default ProductList;