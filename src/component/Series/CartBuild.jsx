

const Grid1Card  = (props) => {

    const {image, title, category } = props

    return (
        <>
            <div>
             <img src={image} alt="" />
             <h2>{title}</h2>  
             <h3>{category}</h3>
            </div>

        </>
    )

}

export default Grid1Card 