import { useContext } from "react";
import { productContext } from "../context/ProductsContext";

function Navbar() {

    const value = useContext(productContext)
  return (
    <div>
        <h1> products count: {value.length}</h1>
    </div>
  );
}
export default Navbar;
