import Cart1 from './CartBuild.jsx'
import style from './cartone.module.css'



const CartBond = () => {

    const Carts = [
        {
            Image: "/src/assets/pixarbest.jpeg",
            Title: "Pixar Best",
            Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

        },

        {
            Image: "/src/assets/pixarbest.jpeg",
            Title: "Pixar Best",
            Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

        },


        {
            Image: "/src/assets/pixarbest.jpeg",
            Title: "Pixar Best",
            Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

        },


        {
            Image: "/src/assets/pixarbest.jpeg",
            Title: "Pixar Best",
            Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

        },

    ]

    return (
        <>
            <div className={style.Container} style={{ display: 'flex', gap: "20px" }}>
                {Carts.map((Element) => {
                    return(
                        <Cart1
                            image={Element.Image}
                            title={Element.Title}
                            catagory={Element.Catagory}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default CartBond