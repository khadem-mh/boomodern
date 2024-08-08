
const ImgBox = ({ srcImg, titleHover, textHover }) => {

    return (
        <li className="imgbox__main">
            <div className="imgbox__picture">
                <img src={`/img/${srcImg}`} alt="box-image" className="imgbox__img" />
            </div>
            <span className="imgbox__title">{titleHover}</span>
            <span className="imgbox__text">{textHover}</span>
        </li>
    )

}

export default ImgBox