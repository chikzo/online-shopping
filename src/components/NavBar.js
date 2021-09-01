import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './Cart';
import Shop from './Shop';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Button } from '@material-ui/core';
import { auth } from '../Firebase';

const NavBar = () => {

    function logout(){

        auth.signOut().then(

            alert("Signed Out")
        )
    }

    return (

        <Router>
            <header className="header">
                <nav className="navBar">
                    <a className="logo-nav">LOGO</a>
                    <ul className="menu-nav">
                        <Link className="link-nav" to="/">Home</Link>
                        <Link className="link-nav" to="/cart">Cart</Link>
                        <Link className="link-nav" to="/signIn">Login</Link>
                        <Button onClick={() => logout()}>
                            Logout
                        </Button>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Route exact path="/">
                     <Shop></Shop>
                </Route>

                <Route path="/cart" exact>
                    <Cart></Cart>
                </Route>

                <Route  path="/signUp">
                     <SignUp></SignUp>
                </Route>

                <Route  path="/signIn">
                     <SignIn></SignIn>
                </Route>
            </Switch>

        </Router>

    );
};

export default NavBar;