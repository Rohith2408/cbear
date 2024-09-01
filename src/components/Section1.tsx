import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import dextools_icon from '../images/Section1/dextools.png'
import trippy from '../images/Section1/bg.png'
import banner from '../images/Section1/banner.gif'

const Section1=()=>{

    const socialIcons= useRef([
        { src: telegram_icon, link: "https://t.me/hpepecto" },
        { src: twitter_icon, link: "https://x.com/hpepecto" },
        { src:dex_icon, link: "https://dexscreener.com/solana/kb6eidtdewxwpnltbfkc3t9c7a6xlfvvqhwbatseeb5" },
        { src: dextools_icon, link: "https://www.dextools.io/app/en/solana/pair-explorer/KB6EiDtdewXwpNLTBfKC3t9C7A6XLFvvQHwBaTSeeb5?t=1723830652615" }
    ]).current;
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()

    useEffect(()=>{
        // if(interval.current)
        // {
        //     clearInterval(interval.current)
        // }
        // interval.current=setInterval(()=>{
        //     setCurrentBg(currentbg==6?0:currentbg+1)
        // },100)
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
                            <p className={styles.caHeading}></p>
                            <p className={styles.ca}></p>
                            <img className={styles.copyicon}></img>
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