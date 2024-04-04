import React from "react";
import Grid2Card from "./grid2Card";
import style from "./cartone.module.css";

const GridTwo = () => {
  const gridtwo = [
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/magazine_240404_special_1200_677_21337e68.jpeg?region=0,1,1200,675&width=320",
      title:
        "Perfect for spring 2024 fashion trends! Check out the recommended bags in “Disney Store Magazine” <Disney Store/Disney Store.jp>",
    },
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/img_20240404_01_twst_1200_677_20bba00e.jpeg?region=0,1,1200,675&width=320",
      title: `"Disney Twisted Wonderland Capsule Acrylic Charm" will be available from Bandai's capsule toy "Gashapon" from the 5th week of April!`,
    },
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/wtpjp-1200-675_66d70502.png?region=0,0,1200,675&width=320",
      title: `New musical "Disney Winnie the Pooh" Japan premiere tour with 76 performances in 10 cities nationwide!`,
    },
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/passportcases_768x432_8f207f48.jpeg?region=0,0,768,432&width=320",
      title: `[Passport case giveaway campaign underway] Let's go to Disney Parks in America and get a special passport case!`,
    },
  ];

  return (
    <>
      <div className={style.Container} style={{ display: "flex", gap: "20px" }}>
        {gridtwo.map((value) => {
          return <Grid2Card image={value.image} title={value.title} />;
        })}
      </div>
    </>
  );
};

export default GridTwo;
