import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer (){
    return (
    <footer className={styles.footer}>

        <div className={styles.logo}>
          <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          >
          <span className=''>
            <Image src="/mail.png" alt="Vercel Logo" width={100} height={100} />
          </span>
          </a>
        </div>
        

        <div className={styles.logo}>
          <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          >
          <span className=''>
            <Image src="/instagram.png" alt="Vercel Logo" width={100} height={100} />
          </span>
          </a>
        </div>
    </footer>
    )
}