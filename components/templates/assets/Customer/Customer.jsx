
const Customer = ({imgSrc, name, desc}) => {

    return (
        <div className="customer__main">
            <div className="customer__left">
                <img src="img/quote.png" alt="quote" className="customer__quote"/>
                <p className="customer__desc">{desc}</p>
                <p className="customer__name">- {name}</p>
            </div>
            <div className="customer__right">
                <img src={`img/${imgSrc}`} alt="customer-image" />
            </div>
        </div>
    )
}

export default Customer