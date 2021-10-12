export default interface productStateInterface {
    products: {
        productData: []
    }
}

export interface productCategoryPropsInterface {
    product: {
        'title': string;
        "ingredients" : any[];
        "size": {
            "large": {
                "bgu": any[];
                "excerpt": string;
                "image": string;
                "image_srcset": string;
                "price": string;
                "slim": {
                    "bgu": any[];
                    "excerpt": string;
                    "image": string;
                    "image_srcset": string;
                    "price": string;
                }
            },
            "medium": {
                "bgu": any[];
                "excerpt": string;
                "image": string;
                "image_srcset": string;
                "price": string;
                "slim": {
                    "bgu": any[];
                    "excerpt": string;
                    "image": string;
                    "image_srcset": string;
                    "price": string;
                }
            },
            "small": {
                "bgu": any[];
                "excerpt": string;
                "image": string;
                "image_srcset": string;
                "price": string;
            }
        }
    };
}

export interface productDataInterface {
    productData: any[];
}
