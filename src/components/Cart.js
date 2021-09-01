import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { db, auth } from "../Firebase";
import { ButtonBase, Grid, Paper, Typography } from '@material-ui/core';


const Cart = () => {

    let user = auth.currentUser
    const [cartList, setCartList] = useState([])

    const fetchCartIterms = async () => {

        try {

            if (user) {
                const cartData = []
                const query = await db.collection("cart").where("uid", "==", user?.uid).get()
                query.forEach((doc) => {

                    console.log(doc.data());
                    cartData.push({ ...doc.data(), id: doc.id })
                })

                setCartList(cartData)
            }
            else {
                alert("Please Login")
            }
        } catch (error) {
            console.log(error.message);
        }
    }



    useEffect(() => {

        fetchCartIterms()

    }, []);


    return (
        <div>

            <h1>Cart</h1>

            <div className="products">
                {cartList && cartList.map(cartItem => (


                    <Grid>
                        <Grid item>

                            <ButtonBase>
                                <img src={cartItem.product.ProductImage} />
                            </ButtonBase>


                        </Grid>
                        <Grid container xm={12}>
                            <Grid container xs item direction="column" spacing={2}>
                                <Grid item xs>


                                    <h1>{cartItem.product.ProductName}</h1>


                                    <h2>{cartItem.product.ProductDesc}</h2>
                                    <h3>R{cartItem.product.ProductPrice}</h3>

                                </Grid>
                            </Grid>


                        </Grid>
                        <Button style={{ backgroundColor: 'blueGrey', color: '#FFFFFF' }}>
                            
                            Remove</Button>

                    </Grid>


                ))}

            </div>


        </div>
    );
};

export default Cart;