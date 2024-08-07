const DescriptionBox = ({ title, text, srcVideo }) => {

    return (
        <div className="descbox__main">
            <div className="descbox__video">
                <video src={srcVideo} loop autoPlay muted></video>
            </div>
            <h3 className="descbox__title">{title}</h3>
            <p className="descbox__text">{text}</p>
        </div>
    )
}

export default DescriptionBox