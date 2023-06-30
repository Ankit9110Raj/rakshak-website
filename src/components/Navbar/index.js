import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
//NavBtn,
//NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
    <div className='logo'><img src="./images/logo4.gif" width={200} height={100} /></div>
		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
    <NavLink to='/Planes' activeStyle>
			Planes
		</NavLink>
		<NavLink to='/subsystem' activeStyle>
			Subsystem
		</NavLink>
		<NavLink to='/competition' activeStyle>
			Competition
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
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
