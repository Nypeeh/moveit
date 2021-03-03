import React, { useContext } from 'react'
import { ChallengesContext } from '../../hooks/ChallengesContext';
import { CountdownContext } from '../../hooks/CountdownContext';

import { Container, ChallengeNotActive, ChallengeActive } from './styles'

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Container>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className="failedButton"
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            
            <button
              className="succeededButton"
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      ) }
    </Container>
  )
}

export default ChallengeBox
