import Customer from "../../assets/Customer/Customer"
import customerInfos from "@/data/customers.json"

const Customers = () => {

    return (
        <section className="customers__main">

            {
                customerInfos.map((item, index) => (
                    <Customer key={index} {...item}/>
                ))
            }

        </section>
    )
}

export default Customers