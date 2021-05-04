import React, { useContext } from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext'

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import styles from '../styles/pages/Home.module.scss'
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export default function Home(props: HomeProps) {

  const {isDarkMode} = useContext(DarkModeContext)

  return (

    <div className={isDarkMode ? styles.homepageDark : styles.homepage}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}>
      
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar/>
      
        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges />
              <Countdown/>
            </div>
            <div>
              <ChallengeBox></ChallengeBox>
            </div>
          </section>
        </CountdownProvider>
      </div>
        </ChallengesProvider>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted, isDarkMode } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      isDarkMode: Boolean(isDarkMode)
    }
  }
}
