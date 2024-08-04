import Logo from "../Logo/Logo"
//
import { GrContactInfo, GrArticle } from "react-icons/gr";
import { RiCustomerService2Line, RiHome3Line } from "react-icons/ri";
import { MdOutlineContactSupport, MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {

    return (
        <nav className="navbar__parent">
            <ul className="navbar__right">
                <li className="navbar__li"><a href="#"><RiHome3Line className="navbar__item-icon"/>Home</a></li>
                <li className="navbar__li"><a href="#"><GrContactInfo className="navbar__item-icon"/>About</a></li>
                <li className="navbar__li"><a href="#"><RiCustomerService2Line className="navbar__item-icon"/>Services</a></li>
            </ul>
            <a href="#" className="navbar__logo">
                <Logo />
            </a>
            <ul className="navbar__left">
                <li className="navbar__li"><a href="#"><GrArticle className="navbar__item-icon"/>Blog</a></li>
                <li className="navbar__li"><a href="#"><MdOutlineContactSupport className="navbar__item-icon"/>Contact Us</a></li>
                <li className="navbar__li"><a href="#"><MdOutlineShoppingBag className="navbar__item-icon"/>Buy</a></li>
            </ul>
        </nav>
    )
}

export default Navbar