import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
import { DataContext } from "../DataProvider/DataProvider";

function Product() {
  const [{ products, searchTerm }, dispatch] = useContext(DataContext); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: res.data,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [dispatch]);

  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Product List */}
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((singleProduct) => (
              <ProductCard
                Product={singleProduct}
                renderAdd={true}
                key={singleProduct.id}
              />
            ))
          ) : (
            <p className={classes.no_results}>No products found</p>
          )}
        </section>
      )}
    </>
  );
}

export default Product;