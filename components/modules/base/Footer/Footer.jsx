import Logo from "../Logo/Logo"
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {

    return (
        <footer className="footer__main">

            <header className="footer__top">
                <div className="footer__logos">
                    <Logo />
                    <div>
                        <FaInstagram />
                        <FaTelegramPlane />
                    </div>
                </div>
                <div className="footer__links">
                    <p> <MdPhone /> 02191030926</p>
                    <p><HiOutlineMail /> info@sabzlearn.ir</p>
                    <p><FaInstagram /> @sabzlearn_support</p>
                </div>
            </header>

            <footer>
                <p>All material and intellectual rights of the site are reserved for Sabz Learn.</p>
                <p>Made with ❤️ in Boomodern</p>
            </footer>

        </footer>
    )
}

export default Footer