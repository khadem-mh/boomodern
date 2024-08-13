import { useState } from "react"
import Customer from "../../assets/Customer/Customer"
import customerInfos from "@/data/customers.json"

const Customers = () => {

    const [isShowCustomer, setIsShowCustomer] = useState('2')

    const changeActiveCustomer = index => {
        setIsShowCustomer(index)
    }

    return (
        <div className="customers__main">

            <h2 className="customers__title">Customer reviews</h2>

            <div className="customers__slider">
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
            </div>

        </div>
    )
}

export default Customers