import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './Cart';
import Shop from './Shop';
import SignUp from './SignUp';

const NavBar = () => {
    return (

        <Router>
            <header className="header">
                <nav className="navBar">
                    <a className="logo-nav">LOGO</a>
                    <ul className="menu-nav">
                        <Link className="link-nav" to="/">Home</Link>
                        <Link className="link-nav" to="/cart">Cart</Link>
                        <Link className="link-nav" to="/signUp">SignUp</Link>
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
            </Switch>

        </Router>

    );
};

export default NavBar;