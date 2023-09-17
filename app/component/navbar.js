'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.css'
import { useState } from 'react'

export default function Navbar() {
    function navShow() {
        console.log("navShow")
        var nav = document.getElementsByClassName(styles.navUl)[0];
        var navIco = document.getElementsByClassName(styles.navIco)[0];

        if (nav.style.display === "flex") {
            nav.style.display = "none";
            
        } else {
            nav.style.display = "flex";
            nav.style.transform = "translate(0%)";
        }

        document.addEventListener('click', function (event) {
            var isClickInside = navIco.contains(event.target);
            if (!isClickInside) {
                nav.style.display = "none";
            }
        });



    }
    return (
        <header className={styles.header}>
            <div className={styles.main}>
                <div className={styles.navbar__logo}>
                    <Link href="/"> <img className={styles.logoImg} src="/Logo.png" alt="logo" width={50} height={50} /> </Link>
                </div>
                <div className={styles.navIco} onClick={navShow}>
                    <Image src="/menuIco.png" alt="user" width={30} height={30} />
                </div>
                <ul className={styles.navUl}>
                    <div className={styles.navbar__links}>
                        <Link className={styles.link} href="/">
                            Home
                        </Link>
                        <Link className={styles.link} href="/about">
                            About
                        </Link>
                        <Link className={styles.link} href="/aims">
                            Aims
                        </Link>
                        <Link className={styles.link} href="/woffer">
                            Offers
                        </Link>
                    </div>
                    <div className={styles.login}>
                        <Link className={styles.buttonApply} href="/apply">
                            Apply Now
                        </Link>
                    </div>
                </ul>
            </div>
        </header>
    )
}