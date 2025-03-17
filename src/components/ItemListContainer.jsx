import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState ([]) 

    
    useEffect(()=>{
        getProducts()
        .then((res)=> setData(res))
        .catch((error)=> console.log (error) )
    },[])    
    
    console.log (data)

    return (
        <main>
            <div className="greeting">
                <h1>
                    {greeting}
                </h1>
            </div>

            <div>
               <ItemList data={data}/>
            </div>

        </main>

    )
}

export default ItemListContainer
