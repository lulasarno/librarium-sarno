import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState ([]) 
    const [loading, setLoading] = useState(false) 
    const {categoryId} = useParams()

    
    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> {
            if(categoryId){
                setData(res.filter((item) => item.category === categoryId))
            }else{
                setData(res)
            }
        })
    },[categoryId])    
    
    console.log (data)

    return (
        <main>
            <div className="greeting">
                <p>
                    {greeting}{categoryId && <span style={{textTransform:'capitalize'}} > {categoryId}</span>}
                </p>
            </div>
            <div>
               <ItemList data={data}/>
            </div>

        </main>

    )
}

export default ItemListContainer
