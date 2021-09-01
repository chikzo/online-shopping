import React, { useEffect, useState } from 'react';
import { Link, Switch, Route, BrowserRouter as Router, useHistory } from 'react-router-dom';
import {db, auth } from '../Firebase';
import Button from '@material-ui/core/Button';



const Shop = () => {

    const [products, setProducts] = useState([])
    let history = useHistory();
    let user = auth.currentUser

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

    const addToCart = async (product) => {

        try {

            if(user){

                db.collection("cart").add({
                    uid: user.uid,
                    product
                }).then(alert("Item Added To Cart")).catch((error) => {

                    console.log(error.message);
                })

            }
            else{

                alert("Please Login")
            }

        } catch (error) {
            console.log(error.message);
        }

    }

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

                            onClick={() => addToCart(product)}
                            
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