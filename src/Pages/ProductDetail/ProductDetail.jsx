import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Porduct/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);
  console.log(productId);

  return (
    <Layout>
      {isLoading? (<Loader />):(
        <ProductCard key={product.id} flex={true} renderDesc={true} renderAdd={true} Product={product} />
      )}      
      
    </Layout>
  );
}

export default ProductDetail;
