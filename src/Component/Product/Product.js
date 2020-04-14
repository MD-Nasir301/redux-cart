import React from 'react';


const Product = (props) => {
    const {addToCart, product} = props
    return (
        <div style={{borderBottom:'1px solid red'}}>
            <h1> {product.name} </h1>
            <button onClick={()=> addToCart(product.id)}>add to cart</button>
        </div>
    );
};

export default Product;