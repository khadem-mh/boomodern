import { useState, useEffect } from "react";
import Logo from "../Logo/Logo"
import ListItem from "../ListItem/ListItem";
import Link from "next/link";
//
import { GrContactInfo, GrArticle } from "react-icons/gr";
import { RiCustomerService2Line, RiHome3Line } from "react-icons/ri";
import { MdOutlineContactSupport, MdOutlineShoppingBag } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [isClient, setIsClient] = useState(false)
    const [isShowNavbar, setIsShowNavbar] = useState("")

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {

        resizePageHandler()

        const handleResize = () => resizePageHandler()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [isClient && window.innerWidth])

    const resizePageHandler = () => window.innerWidth <= 992 ? setIsShowNavbar('navbare__hidden') : setIsShowNavbar('navbare__show')

    return (
        <nav className={`navbar__parent ${isShowNavbar}`}>
            <ul className="navbar__right">
                <ListItem text="Home" children={<RiHome3Line />} />
                <ListItem text="About" children={<GrContactInfo />} />
                <ListItem text="Services" children={<RiCustomerService2Line />} />
            </ul>

            <div className="navbar__midd">
                <div className="navbar__close" onClick={() => setIsShowNavbar(prev => !prev)}>
                    <IoClose />
                </div>
                <Link href="#" className="navbar__logo">
                    <Logo />
                </Link>
            </div>

            <ul className="navbar__left">
                <ListItem text="Blog" children={<GrArticle />} />
                <ListItem text="Contacts" children={<MdOutlineContactSupport />} />
                <ListItem text="Buy" children={<MdOutlineShoppingBag />} />
            </ul>
        </nav>
    )
}

export default Navbar