import Head from 'next/head'
import Image from 'next/image'
import Template from '../features/Template'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Template>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to VatKan!
        </h1>

        <p className={styles.description}>
          Cheat sheets for vatsim ground control
        </p>

        <div className={styles.grid}>

          <a href="/codes" className={styles.card}>
            <h2>Aviation Codes &rarr;</h2>
            <p>Find aiport codes and airline call-signs.</p>
          </a>

          <a href="/codes" className={styles.card}>
            <h2>Aviation Codes &rarr;</h2>
            <p>Find aiport codes and airline call-signs.</p>
          </a>

          <a href="/codes" className={styles.card}>
            <h2>Aviation Codes &rarr;</h2>
            <p>Find aiport codes and airline call-signs.</p>
          </a>

          <a href="/codes" className={styles.card}>
            <h2>Aviation Codes &rarr;</h2>
            <p>Find aiport codes and airline call-signs.</p>
          </a>

        </div>
      </main>

    </Template>

  )
}
