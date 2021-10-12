import { getDatabase, ref, get } from 'firebase/database';
import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDataAction} from "../store/reducers/getProductsReducer/getProductsReducer";
import ProductCategory from "../components/productCategory/productCategory";
import productStateInterface from "../interfaces";

const Index:FC = () => {
  const database = getDatabase();
  const dispatch = useDispatch();
  const starCountRef = ref( database, 'products' );
  const products = useSelector((state:productStateInterface) => state.products.productData);

  useEffect( () => {
    get( starCountRef )
      .then( ( snapshot ) => snapshot.exists() ? dispatch(getDataAction(snapshot.val())) : console.log( 'No data available' ) )
      .catch( error => console.error( error )
      );
  }, [] );

  return (
    <div className="w-full grid grid-cols-4 gap-x-4 gap-y-4">
      {products &&
      (Object.keys(products) as Array<keyof typeof products>)
        .map((item:number) => {
          console.log(products[item])
          return <ProductCategory key={item} product={products[item]}/>
        })
      }

    </div>
  );
};

export default Index;
