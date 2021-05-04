import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext'
import { DarkModeContext } from '../../contexts/DarkModeContext'
import styles from './Countdown.module.scss'


export function Countdown(){

    const { isDarkMode } = useContext(DarkModeContext)

    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown, 
        startCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')

    return (
        <div>

            <div className={isDarkMode ? styles.countdownContainerDark : styles.countdownContainer}>
                
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button className={ styles.countdownButton } disabled>
                    Ciclo encerrado
                </button>
            ) 
            : isActive 
            ? ( <button type='button' className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                    Abandonar Ciclo
                </button> )
            : (
                <button type='button' className={ styles.countdownButton } onClick={startCountdown}>
                    Iniciar ciclo
                </button> ) }


        </div>
    )
}