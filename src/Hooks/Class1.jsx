import React, { useState } from 'react'

const MyClass = () => {

    const arraylist = ["sunil", "sai", "mohan", "shannu"];

    const [couter, setCouter] = useState(10);
    const [click, setClick] = useState(0);
    const [data, setData] = useState(arraylist);

    const Increment = () => {
        setCouter(couter + 5);
        setClick(click + 1);
    }

    const Decrement = () => {
        setCouter(couter - 5);
        setClick(click - 1);
    }

    return (
        <div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>

            <div>
                <p> {couter} </p>
                <p> Click {click}</p>
            </div>

            <div>
                {
                    data.map((item,index)=>{
                        return(
                            <p key={index}> {item} </p>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default MyClass;