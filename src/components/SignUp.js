import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { db, auth } from "../Firebase";
import { Link } from "@material-ui/core";
import { Switch } from "react-router-dom";
import SignIn from "./SignIn";
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }} = useForm();

    let history = useHistory();
    
    const onSubmit = async (data) => {

        const {name , email , password , contact} = data
        
        
        try{
            const res = await auth.createUserWithEmailAndPassword(email , password).then(
                
                alert("Thank you for registering")
            )
            
            const user = res.user
            db.collection('users').doc(user.uid).set({
                uid: user.uid,
                name,
                email,
                contact
            }).then(console.log("Profile Set!!"))
                
        }catch(error){
                console.error(error);
                alert(error.message)
        }

    };

    function signIn(){

        history.push("/signIn")
    }

    return (

        
        <Container maxWidth="sm">
            <div>
                <h1>SignUp</h1>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <TextField
                        id="standard-basic"
                        label="Name"
                        required
                        fullWidth
                        autoFocus
                        {...register("name", { required: { value: true, message: "Please Enter Your Name" } })}
                    />

                    {errors.name && <p>{errors.name.message}</p>}

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
                    <TextField
                        id="standard-basic"
                        label="Contact"
                        required
                        fullWidth
                        autoFocus
                        {...register("contact" , { required: { value: true, message: "Please Enter Your Contact No" } })}
                    />

                    {errors.contact && <p>{errors.contact.message}</p>}

                    <Button type="submit"
                        style={{ backgroundColor: "black", color: "#FFFFFF" }}>
                        Sign Up
                    </Button>
                    
                    <Link href="signIn" onClick={()=> signIn}> Have An Account? Login</Link>

                      
                </form>
            </div>
        </Container>
    );
};

export default SignUp;
<h1>SignUp</h1>;
