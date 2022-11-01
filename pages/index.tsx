import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selenium Practice Pages</title>
        <meta name="description" content="Practice selenium by scraping and controlling on the test app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selenium Practice Pages
        </h1>

        <p className={styles.description}>
          Practice your web scraping locally!
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <Link href="/practices/table">
              <h2>Table &rarr;</h2>
              <p>Scrape tables</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/practices/form">
              <h2>Form &rarr;</h2>
              <p>Submit forms</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href="/practices/screenshot">
              <h2>Screenshot &rarr;</h2>
              <p>Scroll page and take a screenshot</p>
            </Link>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/helloryosuke"
          target="_blank"
          rel="noopener noreferrer"
        >
          By @helloryosuke. Available on Github
        </a>
      </footer>
    </div>
  )
}

export default Home
