import { createContext, useState } from "react";

export const productContext=createContext();
function ProductsProvider(props){
    const [products, setProducts] = useState([
        { id: 1, title: "product1" },
        { id: 2, title: "product2" },
        { id: 3, title: "product3" }
      ]);

      return(
        <productContext.Provider value={products}>

{props.children}
        </productContext.Provider>

      )

}
export default ProductsProvider;