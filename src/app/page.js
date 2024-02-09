import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
      </div>
    </main>
  )
}
