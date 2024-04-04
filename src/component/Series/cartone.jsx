import Grid1Card  from './CartBuild.jsx'
import style from './cartone.module.css'



const GridOne = () => {

    const gridOne = [
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
                {gridOne.map((Element) => {
                    return(
                        <Grid1Card 

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

export default GridOne


