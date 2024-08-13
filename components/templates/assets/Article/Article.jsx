import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from "react";

const Article = ({ title, text, srcImg }) => {

    useEffect(() => {
        const boxes = document.querySelectorAll('.article__link');

        const handleMouseMove = (e, box) => {
            const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * 10;
            const rotateY = (x - centerX) / centerX * 10;

            box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = (box) => {
            box.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        };

        boxes.forEach(box => {
            box.addEventListener('mousemove', (e) => handleMouseMove(e, box));
            box.addEventListener('mouseleave', () => handleMouseLeave(box));
        });

        return () => {
            boxes.forEach(box => {
                box.removeEventListener('mousemove', (e) => handleMouseMove(e, box));
                box.removeEventListener('mouseleave', () => handleMouseLeave(box));
            });
        };
    }, []);

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
