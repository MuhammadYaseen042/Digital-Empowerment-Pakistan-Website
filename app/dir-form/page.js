
import React from 'react'
import styles from './page.module.css'
import addData1 from '../lib/mongodb'
import { redirect } from 'next/navigation'


export default function page() {

    const addData = async (e) => {
        "use server"
        await addData1(e);
        redirect("/")
        console.log('pushed');
    };


    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <form className={styles.cardform} action={addData} method='POST'>
                        <div className={styles.dropdown}>
                            <select name="postfor" className={styles.dropdownselect} id="postfor">
                                <option value="director">Director</option>
                                <option value="ambassador">Ambassador</option>
                            </select>
                            <label className={styles.dropdownlabel}>Apply for</label>
                        </div>
                        <div className={styles.input}>
                            <input
                                className={styles.inputfield}
                                type="text"
                                name="name"
                                defaultValue=""
                                required
                            />
                            <label className="">Full name</label>
                        </div>
                        {/* Dropdown */}
                        <div className={styles.input}>
                            <input type="email" className={styles.inputfield} name="email" required />
                            <label className="">Email</label>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="text"
                                className={styles.inputfield}
                                name="phone"
                                required
                            />
                            <label className="">WhatsApp Number</label>
                        </div>
                        <div className={styles.dropdown}>
                            <select name="gender" className={styles.dropdownselect} id="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                            <label className={styles.dropdownlabel}>Gender</label>
                        </div>
                        <br />
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="inst"
                                id="inst"
                                defaultValue=""
                                className={styles.inputfield}
                                required
                            />
                            <label className="">Institute Name</label>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="field"
                                id="field"
                                defaultValue=""
                                className={styles.inputfield}
                                required
                            />
                            <label className="">Field of Study</label>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="year"
                                id="year"
                                defaultValue=""
                                className={styles.inputfield}
                                required
                            />
                            <label className="">Year of Study</label>
                        </div>
                        <div className={styles.dropdown}>
                            <select name="region" id="region" className={styles.dropdownselect}>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Sindh">Sindh</option>
                                <option value="KPK">KPK</option>
                                <option value="Balochistan">Balochistan</option>
                                <option value="GB">GB</option>
                                <option value="AJK">AJK</option>
                            </select>
                            <label className={styles.dropdownlabel}>Choose Region</label>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="fbLink"
                                placeholder="Optional"
                                className={styles.inputfield}
                            />
                            <label className="">Facebook Link</label>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="instaLink"
                                defaultValue=""
                                placeholder="Optional"
                                className={styles.inputfield}
                            />
                            <label className="">Instagram Link</label>
                        </div>
                        <div className={styles.input}>
                            <input
                                type="text"
                                name="LinkedlnLink"
                                defaultValue=""
                                placeholder="Optional"
                                className={styles.inputfield}
                            />
                            <label className="">Linkedn Link</label>
                        </div>
                        <div className={styles.input}>
                            <textarea
                                id="experiences"
                                name="experiences"
                                rows={2}
                                cols={50}
                                className={styles.inputfield}
                                required
                                defaultValue={""}
                            />
                            <label className="">Explain your previous experiences</label>
                        </div>
                        <label className={styles.labelSkill} style={{ margin: "0.7rem 0" }}>
                            Mention Your Best Skills
                        </label>
                        <br />
                        <br />
                        <div className={styles.checkDiv}>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="leadership"
                                    name="Leadership"
                                    defaultValue="Leadership"
                                />
                                <span className={styles.checkmark} />
                                Leadership
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Communication"
                                    name="Communication"
                                    defaultValue="Communication"
                                />
                                <span className={styles.checkmark} />
                                Communication
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Social Media"
                                    name="Social Media"
                                    defaultValue="Social Media"
                                />
                                <span className={styles.checkmark} />
                                Social Media
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Information"
                                    name="Information"
                                    defaultValue="Information Technology"
                                />
                                <span className={styles.checkmark} />
                                Information Technology
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Graphic"
                                    name="Graphic"
                                    defaultValue="Graphic Designing"
                                />
                                <span className={styles.checkmark} />
                                Graphic Designing
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Writing"
                                    name="Writing"
                                    defaultValue="Content Writing"
                                />
                                <span className={styles.checkmark} />
                                Content Writing
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Editing"
                                    name="Editing"
                                    defaultValue="Video Editing | Creator"
                                />
                                <span className={styles.checkmark} />
                                Video Editing | Creator
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Freelancing"
                                    name="Freelancing"
                                    defaultValue="Freelancing"
                                />
                                <span className={styles.checkmark} />
                                Freelancing
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Web"
                                    name="Web"
                                    defaultValue="Web Developer"
                                />
                                <span className={styles.checkmark} />
                                Web Developer
                            </label>
                            <label className={styles.customcheckbox}>
                                <input className={styles.checkInput}
                                    type="checkbox"
                                    id="Marketing"
                                    name="Marketing"
                                    defaultValue="Digital Marketing"
                                />
                                <span className={styles.checkmark} />
                                Marketing
                            </label>
                        </div>
                        <div className={styles.action}>
                            <button className={styles.actionbutton} >Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


