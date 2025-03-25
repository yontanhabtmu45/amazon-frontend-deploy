import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Porduct/ProductCard'
import classes from './Results.module.css'
import Loader from '../../components/Loader/Loader'

function Results() {
  const [results, setResults] = useState([])
  const {categoryName} = useParams()
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res) => {
    setResults(res.data)
    setIsLoading(false)
    
  }).catch((err) => {
    console.log(err); 
    setIsLoading(false)
  })
  }, []);
  


  return (
    <Layout>

      <section>
      <h1 style={{padding: '30px'}}>Results</h1>
      <p style={{padding: '30px'}}>Category / {categoryName}</p>
      <hr />
      {isLoading? (<Loader/>) : (
      <div className={classes.products_container}>
        {results?.map((product) => {
         return  <ProductCard key={product.id} renderAdd={true} Product={product} />
        })}
      </div>
      )}
      </section>


    </Layout>
  )
}

export default Results