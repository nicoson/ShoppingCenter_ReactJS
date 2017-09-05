import React, { Component } from 'react';
import { Card } from 'antd';
import './ProductList.css';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    let template = [1,2,3,4,5,6,7,8,9,10].map( index => (
        <Card className="app-section-card" key={index}>
          <div className="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </div>
          <div className="custom-card">
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
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