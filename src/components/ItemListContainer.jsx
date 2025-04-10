import { useEffect, useState } from "react"
import { getProducts, productos } from "../mock/asyncData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, where, query, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState ([]) 
    const [loading, setLoading] = useState(false) 
    const {categoryId} = useParams()

    useEffect(()=>  {
        setLoading(true) 
        const productCollection = categoryId 
        ? query(collection(db,"libros"), where("category","==", categoryId))
        : collection(db, "libros")

        getDocs(productCollection)
        .then((res)=>{
            const list = res.docs.map((doc)=> {
                return{ 
                    id:doc.id, 
                    ...doc.data()
                }
            })
            setData(list)
        }) 
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])


    return (
        <main>
            <div className="greeting">
                <p>
                    {greeting}{categoryId && <span style={{textTransform:'capitalize'}} > {categoryId}</span>}
                </p>
            </div>
            <div>
               {loading ? <LoaderComponent/> : <ItemList data = {data}/>}
               
            </div>

        </main>

    )
}

export default ItemListContainer
