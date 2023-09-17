import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mainfront}>
          <div className={styles.color1}></div>
          <div className={styles.color2}></div>
        </div>
        <div className={styles.mainNameContainer}>
          <h1 className={styles.mainName}>
            A Future of Empowerment Pakistan
          </h1>
        </div>
      </div>
      <div className={styles.conContainer}>
        <div className={styles.conContainerInner}>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>DEP with The Buraaq Academy</h2>
            <p style={{ marginBottom: '4px' }}>
              Digital Empowerment Pakistan &amp; The Buraaq Academy presents before you a
              webinar on Unlocking Global Opportunities: International Scholarships
              Guideline Session *Date: 16th-Sept-2023 Time: 7:00 PM - 9:00 PM Platform:
              Google Meet Apply now and invest in your future!
              <br />{" "}
              <span>
                <a href="https://skillify.pro/webinars/#session">Click here</a>
              </span>
            </p>
          </div>
          <div className={styles.conContainerInnerImg}>
            <Image className={styles.rightSideImg} src={"/oppurtunity.jpeg"} width={480} height={263} alt='img' />
          </div>
        </div>
      </div>
      <div className={styles.conContainer}>
        <div className={[styles.forCol,styles.conContainerInner].join(" ")}>
          <div className={styles.conContainerInnerRightImg}>
            <Image className={styles.rightSideImg} src={"/dep.jpeg"} width={480} height={263} alt='imga' />
          </div>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>Challenges in Achieving Digital Empowerment</h2>
            <p style={{ marginBottom: '4  px' }} >Digital                             empowerment, the process of enabling individuals and communities to access and
              effectively use digital technologies, presents several challenges that can vary
              based on factors like geographical location, socioeconomic status, and access to
              resources. Here are some common challenges associated with digital empowerment</p>
          </div>
        </div>
      </div>
      <div className={styles.conContainer}>
        <div className={styles.conContainerInner}>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>DEP with VFP</h2>
            <p style={{ marginBottom: '4px' }}>
              DEP and VFP to host Creative Leadership Conference in Islamabad
              A conference to discuss the future of leadership and creativity will be held in Lahore on September 8. The event is a partnership between Digital Empowerment Pakistan and Volunteer Force Pakistan.
              The conference will feature keynote speakers, panel discussions, workshops, and networking opportunities. It is open to all interested individuals and organizations. For more info
              <br />{" "}
              <span>
                <a href="https://www.instagram.com/p/Cw77XBaKNeV/?igshid=MzRlODBiNWFlZA==">Click here</a>
              </span>
            </p>
          </div>
          <div className={styles.conContainerInnerImg}>
            <Image className={styles.rightSideImg} src={"/vfp.jpeg"} width={480} height={263} alt='pic' />
          </div>
        </div>
      </div>

      <div className={styles.conContainer}>
        <div className={[styles.forCol,styles.conContainerInner].join(" ")}>
          <div className={styles.conContainerInnerRightImg}>
            <video className={styles.rightSideImg} src={"/video1.mp4"} controls />
          </div>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>Challenges in Achieving Digital Empowerment</h2>
            <p style={{ marginBottom: '4  px' }} >"Digital Empowerment Pakistan", aimed to enhance youth empowerment through bridging digital divide in Pakistan, has entered into an MoU with VFP , committing to be a supportive partner for CLC.🤝
              🗓️ 21-22 October<br />
              📍 Islamabad <br />
              ☎️ 03499535028</p>
          </div>
        </div>
      </div>
      <div >
        <div className={styles.conContainerInner}>
          <p className={styles.dumCont}>In a rapidly
            evolving world, Digital Empowerment Pakistan is a non-profit dedicated to nurturing
            Pakistani youth. Our mission is to bridge the digital gap, develop leadership skills,
            enhance academic growth, and empower young minds for a brighter future through impactful
            events and initiatives.</p>
        </div>
      </div>
      <div className={styles.conContainer}>
        <div style={{ display: 'block' }} className={styles.conContainerInner}>
          <div className={styles.icoCont}>
            <div className={styles.icoContInner}>
              <div className={styles.pngFor}>
                <img style={{ maxWidth: '50px' }} src="https://a.storyblok.com/f/133195/111x111/e17eaccfd5/recurso-1-2x.png/m/310x0" alt="250" title="Wold" loading="lazy" />
              </div>
              <div>
                Countries
              </div>
            </div>
            <div className={styles.icoContInner}>
              <div className={styles.pngFor}>
                <img style={{ maxWidth: '50px' }} src="https://a.storyblok.com/f/133195/155x101/63f4541a68/recurso-6-2x.png/m/310x0" alt="250" title="Wold" loading="lazy" />
              </div>
              <div>
                Annual Participants
              </div>
            </div>
            <div className={styles.icoContInner}>
              <div className={styles.pngFor}>
                <img style={{ maxWidth: '50px' }} src="https://a.storyblok.com/f/133195/170x101/4c95b481cb/recurso-3-2x.png/m/310x0" alt="250" title="Wold" loading="lazy" />
              </div>
              <div>
                Alumni
              </div>
            </div>
            <div className={styles.icoContInner}>
              <div className={styles.pngFor}>
                <img style={{ maxWidth: '50px' }} src="https://a.storyblok.com/f/133195/135x107/c2b2715dd1/recurso-5-2x.png/m/310x0" alt="250" title="Wold" loading="lazy" />
              </div>
              <div>
                Annual Experts
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.involed}>
        <h2 className={styles.headingtoo}>Want to get involved? We are looking for Campus Directors</h2>
        <button className={styles.btntoo}>Click Apply</button>
      </div>
      <div className={styles.conContainer}>
        <div className={styles.conContainerInner}>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>Comman Challenges in Digital Empowerment</h2>
            <p style={{ marginBottom: '4px' }}>
              Digital                                    empowerment, the process of enabling individuals and communities to access and
              effectively use digital technologies, presents several challenges that can vary
              based on factors like geographical location, socioeconomic status, and access to
              resources. Here are some common challenges associated with digital empowerment            </p>
          </div>
          <div className={styles.conContainerInnerImg}>
            <Image className={styles.rightSideImg} src={"/Volunteer1.jpg"} width={480} height={263} alt='img' />
          </div>
        </div>
      </div>
      <div className={styles.conContainer}>
        <div className={[styles.forCol,styles.conContainerInner].join(" ")}>
          <div className={styles.conContainerInnerRightImg}>
            <Image className={styles.rightSideImg} src={"/diFront.jpg"} width={480} height={263} alt='imga' />
          </div>
          <div className={styles.conContainerInnerbody}>
            <h2 style={{ marginBottom: '8px' }}>Challenges in Achieving Digital Empowerment</h2>
            <p style={{ marginBottom: '4  px' }} >Digital                             empowerment, the process of enabling individuals and communities to access and
              effectively use digital technologies, presents several challenges that can vary
              based on factors like geographical location, socioeconomic status, and access to
              resources. Here are some common challenges associated with digital empowerment</p>
          </div>
        </div>
      </div>
    </div>


  )
}
