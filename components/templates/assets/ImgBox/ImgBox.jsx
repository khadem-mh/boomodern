
const ImgBox = ({ srcImg, titleHover, textHover, category, styles }) => {

    return (
        <div className={`imgbox__main ${styles}`} data-category={category} >
            <div className="imgbox__picture">
                <img src={`/img/${srcImg}`} alt="box-image" className="imgbox__img" />
            </div>
            <span className="imgbox__title">{titleHover}</span>
            <span className="imgbox__text">{textHover}</span>
        </div>
    )

}

export default ImgBox