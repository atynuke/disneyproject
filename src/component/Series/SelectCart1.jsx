import React from 'react';
import style from './SelectCart1.module.css';
import CartoonType from './CartoonType';


export default function SelectCart1() {

    const Cart1 = [
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

    ];


    // return ( 
    //     <>

    //         <div className={style.cartoonTypeWrap}>
    //             <img src={cartoonImage} alt="cartoonImage" />
    //             <h2>{cartoonTitle}</h2>
    //         </div>
    //     </>
    // );


    return (

        <>
            <div className={style.SelectCart} style={{ display: "flex", gap: "20px" }} >
                {Cart1.map((Element) => {
                    return (
                        <SelectCart1
                            image={Element.Image}
                            title={Element.Title}
                            catagory={Element.Catagory}
                        />
                    );
                })}
            </div>



            {/* cards.map ((object))=>{
                        return(
                            img = {Object.img}
                            img = {Object.title}
                            img = {Object.genre}
                        )
                    } */}



        </>

    );

}
