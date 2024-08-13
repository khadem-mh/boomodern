import Article from "../../assets/Article/Article"
import datas from "@/data/latest-articles.json"

const LatestContent = () => {

    return (
        <div className="latest-content__main">

            <h2 className="latest-content__title">Latest Content</h2>

            <div className="latest-content__articles">
                {
                    datas.map((item, index) => (
                        <Article key={index} {...item} />
                    ))
                }
            </div>

            <button className="latest-content__btn">View latest content</button>

        </div>
    )
}

export default LatestContent