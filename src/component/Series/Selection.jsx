import React from 'react';
import style from './Selection.module.css';


export default function Select(props) {
    const { Image, Title } = props

    const Data = [
        {
            Image: "./src/assets/pixarbest.jpeg",
            Title: "Pixar Best",
            Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

        },

        {
            Image: "./src/assets/pixarbest.jpeg",
            Title: "Pixar Best",
            Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"
        },

        {
            Image: "./src/assets/pixarbest.jpeg",
            Title: "Pixar Best",
            Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"
        },

        {
            Image: "./src/assets/pixarbest.jpeg",
            Title: "Pixar Best",
            Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"
        },

    ];


    return ( 
        <>

            <div className={style.cartoonType-wrap}>
                <img src={cartoonImage} alt="cartoonImage" />
                <h2>{cartoonTitle}</h2>
            </div>
        </>
    );


    return (
        
        <>
            <div style={{ display: "flex", gap: "20px" }} />
            <div className={ style.SelectData}>
                {Data.map((Element) => {
                    return (
                        <div
                            Image={Element.Image}
                            title={Element.title}
                            Catagory={Element.Catagory}
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
