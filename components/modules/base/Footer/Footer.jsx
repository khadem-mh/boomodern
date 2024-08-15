import Logo from "../Logo/Logo"
import SocialItem from "../../assets/SocialItem/socialItem";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
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
                    <SocialItem text={"02191030926"} children={<MdPhone />} />
                    <SocialItem text={"info@sabzlearn.ir"} children={<HiOutlineMail />} />
                    <SocialItem text={"@sabzlearn_support"} children={<FaInstagram />} />
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