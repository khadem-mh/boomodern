
const Customer = ({imgSrc, name, desc}) => {

    return (
        <div>
            <div>
                <span></span>
                <p>{desc}</p>
                <p>- {name}</p>
            </div>
            <div>
                <img src={`img/${imgSrc}`} alt="customer-image" />
            </div>
        </div>
    )
}

export default Customer