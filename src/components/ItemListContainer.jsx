const ItemListContainer = (props) => {
    console.log (props)
    return (
        <div className="greeting">
            <h1>
                {props.greeting}
            </h1>
        </div>
    )
}

export default ItemListContainer
