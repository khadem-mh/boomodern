import Link from "next/link";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Article = ({ title, text, srcImg }) => {

    useEffect(() => {

        const boxes = document.querySelectorAll('.article__link')

        boxes.forEach(box => {

            const handleMouseMove = (e) => {
                const rect = box.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / centerY * 10;
                const rotateY = (x - centerX) / centerX * 10;

                box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            }

            const handleMouseLeave = () => {
                box.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`
            }

            box.addEventListener('mousemove', handleMouseMove)
            box.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                box.removeEventListener('mousemove', handleMouseMove)
                box.removeEventListener('mouseleave', handleMouseLeave)
            }

        })

    }, [])

    return (
        <div className="article__main">
            <img src={srcImg} alt="article-image" className="article__img" />
            <Link href="#" className="article__link">
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

export default Article;
