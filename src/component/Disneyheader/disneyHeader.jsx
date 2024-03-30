import React from 'react';
import image from '../../assets/Disney.jpeg';
import image1 from '../../assets/searchicon.png';
import style from './disneyHeader.module.css';

export default function DisneyHeader() {


    return (
        <>
            <nav>

                <div className={style.Disney}>
                    <img src={image} alt="firstImage" height={60} width={130} />
                </div>

                <ul>
                    <li>Disney Plus</li>
                    <li>Shopping</li>
                    <li>Movie</li>
                    <li>TV</li>
                    <li>Parks &<br />Resorts</li>
                    <li>Music</li>
                    <li>Live & <br />Events</li>
                    <li>Game</li>
                    <li>Kids</li>
                    <li>Company <br />Information</li>
                </ul>
                   <input type="search" name="Search"
                        id="Search" placeholder='Search within the sit' />
                        <br />
                    <div className={style.searchicon}>
                        <img src={image1} alt="secondImage" height={15} width={20} />
                        <button></button>
                    </div>
                
            </nav>


        </>
    )
}




// "Frozen" 10th anniversary

// Check out the latest nformation, character information, related videos,
// and more about the Disney animated movies that caused 
// the <frozen phenomenon> aruond the world!

// he jacket design for this work has been released, and the contents of the included bonus 
// have also been revealed.

// "Pixar Best" 

// The ultimate best album of Pixar 
// music March 20th CD
// released/digital distribution


// Held nationwide from May
// to June!

// "Disney on classic ~ Gift of Dreams 
// and Magic 2024" Orchestral
// performance of many popular works


// Focus on Minnie in March

// Enjoy spring while being inspired by
// the fashionable, fun-loving, and 
// always positive Minnie Mouse!  

// disney palpalooza

// Tokyo Disneyland "Disney 
// Palpalooza" 2nd "Donald's Quality
// Duck City" held