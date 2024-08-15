
const SocialItem = ({ children, text }) => {

    return (
        <div className="footer__contact">
            {children}
            <span>{text}</span>
        </div>
    )
}

export default SocialItem