import SelectCar from './SelectCart1';


const CartoonType = (props) => {

    const {title, category, image} = props

    return ( 
        <>

            <div className={style.TypeWrap}>
                <img src={image} alt="Image" />
                <h2>{title}</h2>
                <p>{category}</p>
            </div>
        </>
    )
    
}

export default CartoonType