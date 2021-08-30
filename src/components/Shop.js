import React, { useEffect, useState } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { db } from '../Firebase';
import Button from '@material-ui/core/Button';


const Shop = () => {

    const [products, setProducts] = useState([])
    const fetchProducts = async () => {

        db.collection('Products').onSnapshot((snapshot) => {

            const prodData = []
            snapshot.forEach((doc) => {

                prodData.push({ ...doc.data(), id: doc.id })
            })
            setProducts(prodData)
            console.log(prodData);
        })
    }

   

    useEffect(() => {

        fetchProducts()

    }, []);

    

    return (

        

        
       <Router>



        <div>

            <h1>Products</h1>

            <div className="products">

                {products && products.map(product => (

                    <div>

                        <img src={product.ProductImage} />
                        <br />
                        <h2>{product.ProductName}</h2>
                        <h3>{product.ProductDesc}</h3>
                        <h3>R{product.ProductPrice}</h3>

                        <br />


                        <Link >  

                        <Button 
                            
                            style={{ backgroundColor: 'black', color: '#FFFFFF' }}>

            
                            Add to Cart
                            
                        </Button>
                        
                        </Link>


                    </div>

                )
                )

                }

            </div>

        </div>

        </Router>
        
    );
};

export default Shop;