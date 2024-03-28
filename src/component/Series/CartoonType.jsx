import SelectCartoon from './Selection';
import style from './Selection.module.css';

const CartoonType = () => {

    return ( 
        <>

            <div className={style.TypeWrap}>
                <img src={Image} alt="Image" />
                <h2>{Title}</h2>
                <p>{Category}</p>
            </div>
        </>
    )
    
}

export default CartoonType