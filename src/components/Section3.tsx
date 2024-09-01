import styles from "./Section3.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section2/bg.png'
import banner from '../images/Section1/banner.gif'

const Section3=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <img className={styles.bg}></img>
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <img className={styles.banner} src={banner}/>
                    <img className={styles.titleimg}></img>
                    <p  className={styles.text}>
                        This bear will send you to the moon , pack your bags and hold on!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section3