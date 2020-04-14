import React from 'react';
import { REMOVE_FROM_CART } from '../../redux/actions/cartAction';
import { connect } from 'react-redux';

const Cart = (props) => {
    const {removeFromCart,cart } = props
    console.log(props);
    return (
        <div>
            <h3>This is Cart</h3>
            {
                cart.map(id => <li> {id} <button onClick={()=> removeFromCart(id)}> Remove</button> </li> )
            }

        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart:state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart: REMOVE_FROM_CART
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)