import { useState } from "react"
import Customer from "../../assets/Customer/Customer"
import customerInfos from "@/data/customers.json"

const Customers = () => {

    const [isShowCustomer, setIsShowCustomer] = useState('2')

    const changeActiveCustomer = index => {
        setIsShowCustomer(index)
    }

    return (
        <section className="customers__main">

            {
                customerInfos.map((item, index) => (
                    <Customer
                        key={index}
                        {...item}
                        styles={`customers__normal ${isShowCustomer !== item.index
                            ?
                            `hidden cursor-pointer ${isShowCustomer == 1 && item.index == 2
                                ?
                                'customers__hidden-2-left'
                                :
                                isShowCustomer == 3 && item.index == 2
                                    ?
                                    'customers__hidden-2-right'
                                    :
                                    ''
                            }`
                            :
                            `cursor-default customers__active-${item.index}`}`
                        }
                        onClickCustomer={changeActiveCustomer}
                    />
                ))
            }

        </section>
    )
}

export default Customers