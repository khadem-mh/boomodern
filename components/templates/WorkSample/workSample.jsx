import ImgBox from "@/components/templates/assets/ImgBox/ImgBox"
import datas from "@/data/db.json"
import { useState } from "react"

const WorkSample = () => {

    const [activeCategory, setActiveCategory] = useState('All')
    //categories
    const categoriesName = ['All', 'Branding', 'Print', 'Photography', 'Product'];

    const handleFilteredDatas = activeItemText => {
        setActiveCategory(activeItemText)

        const datasFilter = [...datas].filter(item => activeItemText === item.category ? item : activeItemText === 'All' && item)
    }

    return (
        <article className="worksample__main">
            <h2 className="worksample__title">Portfolio review</h2>
            <nav className="worksample__nav">
                <ul className="worksample__ul">
                    {
                        categoriesName.map((item, index) => (
                            <li key={index} className={`worksample__li ${item === activeCategory ? 'worksample__li-active' : ''}`} onClick={() => handleFilteredDatas(item)}>{item}</li>
                        ))
                    }
                </ul>
            </nav>

            <section className="worksample__picture">
                {
                    datas.map((item, index) => (
                        <ImgBox {...item} key={index} styles={`worksample__normal ${item.category !== activeCategory && activeCategory !== 'All' ? 'hidden' : ''}`} />
                    ))
                }
            </section>

        </article>
    )
}

export default WorkSample