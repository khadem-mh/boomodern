
const ImgBox = ({ srcImg, titleHover, textHover, category }) => {

    return (
        <li className="imgbox__main" data-category={category} >
            <div className="imgbox__picture">
                <img src={`/img/${srcImg}`} alt="box-image" className="imgbox__img" />
            </div>
            <span className="imgbox__title">{titleHover}</span>
            <span className="imgbox__text">{textHover}</span>
        </li>
    )

}

export default ImgBox