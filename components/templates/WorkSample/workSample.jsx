import ImgBox from "@/components/modules/assets/ImgBox/ImgBox"
import datas from "../../../data/db.json"
import { useEffect, useState } from "react"

const WorkSample = () => {

    const [allDatas, setAllDatas] = useState([])
    const [activeCategory, setActiveCategory] = useState('All')
    //categories
    const categoriesName = ['All', 'Branding', 'Print', 'Photography', 'Product'];

    useEffect(() => {
        setAllDatas(datas)
    }, [])

    const handleFilteredDatas = activeItemText => {

        setActiveCategory(activeItemText)

        const datasFilter = [...datas].filter(item => activeItemText === item.category ? item : activeItemText === 'All' && item)

        setAllDatas(datasFilter)
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
                    allDatas.map((item, index) => (
                        <div key={index} className={`item ${activeCategory ? 'hidden' : ''}`}>
                            <ImgBox {...item} />
                        </div>
                    ))
                }
            </section>

        </article>
    )
}

export default WorkSample