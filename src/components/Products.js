import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

export default class Products extends Component {
  render() {
    const { productsInfos } = this.props;
    return (
      <div>
        {
          !productsInfos.length > 0
            ? <p>Nenhum produto foi encontrado</p>
            : productsInfos.map((element) => (
              <Product { ...this.props } productInfo={ element } key={ element.id } />
            ))
        }
      </div>
    );
  }
}

Products.propTypes = {
  productsInfos: PropTypes.array,
}.isRequired;