'use client'
import Link from 'next/link'
import styles from '../page.module.css'
import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.main}>

            <div style={{
                top: '3rem'
            }} className={styles.conContainer}>
                <div className={styles.conContainerInner}>
                    <div style={{ padding: '0 1%', height: '300px' }} className={styles.conContainerInnerImg}>
                        <Image className={styles.rightSideImg} src={"/Volunteer1.jpg"} width={480} height={263} alt='img' />
                        <div style={{}}>
                            <h3 style={{ marginBottom: '5px' }}>Apply for Campus Director | Ambassador</h3>
                            <a href="/dir-form" target='blank'>
                                <button className={styles.btntoo}>Click Here</button>
                            </a>
                        </div>
                    </div>
                    <div style={{ padding: '0 1%', height: '300px', marginBottom: '5%' }} className={styles.conContainerInnerImg}>
                        <Image className={styles.rightSideImg} src={"/imgDir.jpeg"} width={480} height={263} alt='img' />
                        <div style={{}}>
                            <h3 style={{ marginBottom: '5px' }}>Apply for Digital Volunteer</h3>
                            <a  href="/apply-for-volunteer" target='blank'>
                            <button className={styles.btntoo}>Click Here</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}