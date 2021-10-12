import {EventActionEnum, GetProductAction} from "./types";
import {productDataInterface} from "../../../interfaces";

const defaultState = {
    productData: [],
};

export const getProductsReducer = ( state:productDataInterface = defaultState, action:GetProductAction ) => {
    switch ( action.type ) {
        case EventActionEnum.GET_DATA:
            return {  productData: [ ...action.payload ]};
        default:
            return { ...state };
    }
};

export const getDataAction = ( payload:productDataInterface ) => ( { type: EventActionEnum.GET_DATA, payload } );
