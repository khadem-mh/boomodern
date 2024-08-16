import Customer from "../../assets/Customer/Customer"
import customerInfos from "@/data/customers.json"

const Customers = () => {

    return (
        <div className="customers__main">

            <h2 className="customers__title">Customer reviews</h2>

            <div className="customers__slider">
                {
                    customerInfos.map((item, index) => (
                        <Customer key={index} {...item} />
                    ))
                }
            </div>

        </div>
    )
}

export default Customers