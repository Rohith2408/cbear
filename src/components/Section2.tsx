import styles from "./Section2.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section2/bg.png'
import image1 from '../images/Section2/1.png'
import image2 from '../images/Section2/2.png'
import image3 from '../images/Section2/3.png'
import image4 from '../images/Section2/4.png'
import image5 from '../images/Section2/5.png'
import banner from '../images/Section1/banner.gif'

const Section2=()=>{

    const images=useRef([image1,image2,image3,image4,image5,image1]).current;
    const [bannerHeight,setBannerHeight]=useState(0)

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <img className={styles.bg}></img>
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <img className={styles.banner} src={banner}/>
                    <div className={styles.titlewrapper}>
                        <img className={styles.titleimg}></img>
                    </div>
                    <div className={styles.imageswrapper}>

                    {
                        images.map((img)=>
                        <img src={img} className={styles.image}></img>
                        )
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2