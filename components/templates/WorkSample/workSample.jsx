import ImgBox from "@/components/modules/assets/ImgBox/ImgBox"
import datas from "../../../data/db.json"
import { useEffect, useState } from "react"

const WorkSample = () => {

    const [activeCategory, setActiveCategory] = useState('All')
    //categories
    const [categoriesName, setCategoriesName] = useState(['All', 'Branding', 'Print', 'Photography', 'Product'])
    const [allCategories, setAllCategories] = useState(datas)

    return (
        <article className="worksample__main">
            <h2 className="worksample__title">Portfolio review</h2>
            <nav className="worksample__nav">
                <ul className="worksample__ul">
                    {
                        categoriesName.map((item, index) => (
                            <li key={index} className={`worksample__li ${item === activeCategory ? 'worksample__li-active' : ''}`} onClick={() => setActiveCategory(item)}>{item}</li>
                        ))
                    }
                </ul>
            </nav>

            <section className="worksample__picture">
                {
                    activeCategory !== 'All' ?
                        [...allCategories].filter(item => item.category === activeCategory).map((item, index) => (
                            <ImgBox key={index} {...item} />
                        ))
                        :
                        allCategories.map((item, index) => (
                            <ImgBox key={index} {...item} />
                        ))
                }
            </section>

        </article>
    )
}

export default WorkSample