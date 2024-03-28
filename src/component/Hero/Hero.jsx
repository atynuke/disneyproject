import style from './Hero.module.css';
import image1 from '../../assets/princesselsa.jpeg';


export default function DisneyHero() {

    return (
        <div className={style.secondContent}>
           

            <div className={style.princesselsa}>
                <img src={image1} alt="firstImage" height={600} width={1360}/>
            </div>
            <div className={style.leftContent}>
               <h1> "Frozen" 10th anniversary</h1>
                <p>Check out the latest nformation, character information, related <br /> videos,
                and more about the Disney animated movies that caused <br />
                the frozen phenomenon aruond the world!</p>
            </div>
        </div>

    )
}