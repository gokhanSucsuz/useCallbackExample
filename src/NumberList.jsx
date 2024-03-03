/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export default function NumberList({ getItems, theme }) {
    useEffect(() => {
        setItems(getItems())
        console.log("Updating Items")
    }, [getItems])
    const [items, setItems] = useState([])
    return (
        <>
            {
                items.map(item =>
                    <div
                        style={theme}
                        key={item}
                        className="text-center"
                    >{item}</div>)
            }
        </>
    )
}