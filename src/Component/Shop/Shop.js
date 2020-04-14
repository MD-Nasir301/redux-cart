import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartAction';
import { connect } from 'react-redux';

const Shop = (props) => {
    const {product, addToCart} = props
    console.log(props);
    return (
        <div>
            <h1>This is shop</h1>
            {
                product.map(pd => <Product product={pd} key={pd.id} addToCart={addToCart}></Product> )
            }
        </div>
    );
};

const mapStateToProps = state => {
   return {
      cart :state.cart,
     product:state.product
   }
}
const mapDispatchToProps = {
    addToCart : addToCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop) ;