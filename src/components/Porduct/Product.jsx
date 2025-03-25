import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css'
import Loader from '../Loader/Loader';

function Product() {
    const [Products, setProducts] = useState([]);
      const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(res.data)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err);
            setIsLoading(false)
        })
    }, []);


  return (
    <>
    {
        isLoading? (<Loader />):(
    <section className={classes.products_container}>
        {
            Products.map((singleProduct) => {
            return    <ProductCard Product={singleProduct} renderAdd={true} key={singleProduct.id} />
            })
        }
    </section>)
    }

    </>


  )
}

export default Product