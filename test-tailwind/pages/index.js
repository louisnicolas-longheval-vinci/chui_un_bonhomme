import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuPrincipal from '../components/menu'
import MenuSecondaire from '../components/menu_bis'
import MenuGlobal from '../components/menuGlobal'
import Footer from '../components/footer'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loading";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chui un bonhomme</title>
        <meta name="Chui un bonhomme" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuGlobal/>

      <div className=''>
        <h1 className={styles.title}>
          Chui Un Bonhomme
        </h1>
      </div>
      <Footer/>
    </div>
  )
}
