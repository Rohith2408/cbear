import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import coingecko_icon from '../images/Section1/coingecko.png'
import sunswap_icon from '../images/Section1/sunswap.jpeg'
import dextools_icon from '../images/Section1/dextools.png'
import copy from '../images/Section1/copy.png'


const Section1=()=>{

    const socialIcons= useRef([
        { src: telegram_icon, link: "https://t.me/CocaineBearTRX" },
        { src: twitter_icon, link: "https://x.com/cbeartrx" },
        { src:dex_icon, link: "" },
        { src: dextools_icon, link: "" },
        { src:coingecko_icon, link: "" },
        { src: sunswap_icon, link: "" }
    ]).current;
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()

    useEffect(()=>{

    },[currentbg])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <img className={styles.bg}></img>
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <div className={styles.textwrapper}>
                        <img className={styles.titleimg}></img>
                        <p className={styles.subtitle}>The highest bear on Tron</p>
                        <div className={styles.cawrapper}>
                            <p className={styles.caHeading}>CA: </p>
                            <p className={styles.ca}></p>
                            <img src={copy} className={styles.copyicon}></img>
                        </div>
                        <div className={styles.socialWrapper}>
                        {
                            socialIcons.map((icon) => (
                                <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                    <img
                                        className={styles.socialicons}
                                        loading="lazy"
                                        alt=""
                                        src={icon.src}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.imgwrapper}>
                        <img className={styles.image}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1