
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
            <h2 style={{ marginBottom: '8px' }}>1. Seminars:</h2>
            <p style={{ marginBottom: '4px' }}>
              Our seminars serve
              as knowledge-sharing platforms, fostering personal and professional growth. These
              events bring experts and learners together to explore and discuss key topics,
              facilitating learning and networking opportunities.
            </p>
          </div>
          <div className={styles.conContainerInnerImg}>
            <Image className={styles.rightSideImg} src={"/Seminars.jpg"} width={480} height={263} alt='img' />
          </div>
        </div>
      </div>
      <div className={styles.conContainer}>
        <div className={[styles.forCol, styles.conContainerInner].join(" ")}>
          <div className={styles.conContainerInnerRightImg}>
            <Image className={styles.rightSideImg} src={"/Workshops.jpg"} width={480} height={263} alt='imga' />
          </div>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>2. Workshops:</h2>
            <p style={{ marginBottom: '4  px' }} >
              Our workshops are
              dynamic learning experiences designed to impart practical skills and knowledge. They
              offer hands-on training and interactive sessions, equipping participants with
              valuable tools for personal and professional development.</p>
          </div>
        </div>
      </div>
      <div className={styles.conContainer}>
        <div className={styles.conContainerInner}>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>3. Tech-based Short Courses:</h2>
            <p style={{ marginBottom: '4px' }}>
              Our tech-based
              short courses provide focused and practical learning experiences. Tailored to
              industry demands, they equip participants with essential skills and knowledge for
              today's tech-driven world.
            </p>
          </div>
          <div className={styles.conContainerInnerImg}>
            <Image className={styles.rightSideImg} src={"/courses.jpg"} width={480} height={263} alt='pic' />
          </div>
        </div>
      </div>

      <div className={styles.conContainer}>
        <div className={[styles.forCol, styles.conContainerInner].join(" ")}>
          <div className={styles.conContainerInnerRightImg}>
            <Image className={styles.rightSideImg} src={"/Hackathon.jpg"} width={480} height={263} alt='pic' />
          </div>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>4. Hackathons:</h2>
            <p style={{ marginBottom: '4  px' }} >
              Our hackathons are
              innovation-driven events that challenge participants to solve real-world problems
              through creative coding and teamwork. They provide a platform for tech enthusiasts
              to showcase their skills and drive meaningful change through technology.</p>
          </div>
        </div>
      </div>
      <div className={styles.conContainer}>
        <div className={styles.conContainerInner}>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>5. Internship Opportunities:</h2>
            <p style={{ marginBottom: '4px' }}>
              Through our
              extensive network and partnerships, we actively facilitate internship opportunities
              with various companies, leveraging our connections to provide valuable industry
              experience for students.
            </p>
          </div>
          <div className={styles.conContainerInnerImg}>
            <Image className={styles.rightSideImg} src={"/annie.jpg"} width={480} height={263} alt='pic' />
          </div>
        </div>
      </div>
    </div>
  )
}