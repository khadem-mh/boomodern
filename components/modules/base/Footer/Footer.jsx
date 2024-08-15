import { forwardRef } from "react";
import Logo from "../Logo/Logo"
import SocialItem from "../../assets/SocialItem/socialItem";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Footer = forwardRef((props, ref) => {

    return (
        <footer className="footer__main" ref={ref}>

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
                    <SocialItem text={"09031335939"} children={<MdPhone />} />
                    <SocialItem text={"khadem13359@gmail.com"} children={<HiOutlineMail />} />
                    <SocialItem text={"@khadem-mh"} children={<FaInstagram />} />
                </div>
            </header>

            <footer className="footer__bottom">
                <p className="footer__desc">All material and intellectual rights of the site are reserved for Boomodern.</p>
                <div className="footer__my">
                    <p> Made with ❤️ on Boomerang by </p>
                    <a href="https://github.com/khadem-mh" target="_blank">
                        <img src="img/khadem.png" alt="my" className="footer__myimg" />
                    </a>
                </div>
            </footer>

        </footer>
    )
})

export default Footer