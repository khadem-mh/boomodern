const Customers = ({ children }) => {
    return (
        <div className="customers__main">
            <h2 className="customers__title">Customer reviews</h2>

            <div className="customers__slider">
                {
                    children
                }
            </div>
        </div>
    )
}

export default Customers