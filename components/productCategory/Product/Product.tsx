import React, {FC} from 'react';
import {productCategoryPropsInterface} from "../../../interfaces";

interface imageInterface {
    url: string
}


const Product:FC<productCategoryPropsInterface> = ({product}) => {
    return (
        <div className='shadow-sm p-2.5'>
            <h3 className='font-bold'>{product.title ?? ''}</h3>
            <p className='text-sm text-gray-500 mt-2'>{product.ingredients.join(' ') ?? ''}</p>
        </div>
    );
};

export default Product;
