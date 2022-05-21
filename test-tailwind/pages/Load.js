import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuPrincipal from '../components/menu'
import MenuSecondaire from '../components/menu_bis'
import MenuGlobal from '../components/menuGlobal'
import Footer from '../components/footer'
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react"
import Accordion from '../components/accordion'



export default function Home() {
    const [fontSize, setFontSize] = useState('50px')
    const handleScroll =() => {
        setFontSize(window.scrollY + "px")
    }
    const [delay, setDelay] = useState(0)
    setTimeout(() => setDelay(1), 2000)
    return delay == 0 ? <Image
    priority
    src="/cub-logo-vectoriel.svg"
    className=''
    layout={'fill'}/> 

    :(
    <div className={styles.container}>
      <Head>
        <title>Chui un bonhomme</title>
        <meta name="Chui un bonhomme" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div style={styles}>
            <Accordion 
            title="Click Me!" 
            content="this is content 1" 
            />
            <Accordion 
            title="Click Me!" 
            content="this is content 2" 
            />
        </div>


      <div className=''>
        <h1 className={styles.title}>
          Chui Un Bonhomme
        </h1>
        <p style={{ fontSize: fontSize}}>
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
            HELLO WORLD
        </p>
      </div>
      
    </div>
  )
}