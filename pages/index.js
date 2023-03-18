import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isActive, setActive] = useState({});

  const toggleClass = async (e) => {
    await setActive({[e.target.id]: true})
    setTimeout(() => {
      setActive({[e.target.id]: false})
    }, 200)
  }

  return (
    <main className={styles.cont}>
      <h2>Hello, I&apos;m</h2>
      <div className={styles.alphab_cont}>
        <button className={isActive.F ? styles.active : ''} onClick={toggleClass} id="F">F</button>
        <button className={isActive.E ? styles.active : ''} onClick={toggleClass} id="E">E</button>
        <button className={isActive.B ? styles.active : ''} onClick={toggleClass} id="B">B</button>
        <button className={isActive.A ? styles.active : ''} onClick={toggleClass} id="A">B</button>
        <button className={isActive.I ? styles.active : ''} onClick={toggleClass} id="I">I</button>
        <button className={isActive.C ? styles.active : ''} onClick={toggleClass} id="C">E</button>
        <button className={isActive.R ? styles.active : ''} onClick={toggleClass} id="R">!</button>
      </div>
      <div className={styles.twriter}>
      <p id='l1'>C:\Users&#62; ls</p>
      <p id='l2'>user1 user2 febbie</p><p id='l3'>C:\Users&#62; cd febbie</p><p id='l4'>C:\Users\febbie&#62; ls</p>
      <p id='l5'><Link href="/about"><a>about</a></Link> | <Link href="/projects"><a>projects</a></Link> | <Link href="/techs"><a>techs</a></Link></p>
      </div>
    </main>
  )
}
