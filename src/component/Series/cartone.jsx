import React from 'react'
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

    // const Cart1 = [
    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },

    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },


    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },


    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },

    // ]


    // const Cart1 = [
    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },

    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },


    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },


    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },

    // ]

    // const Cart1 = [
    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },

    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },


    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },


    //     {
    //         Image: "/src/assets/pixarbest.jpeg",
    //         Title: "Pixar Best",
    //         Catagory: "The ultimate best album of Pixar music March t2o th CD released digital distribution"

    //     },

    // ]
    // <a aria-label="&quot;'Cinderella (live-action version)' will be broadcast on Friday Road Show from 9:00 on Friday, April 26th!" class="skip-link-style" title="&quot;'Cinderella (live-action version)' will be broadcast on Friday Road Show from 9:00 on Friday, April 26th!" href="https://www.disney.co.jp/studio/news/20240329_01">  <div class="title"> <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“Cinderella (live-action version)” will be broadcast on Friday Road Show from 9:00 on Friday, April 26th!</font></font></h2>  </div> </a>


    return (
        <>
            <div className={style.Container} style={{ display: 'flex', gap: "20px" }}>
                {Carts.map((Element) => {(
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


// Cards.map((object)=>{

//     return(
//       <CardComponent 
//       Img = {object.Img}
//       title ={object.title}
//       genre ={object.genre}/>
//     )