import ImgBox from "@/components/modules/assets/ImgBox/ImgBox"
import datas from "../../../data/db.json"
import { useEffect, useState } from "react"

const WorkSample = () => {

    const [activeCategory, setActiveCategory] = useState('All')
    //categories
    const [categoriesName, setCategoriesName] = useState(['All', 'Branding', 'Print', 'Photography', 'Product'])
    const [allCategories, setAllCategories] = useState(datas)
    const [brandings, setBrandings] = useState([])
    const [prints, setPrints] = useState([])
    const [photographies, setPhotographies] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {

        const allBranding = [...datas].filter(item => item.category === "Branding")
        const allProducts = [...datas].filter(item => item.category === "Products")
        const allPhotography = [...datas].filter(item => item.category === "Photography")
        const allPrint = [...datas].filter(item => item.category === "Print")

        setBrandings(allBranding)
        setProducts(allProducts)
        setPhotographies(allPhotography)
        setPrints(allPrint)

    }, [])

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
                    allCategories.map((item, index) => (
                        <ImgBox key={index} {...item} />
                    ))
                }
            </section>

        </article>
    )
}

export default WorkSample