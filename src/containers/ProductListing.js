import React from "react";
import { useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state)=>state);
    console.log(products,"123");
    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing