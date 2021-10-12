import React, {FC} from 'react';
import Product from "./Product/Product";
import {productCategoryPropsInterface} from "../../interfaces";

const ProductCategory:FC<productCategoryPropsInterface> = (props) => {
    const {product} = props;
    return (
        <>
            <div className=''>
                   <Product key={Math.random() * 12} product={product}/>
            </div>
        </>

    );
};

export default ProductCategory;
