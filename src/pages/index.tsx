import React from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChalengeBox } from "../components/ChalengeBox";

import styles from '../styles/pages/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Inicio | movere-te</title>
      </Head>

      <ExperienceBar />
      
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          
          <div>
            <ChalengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
