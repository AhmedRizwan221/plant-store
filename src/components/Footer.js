import { NavLink } from "react-router-dom";

const Footer = () => {

    return(
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products' >Shop</NavLink>
        </>
    )
}

export default Footer;