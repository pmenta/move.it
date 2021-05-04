import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { DarkModeContext } from '../../contexts/DarkModeContext'
import styles from './Profile.module.scss'

import { FiMoon, FiSun } from 'react-icons/fi';

export function Profile() {

    const { level } = useContext(ChallengesContext)
    const {isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

    return(
        <div className={styles.profileContainer}>
            <img src='https://github.com/pmenta.png' alt='Foto do perfil' />
            <div>
                <strong>João Vitor</strong>
                <p>
                    <img src='icons/level.svg' alt='Level' />
                    Level {level}
                </p>
            </div>
            <div className={styles.toggleDarkModeButton}>
                {isDarkMode ? ( 
                        <button onClick={toggleDarkMode}> 
                        <FiSun size='2.5rem' color='white'></FiSun>
                        </button>
                      )
                      : (
                        <button onClick={toggleDarkMode}> 
                        <FiMoon size='2.5rem' ></FiMoon>
                        </button>
                      ) }
            </div>
        </div>
    ) 
}