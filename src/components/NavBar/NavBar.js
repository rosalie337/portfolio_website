import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavBarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/portfolio' activeStyle>
                        Portfolio
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;