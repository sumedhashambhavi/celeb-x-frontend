import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/home' activestyle="true">
						Home
					</NavLink>
					<NavLink to='/about-us' activestyle="true">
						About
					</NavLink>
					<NavLink to='/contact-us' activestyle="true">
						Contact
					</NavLink>







				</NavMenu>

			</Nav>
		</>
	);
};

export default Navbar;
