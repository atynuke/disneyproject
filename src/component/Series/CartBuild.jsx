

const Cart1 = (Props) => {

    // const {Image, Title, Category } = Props

    return (
        <>
            <div className={style.ContainDiv} >
             <img src={Props.image} alt="" />
             <h2>{Props.title}</h2>  
             <h3>{Props.category}</h3>
            </div>

        </>
    )

}

export default Cart1