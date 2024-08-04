import Logo from "../Logo/Logo"
import ListItem from "../ListItem/ListItem";
import Link from "next/link";
//
import { GrContactInfo, GrArticle } from "react-icons/gr";
import { RiCustomerService2Line, RiHome3Line } from "react-icons/ri";
import { MdOutlineContactSupport, MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {

    return (
        <nav className="navbar__parent">
            <ul className="navbar__right">
                <ListItem text="Home" children={<RiHome3Line />} />
                <ListItem text="About" children={<GrContactInfo />} />
                <ListItem text="Services" children={<RiCustomerService2Line />} />
            </ul>
            <Link href="#" className="navbar__logo">
                <Logo />
            </Link>
            <ul className="navbar__left">
                <ListItem text="Blog" children={<GrArticle />} />
                <ListItem text="Contact Us" children={<MdOutlineContactSupport />} />
                <ListItem text="Buy" children={<MdOutlineShoppingBag />} />
            </ul>
        </nav>
    )
}

export default Navbar