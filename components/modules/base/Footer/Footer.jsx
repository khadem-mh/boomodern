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
                    <div className="footer__boomodern">
                        <Logo />
                    </div>
                    <div className="footer__icons">
                        <FaInstagram />
                        <FaTelegramPlane />
                    </div>
                </div>
                <div className="footer__links">
                    <div className="footer__contact">
                        <MdPhone />
                        <span>02191030926</span>
                    </div>
                    <div className="footer__contact">
                        <HiOutlineMail />
                        <span>info@sabzlearn.ir</span>
                    </div>
                    <div className="footer__contact">
                        <FaInstagram />
                        <span>@sabzlearn_support</span>
                    </div>
                </div>
            </header>

            <footer className="footer__bottom">
                <p>All material and intellectual rights of the site are reserved for Sabz Learn.</p>
                <p>Made with ❤️ in Boomodern</p>
            </footer>

        </footer>
    )
}

export default Footer