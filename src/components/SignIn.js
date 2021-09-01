import { Button, Link } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import {db, auth } from '../Firebase';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import SignUp from './SignUp';
import { useHistory } from 'react-router';


const SignIn = () => {

    const {register , handleSubmit, formState : {errors}} = useForm()
    let history = useHistory()
    const onSubmit = async (data) =>{
        const{email, password} = data

        try{

            const res = await auth.signInWithEmailAndPassword(email ,password).then( () =>{

                alert("Welcome Back")
                history.push("home") 
            }
            )
               
        }catch(error){
            console.log(error)
        }
    }

    function signUp(){
        history.push("/signUp")
    }

    return (
        <div>
            <h1>Sign In</h1>

<Container maxWidth="sm ">
<form onSubmit = {handleSubmit(onSubmit)} noValidate>

            <TextField
                        id="standard-basic"
                        label="Email"
                        required
                        fullWidth
                        autoFocus
                        {...register("email", { required: { value: true, message: "Please Enter Your email" } })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <TextField
                        id="standard-basic"
                        label="Password"
                        required
                        fullWidth
                        autoFocus
                        type="password"
                        {...register("password", { required: { value: true, message: "Please Enter Your Password" } })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    
                    <Button type="submit"
                        style={{ backgroundColor: "black", color: "#FFFFFF" }}>
                        Login
                    </Button>
            <Link href="signUp" onClick={()=> signUp}> Don't Have An Account? SignUp</Link>
            </form>
</Container>
            
        </div>
    );
};

export default SignIn;