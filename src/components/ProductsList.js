import { useContext } from "react";
import { productContext } from "../context/ProductsContext";

function ProductsList() {

    const products = useContext(productContext)

  return (
    <div className="products-list">
      {products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
}
export default ProductsList;
