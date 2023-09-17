
import styles from '../page.module.css'
import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.main}>

            <div style={{
                top: '3rem'
            }} className={styles.conContainer}>
                <div className={styles.conContainerInner}>
                    <div className={styles.conContainerInnerbody}>
                        <h2 style={{ marginBottom: '8px' }}>1. Enhancing Student Empowerment:</h2>
                        <p style={{ marginBottom: '4px' }}>
                            We are dedicated to
                            empowering Pakistan's university students. Through diverse events and workshops, we
                            focus on leadership, tech skills, and academics. Our goal is to foster well-rounded
                            individuals capable of driving innovation and positive change in society.
                        </p>
                    </div>
                    <div className={styles.conContainerInnerImg}>
                        <Image className={styles.rightSideImg} src={"/Empowerment.jpg"} width={480} height={263} alt='img' />
                    </div>
                </div>
            </div>
            <div className={styles.conContainer}>
                <div className={[styles.forCol, styles.conContainerInner].join(" ")}>
                    <div className={styles.conContainerInnerRightImg}>
                        <Image className={styles.rightSideImg} src={"/Bridging.jpg"} width={480} height={263} alt='imga' />
                    </div>
                    <div className={styles.conContainerInnerbody}>
                        <h2 style={{ marginBottom: '8px' }}>2. Bridging the Digital Divide:</h2>
                        <p style={{ marginBottom: '4  px' }} >
                            In today's digital
                            era, we're committed to bridging the digital divide through workshops, hackathons,
                            and coding camps. Our goal is to equip students with essential digital skills,
                            democratize access to technology, and empower them for the modern workforce.</p>
                    </div>
                </div>
            </div>
            <div className={styles.conContainer}>
                <div className={styles.conContainerInner}>
                    <div className={styles.conContainerInnerbody}>
                        <h2 style={{ marginBottom: '8px' }}>3. Generating Revenue and Giving Back:</h2>
                        <p style={{ marginBottom: '4px' }}>
                            Our commitment to
                            empowerment aligns with our dedication to giving back. To sustain our efforts, we
                            generate revenue through partnerships and workshops. We reinvest this income to
                            offer impactful programs to students. What makes us unique is our commitment to
                            allocate a portion of the proceeds to charitable causes, extending educational
                            opportunities and support to underserved communities.
                        </p>
                    </div>
                    <div className={styles.conContainerInnerImg}>
                        <Image className={styles.rightSideImg} src={"/GeneratingRevenue.jpg"} width={480} height={263} alt='pic' />
                    </div>
                </div>
            </div>

            <div className={styles.conContainer}>
                <div className={[styles.forCol, styles.conContainerInner].join(" ")}>
                    <div className={styles.conContainerInnerRightImg}>
                        <Image className={styles.rightSideImg} src={"/Education.jpg"} width={480} height={263} alt='pic' />
                    </div>
                    <div className={styles.conContainerInnerbody}>
                        <h2 style={{ marginBottom: '8px' }}>4. Empowering Through Education:</h2>
                        <p style={{ marginBottom: '4  px' }} >
                            We believe
                            education catalyzes transformation. Through our initiatives, we empower students to
                            enhance their knowledge, skills, and confidence. We foster a culture of continuous
                            learning, nurturing Pakistan's future leaders.</p>
                    </div>
                </div>
            </div>
            <div className={styles.conContainer}>
                <div className={styles.conContainerInner}>
                    <div className={styles.conContainerInnerbody}>
                        <h2 style={{ marginBottom: '8px' }}>5. Charity for the Needy Students:</h2>
                        <p style={{ marginBottom: '4px' }}>
                            As part of our
                            commitment to equitable education, we extend a helping hand to needy students.
                            Through our charity initiatives, we provide support, resources, and opportunities,
                            ensuring that all students have a chance to thrive and succeed.
                        </p>
                    </div>
                    <div className={styles.conContainerInnerImg}>
                        <Image className={styles.rightSideImg} src={"/Charity.jpg"} width={480} height={263} alt='pic' />
                    </div>
                </div>
            </div>
        </div>
    )
}