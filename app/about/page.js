

import { redirect } from 'next/dist/server/api-utils'
import styles from '../page.module.css'
import Image from 'next/image'

export default function Home() {    
    
    return (
        <div  className={styles.main}>
            <div style={{ top: '3rem' }} className={styles.conContainer}>
                <div className={styles.conContainerInner}>
                    <div className={styles.conContainerInnerbody}>
                        <h2 style={{ marginBottom: '8px' }}>Who We Are</h2>
                        <p style={{ marginBottom: '4px' }}>
                            In a rapidly
                            evolving world, Digital Empowerment Pakistan is a non-profit dedicated to nurturing
                            Pakistani youth. Our mission is to bridge the digital gap, develop leadership
                            skills, enhance academic growth, and empower young minds for a brighter future
                            through impactful events and initiatives.
                        </p>
                    </div>
                    <div className={styles.conContainerInnerImg}>
                        <Image className={styles.rightSideImg} src={"/bLACK.png"} width={480} height={263} alt='img' />
                    </div>
                </div>
            </div>
            <div className={[styles.conContainer,styles.aboutText].join(" ")}>
                <div style={{display:'block'}} className={styles.conContainerInner}>
                    <h2>Where we Work</h2>
                    <p>Our National work calls for a National presence. Check out where we have teams on the ground!</p>
                </div>
            </div>
            <div className={styles.conContainer}>
                <div style={{ flexWrap: 'wrap' }} className={[styles.conContainerInner, styles.cities].join(" ")}>
                    <div > <Image className={styles.rightSideImg} src={"/Islamabad.jpg"} width={480} height={263} alt='img' />
                        <p>Islamabad City</p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/Lahore.jpg"} width={480} height={263} alt='img' />
                        <p>Lahore City</p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/Skardu.jpg"} width={480} height={263} alt='img' />
                        <p>Skardu City</p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/Karachi.jpg"} width={480} height={263} alt='img' />
                        <p>Karachi City </p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/Multan.jpg"} width={480} height={263} alt='img' />
                        <p>Multan City </p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/Kashmir.jpg"} width={480} height={263} alt='img' />
                        <p> Kashmir City</p>
                    </div>
                </div>
            </div>
            <div className={[styles.conContainer,styles.aboutText].join(" ")}>
                <div style={{display:'block',marginBottom:'0'}} className={styles.conContainerInner}>
                    <h2>Recent Changes at the Digital Empowerment Pakistan Foundation</h2>
                    <p>Read our statement about the investigation into misconduct at the Digital Empowerment Pakistan Foundation.</p>
                </div>
            </div>
        </div>
    )
}