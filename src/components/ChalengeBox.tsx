import { useState, useEffect, useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChalengeBox.module.css"

export function ChalengeBox () {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return(
    <div className={styles.chalengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe { activeChallenge.amount } xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{ activeChallenge.description }</p>
          </main>

          <footer>
            <button 
              type='button'
              className={styles.challengeFailButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button 
              type='button'
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>  
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level up'/>
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}