import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Article = ({ title, text }) => {

    return (
        <div className="article__main">
            <Link href="#" className="article__Link">
                <h3 className="article__title">{title}</h3>

                <p className="article__text">{text}</p>

                <div className="article__footer">
                    <span className="article__btn">read more</span>
                    <FaArrowRightLong className="article__arrow" />
                </div>
            </Link>
        </div>
    )
}

export default Article